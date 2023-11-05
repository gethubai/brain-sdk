# Interface: ImageGenerationBrainPrompt

Represents an image generation prompt sent to the brain

## Hierarchy

- [`TextBrainPrompt`](TextBrainPrompt.md)

  ↳ **`ImageGenerationBrainPrompt`**

## Table of contents

### Properties

- [attachments](ImageGenerationBrainPrompt.md#attachments)
- [expectedResponseType](ImageGenerationBrainPrompt.md#expectedresponsetype)
- [message](ImageGenerationBrainPrompt.md#message)
- [role](ImageGenerationBrainPrompt.md#role)
- [sentAt](ImageGenerationBrainPrompt.md#sentat)

## Properties

### attachments

• `Optional` **attachments**: [`FileAttachment`](../modules.md#fileattachment)[]

A list of file attachments

#### Inherited from

[TextBrainPrompt](TextBrainPrompt.md).[attachments](TextBrainPrompt.md#attachments)

#### Defined in

[models/brainService.ts:141](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L141)

___

### expectedResponseType

• **expectedResponseType**: ``"base64"`` \| ``"url"`` \| ``"binary"``

How we want the brain to return the image
base64: The brain will return the image as a base64 encoded string
url: The brain will return the image url
binary: The brain will return the image as a binary buffer

#### Defined in

[models/brainService.ts:171](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L171)

___

### message

• **message**: `string`

The text prompt

#### Inherited from

[TextBrainPrompt](TextBrainPrompt.md).[message](TextBrainPrompt.md#message)

#### Defined in

[models/brainService.ts:136](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L136)

___

### role

• **role**: [`UserRole`](../modules.md#userrole)

The role of the sender (user, brain or system)

#### Inherited from

[TextBrainPrompt](TextBrainPrompt.md).[role](TextBrainPrompt.md#role)

#### Defined in

[models/brainService.ts:126](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L126)

___

### sentAt

• **sentAt**: `Date`

The utc date that the prompt has been sent

#### Inherited from

[TextBrainPrompt](TextBrainPrompt.md).[sentAt](TextBrainPrompt.md#sentat)

#### Defined in

[models/brainService.ts:131](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L131)
