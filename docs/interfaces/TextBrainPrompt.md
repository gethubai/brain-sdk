# Interface: TextBrainPrompt

Represents a text prompt sent to the brain

## Hierarchy

- **`TextBrainPrompt`**

  ↳ [`ImageGenerationBrainPrompt`](ImageGenerationBrainPrompt.md)

## Table of contents

### Properties

- [attachments](TextBrainPrompt.md#attachments)
- [message](TextBrainPrompt.md#message)
- [role](TextBrainPrompt.md#role)
- [sentAt](TextBrainPrompt.md#sentat)

## Properties

### attachments

• `Optional` **attachments**: [`FileAttachment`](../modules.md#fileattachment)[]

A list of file attachments

#### Defined in

[models/brainService.ts:141](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L141)

___

### message

• **message**: `string`

The text prompt

#### Defined in

[models/brainService.ts:136](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L136)

___

### role

• **role**: [`UserRole`](../modules.md#userrole)

The role of the sender (user, brain or system)

#### Defined in

[models/brainService.ts:126](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L126)

___

### sentAt

• **sentAt**: `Date`

The utc date that the prompt has been sent

#### Defined in

[models/brainService.ts:131](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L131)
