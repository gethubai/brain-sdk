import {
  BrainPromptResponse,
  IBrainPromptContext,
  IBrainService,
  ITextBrainService,
  TextBrainPrompt,
  IAudioTranscriberBrainService,
  LocalAudioPrompt,
} from '../models/brainService';

export class BrainServiceSelfHosted
  implements
    IBrainService,
    ITextBrainService<any>,
    IAudioTranscriberBrainService<any>
{
  constructor(private readonly serverUrl: string) {}

  async transcribeAudio(
    audioPath: LocalAudioPrompt,
    context: IBrainPromptContext<any>
  ): Promise<BrainPromptResponse> {
    const res = await this.post<BrainPromptResponse>('/api/transcribeAudio', {
      audioPath,
      context,
    });
    return res;
  }
  async sendTextPrompt(
    prompts: TextBrainPrompt[],
    context: IBrainPromptContext<any>
  ): Promise<BrainPromptResponse> {
    const res = await this.post<BrainPromptResponse>('/api/textPrompt', {
      prompts,
      context,
    });
    return res;
  }

  async post<TResponse>(path: string, body: any): Promise<TResponse> {
    const fetchSettings = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(this.serverUrl + path, fetchSettings);

    return (await response.json()) as TResponse;
  }
}

/* SELF_HOSTED_URL is dynamically replaced on build */
const service = new BrainServiceSelfHosted('__SELF_HOSTED_URL__');
export default service;
