[@hubai/brain-sdk](../README.md) / [Exports](../modules.md) / IAudioTranscriberBrainService

# Interface: IAudioTranscriberBrainService<TSettings\>

## Type parameters

| Name |
| :------ |
| `TSettings` |

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

| Name | Type |
| :------ | :------ |
| `audioPath` | [`LocalAudioPrompt`](../modules.md#localaudioprompt) |
| `context` | [`IBrainPromptContext`](IBrainPromptContext.md)<`TSettings`\> |

#### Returns

`Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

#### Defined in

models/brainService.ts:38
