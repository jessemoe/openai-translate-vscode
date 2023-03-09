import * as vscode from 'vscode';
import { onTranslateSuccess } from './extension';
import axios from 'axios';

export async function translate(textToTranslate: string, selection: vscode.Selection, language: string) {
    const apiKey = vscode.workspace.getConfiguration('openaiTranslate')['apiKey'];
    const apiURL = vscode.workspace.getConfiguration('openaiTranslate')['apiURL'];
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    }
    const config = {
        headers: headers
    };
    let systemPrompt = 'You are a translation engine that can only translate text and cannot interpret it.'
    let assistantPrompt = `translate to ${language}`
    const data = {
        model: 'gpt-3.5-turbo',
        temperature: 0,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
        messages: [
            {
                role: 'system',
                content: systemPrompt,
            },
            {
                role: 'assistant',
                content: assistantPrompt,
            },
            { role: 'user', content: `${textToTranslate}` },
        ],
    }

    axios.post(apiURL+'/v1/chat/completions', data, config)
        .then(function (response) {
            const targetTxt = response.data.choices[0].message.content
            onTranslateSuccess(selection, language, targetTxt);
        })
        .catch(function (error) {
            console.log(error);
        });


    
}


