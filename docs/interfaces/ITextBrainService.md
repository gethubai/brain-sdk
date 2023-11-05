# Interface: ITextBrainService<TSettings\>

Service implemented by brains that support text prompts

## Type parameters

| Name | Description |
| :------ | :------ |
| `TSettings` | The type of the brain settings |

## Hierarchy

- [`IBrainService`](IBrainService.md)

  ↳ **`ITextBrainService`**

## Table of contents

### Methods

- [sendTextPrompt](ITextBrainService.md#sendtextprompt)

## Methods

### sendTextPrompt

▸ **sendTextPrompt**(`prompts`, `context`): `Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

Sends a text prompt to the brain

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompts` | [`TextBrainPrompt`](TextBrainPrompt.md)[] |
| `context` | [`IBrainPromptContext`](IBrainPromptContext.md)<`TSettings`\> |

#### Returns

`Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

The response from the brain

#### Defined in

[models/brainService.ts:155](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L155)
