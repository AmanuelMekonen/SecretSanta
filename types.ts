export interface Participant {
  person_name: string;
  password: string;
  assigned_person: string;
  assigned_person_interests: string;
  first_name?: string;
}

export enum AppState {
  LOGIN = 'LOGIN',
  SANTA_SCENE = 'SANTA_SCENE',
}

export interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}
