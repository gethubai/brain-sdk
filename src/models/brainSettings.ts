export enum PromptType {
    text = 'text',
    image = 'image',
    audio = 'audio',
  }
  
  export interface IBrainSettings {
    id: string;
    name: string;
    displayName: string;
    supportedPromptTypes: PromptType[];
  }

  export class BrainSettingsValidationResult {
    errors: string[];
  
    get success(): boolean {
      return !this.errors || this.errors.length === 0;
    }
  
    constructor() {
      this.errors = [];
    }
  
    addFieldError(
      fieldName: string,
      error: string
    ): BrainSettingsValidationResult {
      this.addError(`*${fieldName}*: ${error}`);
      return this;
    }
  
    addError(error: string): BrainSettingsValidationResult {
      this.errors.push(error);
      return this;
    }
  
    getMessage() {
      return `You must correctly set the following settings before using this brain: \n ${this.errors.join(
        '\n'
      )}`;
    }
  
    static createError(error: string): BrainSettingsValidationResult {
      const result = new BrainSettingsValidationResult();
      return result.addError(error);
    }
  }