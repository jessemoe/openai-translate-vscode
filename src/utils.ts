import axios from "axios";
import * as vscode from 'vscode';

interface PostOptions {
    onMessage(data: string): void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError(error: any): void
}

interface OpanaiBody {
    model: string,
    temperature: number,
    max_tokens: number,
    top_p: number,
    frequency_penalty: number,
    presence_penalty: number,
    messages: {
        role: string,
        content: string,
    }[],
}

export async function postApi(data: OpanaiBody, options: PostOptions) {
    const apiKey = vscode.workspace.getConfiguration('openaiTranslate')['apiKey'];
    const apiURL = vscode.workspace.getConfiguration('openaiTranslate')['apiURL'];
    const { onMessage, onError } = options
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
    }
    const config = {
        headers: headers
    };
    axios.post(apiURL + '/v1/chat/completions', data, config)
        .then(function (response) {
            const targetTxt = response.data.choices[0].message.content
            onMessage(targetTxt)
        })
        .catch(function (error) {
            onError(error)
        });
}