# Class: BrainSettingsValidationResult

The result of validating the brain settings and prompt

## Table of contents

### Constructors

- [constructor](BrainSettingsValidationResult.md#constructor)

### Properties

- [errors](BrainSettingsValidationResult.md#errors)

### Accessors

- [success](BrainSettingsValidationResult.md#success)

### Methods

- [addError](BrainSettingsValidationResult.md#adderror)
- [addFieldError](BrainSettingsValidationResult.md#addfielderror)
- [getMessage](BrainSettingsValidationResult.md#getmessage)
- [createError](BrainSettingsValidationResult.md#createerror)

## Constructors

### constructor

• **new BrainSettingsValidationResult**()

#### Defined in

[models/brainSettings.ts:51](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L51)

## Properties

### errors

• **errors**: `string`[]

The list of errors

#### Defined in

[models/brainSettings.ts:42](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L42)

## Accessors

### success

• `get` **success**(): `boolean`

Whether the validation was successful or not

#### Returns

`boolean`

#### Defined in

[models/brainSettings.ts:47](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L47)

## Methods

### addError

▸ **addError**(`error`): [`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

Add an error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | The error message |

#### Returns

[`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

Itself

#### Defined in

[models/brainSettings.ts:74](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L74)

___

### addFieldError

▸ **addFieldError**(`fieldName`, `error`): [`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

Add a field error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fieldName` | `string` | Name of the field or setting that is invalid |
| `error` | `string` | The error message |

#### Returns

[`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

Itself

#### Defined in

[models/brainSettings.ts:61](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L61)

___

### getMessage

▸ **getMessage**(): `string`

Get all the error messages concatenated

#### Returns

`string`

The error message

#### Defined in

[models/brainSettings.ts:83](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L83)

___

### createError

▸ `Static` **createError**(`error`): [`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

Create a new validation result with an error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | The error message |

#### Returns

[`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

The validation result

#### Defined in

[models/brainSettings.ts:94](https://github.com/gethubai/brain-sdk/blob/eb59de1/src/models/brainSettings.ts#L94)
