import { Stream } from 'stream';
import { BrainSettingsValidationResult } from './brainSettings';

export type BrainPromptResponse = {
  result: string;
  validationResult: BrainSettingsValidationResult;
  attachments?: ResponseFile[];
};

export type FileType = 'image' | 'video' | 'audio' | 'document' | 'other';

export type ResponseFile = {
  data: Buffer | string; // url, base64 encoded, or binary
  mimeType: string;
  fileType: FileType;
  caption?: string;
  fileName?: string;
};

export type FileAttachment = {
  id?: string;
  path: string;
  mimeType: string;
  size: number;
  originalFileName?: string;
};

export type UserRole = 'user' | 'brain' | 'system';

export interface IBrainPromptContext<TPromptSettings> {
  // message id
  id: string;
  conversationId?: string;
  senderId: string;
  settings?: TPromptSettings;
  [key: string]: any;
}

export interface IBrainService {}

export interface TextBrainPrompt {
  role: UserRole;
  sentAt: Date;
  message: string;
  attachments?: FileAttachment[];
}

export interface ITextBrainService<TSettings> extends IBrainService {
  sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<TSettings>
  ): Promise<BrainPromptResponse>;
}

export interface ImageGenerationBrainPrompt extends TextBrainPrompt {
  // The type of response we expect from the brain
  expectedResponseType: 'base64' | 'url' | 'binary';
}

export interface IImageGenerationBrainService<TSettings> extends IBrainService {
  generateImage(
    prompts: ImageGenerationBrainPrompt[],
    context: IBrainPromptContext<TSettings>
  ): Promise<BrainPromptResponse>;
}

export type LocalAudioPrompt = {
  audioFilePath: string;
  language: string;
};

export interface IAudioTranscriberBrainService<TSettings>
  extends IBrainService {
  transcribeAudio(
    audioPath: LocalAudioPrompt,
    context: IBrainPromptContext<TSettings>
  ): Promise<BrainPromptResponse>;
}