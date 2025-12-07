
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export type PageView = 'home' | 'services' | 'contact' | 'about' | 'privacy';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
