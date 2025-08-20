
import type { ReactNode } from 'react';

export interface ContentBlock {
  heading: string;
  text?: string;
  list?: string[];
  subItems?: {
    subHeading: string;
    text: string;
  }[];
}

export interface Topic {
  id: string;
  title: string;
  icon: ReactNode;
  content: ContentBlock[];
}
