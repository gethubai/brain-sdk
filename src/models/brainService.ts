import { BrainSettingsValidationResult } from './brainSettings';

export type BrainPromptResponse = {
  result: string;
  validationResult: BrainSettingsValidationResult;
  files?: ResponseFile[];
};

export type FileType = "image" | "video" | "audio" | "document" | "other";

export type ResponseFile = {
  data: Buffer;
  mimeType: string;
  fileType: FileType;
}

export type FileAttachment = {
  data: Buffer;
  path: string;
  mimeType: string;
  size: number;
  originalName: string;
}

export type UserRole = 'user' | 'brain' | 'system';

export interface IBrainPromptContext<TPromptSettings> {
  // message id
  id: string;
  chatId: string;
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

export interface ImageGenerationBrainPrompt extends TextBrainPrompt {}

export interface IImageGenerationBrainService<TSettings> extends IBrainService {
  generateImage(
    prompt: ImageGenerationBrainPrompt,
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