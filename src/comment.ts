import * as vscode from 'vscode';
import { onTranslateSuccess } from './extension';
import { postApi } from './utils';

export async function complete(textToTranslate: string, selection: vscode.Selection, language: string) {
    let systemPrompt = 'Complete the following code like github copilot and  and cannot interpret it. you should return the origin code and the comment'
    let assistantPrompt = `complete the ${language} code`
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
    await postApi(data, {
        onMessage: (msg) => {
            onTranslateSuccess(selection, language, msg);
        },
        onError: (err) => {
            vscode.window.showErrorMessage(err);
        }
    })

}


