
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export type PageView = 'home' | 'services' | 'contact' | 'about' | 'privacy' | 'terms';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  feedback?: 'up' | 'down';
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
