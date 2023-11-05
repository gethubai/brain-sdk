# Interface: IBrainPromptContext<TPromptSettings\>

Some additional data we can send to the brain along with the prompt

## Type parameters

| Name | Description |
| :------ | :------ |
| `TPromptSettings` | The type of the brain settings |

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [conversationId](IBrainPromptContext.md#conversationid)
- [id](IBrainPromptContext.md#id)
- [senderId](IBrainPromptContext.md#senderid)
- [settings](IBrainPromptContext.md#settings)

## Properties

### conversationId

• `Optional` **conversationId**: `string`

A conversation id to group prompts together

#### Defined in

[models/brainService.ts:103](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L103)

___

### id

• **id**: `string`

The unique id of the prompt

#### Defined in

[models/brainService.ts:98](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L98)

___

### senderId

• **senderId**: `string`

The id of the user who is sending the prompt

#### Defined in

[models/brainService.ts:106](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L106)

___

### settings

• `Optional` **settings**: `TPromptSettings`

The brain settings to use for this prompt

#### Defined in

[models/brainService.ts:109](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L109)
