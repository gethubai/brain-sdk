[@hubai/brain-sdk](../README.md) / [Exports](../modules.md) / BrainSettingsValidationResult

# Class: BrainSettingsValidationResult

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

models/brainSettings.ts:21

## Properties

### errors

• **errors**: `string`[]

#### Defined in

models/brainSettings.ts:15

## Accessors

### success

• `get` **success**(): `boolean`

#### Returns

`boolean`

#### Defined in

models/brainSettings.ts:17

## Methods

### addError

▸ **addError**(`error`): [`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |

#### Returns

[`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

#### Defined in

models/brainSettings.ts:33

___

### addFieldError

▸ **addFieldError**(`fieldName`, `error`): [`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `error` | `string` |

#### Returns

[`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

#### Defined in

models/brainSettings.ts:25

___

### getMessage

▸ **getMessage**(): `string`

#### Returns

`string`

#### Defined in

models/brainSettings.ts:38

___

### createError

▸ `Static` **createError**(`error`): [`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `string` |

#### Returns

[`BrainSettingsValidationResult`](BrainSettingsValidationResult.md)

#### Defined in

models/brainSettings.ts:44
