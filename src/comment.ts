import * as vscode from 'vscode';
import { onTranslateSuccess } from './extension';
import { postApi } from './utils';

export async function comment(textToTranslate: string, selection: vscode.Selection, language: string) {

    let systemPrompt = 'Comment the following code to make more clear and  and cannot interpret it. you should return the origin code and the comment and just comment the important code'
    let assistantPrompt = `comment the ${language} code`
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


