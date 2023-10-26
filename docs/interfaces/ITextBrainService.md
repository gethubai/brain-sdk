[@hubai/brain-sdk](../README.md) / [Exports](../modules.md) / ITextBrainService

# Interface: ITextBrainService<TSettings\>

## Type parameters

| Name |
| :------ |
| `TSettings` |

## Hierarchy

- [`IBrainService`](IBrainService.md)

  ↳ **`ITextBrainService`**

## Table of contents

### Methods

- [sendTextPrompt](ITextBrainService.md#sendtextprompt)

## Methods

### sendTextPrompt

▸ **sendTextPrompt**(`prompts`, `context`): `Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompts` | [`TextBrainPrompt`](TextBrainPrompt.md)[] |
| `context` | [`IBrainPromptContext`](IBrainPromptContext.md)<`TSettings`\> |

#### Returns

`Promise`<[`BrainPromptResponse`](../modules.md#brainpromptresponse)\>

#### Defined in

models/brainService.ts:25
