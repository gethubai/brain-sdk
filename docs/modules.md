# @hubai/brain-sdk

## Table of contents

### Enumerations

- [PromptType](enums/PromptType.md)

### Classes

- [BrainSettingsValidationResult](classes/BrainSettingsValidationResult.md)

### Interfaces

- [IAudioTranscriberBrainService](interfaces/IAudioTranscriberBrainService.md)
- [IBrainPromptContext](interfaces/IBrainPromptContext.md)
- [IBrainService](interfaces/IBrainService.md)
- [IBrainSettings](interfaces/IBrainSettings.md)
- [IImageGenerationBrainService](interfaces/IImageGenerationBrainService.md)
- [ITextBrainService](interfaces/ITextBrainService.md)
- [ImageGenerationBrainPrompt](interfaces/ImageGenerationBrainPrompt.md)
- [TextBrainPrompt](interfaces/TextBrainPrompt.md)

### Type Aliases

- [BrainPromptResponse](modules.md#brainpromptresponse)
- [FileAttachment](modules.md#fileattachment)
- [FileType](modules.md#filetype)
- [LocalAudioPrompt](modules.md#localaudioprompt)
- [ResponseFile](modules.md#responsefile)
- [UserRole](modules.md#userrole)

## Type Aliases

### BrainPromptResponse

Ƭ **BrainPromptResponse**: `Object`

The response we get back from the brain

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attachments?` | [`ResponseFile`](modules.md#responsefile)[] | The files we are sending back to the user |
| `result` | `string` | The text result of the prompt |
| `validationResult` | [`BrainSettingsValidationResult`](classes/BrainSettingsValidationResult.md) | The result of the settings/prompt validation. |

#### Defined in

[models/brainService.ts:6](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L6)

___

### FileAttachment

Ƭ **FileAttachment**: `Object`

An attachment

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | An unique id of the attachment (Optional) |
| `mimeType` | `string` | The mime type of the file |
| `originalFileName?` | `string` | The original file name (Optional) |
| `path` | `string` | The path of the attached file (required, must be an absolute local path ) |
| `size` | `number` | The size of the file in bytes. |

#### Defined in

[models/brainService.ts:58](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L58)

___

### FileType

Ƭ **FileType**: ``"image"`` \| ``"video"`` \| ``"audio"`` \| ``"document"`` \| ``"other"``

The type of file we are sending to the brain

#### Defined in

[models/brainService.ts:25](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L25)

___

### LocalAudioPrompt

Ƭ **LocalAudioPrompt**: `Object`

Represents an audio prompt sent to the brain

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `audioFilePath` | `string` | The path for the audio file (must be a valid local path) |
| `language` | `string` | The language-code of the audio file (default is en) |

#### Defined in

[models/brainService.ts:195](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L195)

___

### ResponseFile

Ƭ **ResponseFile**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `caption?` | `string` | The file description (Optional) |
| `data` | `Buffer` \| `string` | The data of the file. It can be a string (url or base64 encoded) or a Buffer (binary) |
| `fileName?` | `string` | The original file name (Optional) |
| `fileType` | [`FileType`](modules.md#filetype) | The type of file |
| `mimeType` | `string` | The mimetype of the file |

#### Defined in

[models/brainService.ts:27](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L27)

___

### UserRole

Ƭ **UserRole**: ``"user"`` \| ``"brain"`` \| ``"system"``

The role of the sender (user, brain or system)

#### Defined in

[models/brainService.ts:88](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainService.ts#L88)
