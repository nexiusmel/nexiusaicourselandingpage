export interface Instructor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Review {
  name: string;
  role: string;
  date: string;
  rating: number;
  content: string;
  image: string;
}

export interface ScheduleItem {
  type: 'Weekend' | 'Weekday';
  dates: string;
  time: string;
  format: 'Online (Zoom)' | 'In-Person';
  slotsLeft: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CurriculumModule {
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}