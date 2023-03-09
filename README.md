<h1 align="center">
  <br>
  <img src="https://raw.githubusercontent.com/stark-eth/openai-translate-vscode/master/assets/icons/icon.ico" width = "200" height = "200">
  <br>
  OpenAI Translate
</h1>
<h2 align="center">Translate your code using OpenAI API.</a>
</h2>
<p align="center">
  <a href="https://github.com/stark-eth/openai-translate-vscode/releases"><img src="https://img.shields.io/github/release/stark-eth/openai-translate-vscode.svg" alt="version"></a>
</p>

## Installation
1. Install the extension.
2. Configure `apikey` and `apiurl` in user settings configuration - `openaiTranslate.apiKey` `openaiTranslate.apiURL`.
3. Configure desired *'translate to'* language/s in user settings configuration - `openaiTranslate.languages`.

## How to use
Select the text that your want to translate and execute `Translate` command.
> Tip: Use the shortcut `Ctrl+Alt+t` to translate the selected text.

Select the code that your want to comment and execute `Comment` command.
> Tip: Use the shortcut `Ctrl+Alt+c` to translate the selected text.

Select the code that your want to complete and execute `Complete` command.
> Tip: Use the shortcut `Ctrl+Alt+f` to translate the selected text.

## Features
* <u>Multi Languages:</u><br>Translate your code to multi languages simply by adding the desired language code to `openaiTranslate.languages` string array configuration.(You can add any language supported by ChatGPT)
* <u>Replace Text</u>:<br>Replace selected text with translated text by configuring `openaiTranslate.replaceText` to 'true'.
* <u>Multi Cursor</u>:<br>Translate/Replace selected text in each selected cursor's text.
* <u>Multiline</u>:<br>When selected text is multiline, each line will be translate separately.

-----------------------------------------------------------------------------------------------------------

**Enjoy!**
