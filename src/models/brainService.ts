import { BrainSettingsValidationResult } from './brainSettings';

/** 
The response we get back from the brain
*/
export type BrainPromptResponse = {
  /** 
  The text result of the prompt
  */
  result: string;
  /**
  The result of the settings/prompt validation.
  */
  validationResult: BrainSettingsValidationResult;

  /**
  The files we are sending back to the user
  */
  attachments?: ResponseFile[];
};

/**
 The type of file we are sending to the brain
 */
export type FileType = 'image' | 'video' | 'audio' | 'document' | 'other';

export type ResponseFile = {
  /**
  The data of the file.
  It can be a string (url or base64 encoded) or a Buffer (binary)
  */
  data: Buffer | string; // url, base64 encoded, or binary

  /**
  The mimetype of the file
  */
  mimeType: string;

  /**
  The type of file
  */
  fileType: FileType;

  /**
  The file description (Optional)
  */
  caption?: string;

  /**
  The original file name (Optional)
  */
  fileName?: string;
};

/** 
An attachment 
*/
export type FileAttachment = {
  /**
   * An unique id of the attachment (Optional)
   */
  id?: string;

  /**
   * The path of the attached file (required, must be an absolute local path  )
   */
  path: string;

  /**
   * The mime type of the file
   */
  mimeType: string;

  /**
   * The size of the file in bytes.
   */
  size: number;

  /**
   * The original file name (Optional)
   */
  originalFileName?: string;
};

/**
  The role of the sender (user, brain or system)
*/
export type UserRole = 'user' | 'brain' | 'system';

/**
  Some additional data we can send to the brain along with the prompt
  @typeParam TPromptSettings - The type of the brain settings
*/
export interface IBrainPromptContext<TPromptSettings> {
  /**
  The unique id of the prompt
  */
  id: string;

  /** 
  A conversation id to group prompts together
  */
  conversationId?: string;

  /** The id of the user who is sending the prompt */
  senderId: string;

  /** The brain settings to use for this prompt */
  settings?: TPromptSettings;

  /**
   * Any additional data we want to send to the brain
   */
  [key: string]: any;
}

export interface IBrainService {}

/**
 * Represents a text prompt sent to the brain
 */
export interface TextBrainPrompt {
  /**
    The role of the sender (user, brain or system)
  */
  role: UserRole;

  /**
    The utc date that the prompt has been sent
  */
  sentAt: Date;

  /**
    The text prompt
  */
  message: string;

  /**
    A list of file attachments
  */
  attachments?: FileAttachment[];
}

/**
 * Service implemented by brains that support text prompts 
 * @typeParam TSettings - The type of the brain settings
 */
export interface ITextBrainService<TSettings> extends IBrainService {
  /**
   * Sends a text prompt to the brain
   * @param prompts: The prompts to send to the brain
   * @param context: Some additional data we can send to the brain along with the prompt
   * @returns The response from the brain
   * */
  sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<TSettings>
  ): Promise<BrainPromptResponse>;
}

/**
 * Represents an image generation prompt sent to the brain
 */
export interface ImageGenerationBrainPrompt extends TextBrainPrompt {
  /**
   * How we want the brain to return the image
   * base64: The brain will return the image as a base64 encoded string
   * url: The brain will return the image url
   * binary: The brain will return the image as a binary buffer
   */
  expectedResponseType: 'base64' | 'url' | 'binary';
}

/**
 * Service for generating images from text
 * @typeParam TSettings - The type of the brain settings
 */
export interface IImageGenerationBrainService<TSettings> extends IBrainService {
  /**
   * Generates an image from the prompt
   * @param prompts The prompts to send to the brain
   * @param context Some additional data we can send to the brain along with the prompt
   *
   * @returns The response from the brain
   */
  generateImage(
    prompts: ImageGenerationBrainPrompt[],
    context: IBrainPromptContext<TSettings>
  ): Promise<BrainPromptResponse>;
}

/**
 * Represents an audio prompt sent to the brain
 */
export type LocalAudioPrompt = {
  /**
   * The path for the audio file (must be a valid local path)
   */
  audioFilePath: string;

  /**
   * The language-code of the audio file (default is en)
   */
  language: string;
};

/**
 * Service for transcribing audio (speech-to-text)
 * @typeParam TSettings - The type of the brain settings
 */
export interface IAudioTranscriberBrainService<TSettings>
  extends IBrainService {
  /**
   *
   * @param audioPath A local path to the audio file
   * @param context Some additional data we can send to the brain along with the prompt
   */
  transcribeAudio(
    audioPath: LocalAudioPrompt,
    context: IBrainPromptContext<TSettings>
  ): Promise<BrainPromptResponse>;
}
