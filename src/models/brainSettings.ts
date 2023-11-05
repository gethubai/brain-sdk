/**
 * The type of prompt supported by the brain
 */
export enum PromptType {
  text = 'text',
  image = 'image',
  audio = 'audio',
}

/**
 * The basic settings of the brain
 */
export interface IBrainSettings {
  /**
   * The unique id of the brain
   */
  id: string;

  /**
   * The name of the brain
   */
  name: string;

  /**
   * The Display name of the brain
   */
  displayName: string;

  /**
   * The list of prompts supported by this brain
   */
  supportedPromptTypes: PromptType[];
}

/**
 * The result of validating the brain settings and prompt
 */
export class BrainSettingsValidationResult {
  /** 
   * The list of errors
   */
  errors: string[];

  /**
   * Whether the validation was successful or not
   */
  get success(): boolean {
    return !this.errors || this.errors.length === 0;
  }

  constructor() {
    this.errors = [];
  }

  /**
   * Add a field error
   * @param fieldName Name of the field or setting that is invalid
   * @param error The error message
   * @returns Itself
   */
  addFieldError(
    fieldName: string,
    error: string
  ): BrainSettingsValidationResult {
    this.addError(`*${fieldName}*: ${error}`);
    return this;
  }

  /**
   * Add an error
   * @param error The error message
   * @returns Itself
   */
  addError(error: string): BrainSettingsValidationResult {
    this.errors.push(error);
    return this;
  }

  /**
   * Get all the error messages concatenated
   * @returns The error message
   */
  getMessage() {
    return `You must correctly set the following settings before using this brain: \n ${this.errors.join(
      '\n'
    )}`;
  }

  /**
   * Create a new validation result with an error
   * @param error The error message
   * @returns The validation result
   */
  static createError(error: string): BrainSettingsValidationResult {
    const result = new BrainSettingsValidationResult();
    return result.addError(error);
  }
}
