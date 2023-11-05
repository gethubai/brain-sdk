# Interface: IAudioTranscriberBrainService<TSettings\>

Service for transcribing audio (speech-to-text)

## Type parameters

| Name | Description |
| :------ | :------ |
| `TSettings` | The type of the brain settings |

## Hierarchy

- [`IBrainService`](IBrainService.md)

  ↳ **`IAudioTranscriberBrainService`**

## Table of contents

### Methods

- [transcribeAudio](IAudioTranscriberBrainService.md#transcribeaudio)

## Methods

### transcribeAudio

▸ **transcribeAudio**(`audioPath`, `context`): `Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioPath` | [`LocalAudioPrompt`](../modules.md#localaudioprompt) | A local path to the audio file |
| `context` | [`IBrainPromptContext`](IBrainPromptContext.md)<`TSettings`\> | Some additional data we can send to the brain along with the prompt |

#### Returns

`Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

#### Defined in

[models/brainService.ts:218](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L218)
