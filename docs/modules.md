[@hubai/brain-sdk](README.md) / Exports

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
- [ITextBrainService](interfaces/ITextBrainService.md)
- [TextBrainPrompt](interfaces/TextBrainPrompt.md)

### Type Aliases

- [BrainPromptResponse](modules.md#brainpromptresponse)
- [LocalAudioPrompt](modules.md#localaudioprompt)

## Type Aliases

### BrainPromptResponse

Ƭ **BrainPromptResponse**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `result` | `string` |
| `validationResult` | [`BrainSettingsValidationResult`](classes/BrainSettingsValidationResult.md) |

#### Defined in

models/brainService.ts:3

___

### LocalAudioPrompt

Ƭ **LocalAudioPrompt**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `audioFilePath` | `string` |
| `language` | `string` |

#### Defined in

models/brainService.ts:31
