# Interface: IImageGenerationBrainService<TSettings\>

Service for generating images from text

## Type parameters

| Name | Description |
| :------ | :------ |
| `TSettings` | The type of the brain settings |

## Hierarchy

- [`IBrainService`](IBrainService.md)

  ↳ **`IImageGenerationBrainService`**

## Table of contents

### Methods

- [generateImage](IImageGenerationBrainService.md#generateimage)

## Methods

### generateImage

▸ **generateImage**(`prompts`, `context`): `Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

Generates an image from the prompt

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prompts` | [`ImageGenerationBrainPrompt`](ImageGenerationBrainPrompt.md)[] | The prompts to send to the brain |
| `context` | [`IBrainPromptContext`](IBrainPromptContext.md)<`TSettings`\> | Some additional data we can send to the brain along with the prompt |

#### Returns

`Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

The response from the brain

#### Defined in

[models/brainService.ts:186](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L186)
