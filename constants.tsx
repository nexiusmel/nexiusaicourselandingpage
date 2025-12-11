import React from 'react';
import { Brain, MessageSquare, Image as ImageIcon, Code, Shield, Briefcase } from 'lucide-react';
import { Instructor, Review, ScheduleItem, FaqItem, CurriculumModule } from './types';

export const INSTRUCTORS: Instructor[] = [
  {
    name: "Martin Lim",
    role: "Principal AI Consultant",
    image: "https://picsum.photos/id/1/200/200",
    bio: "Master's in Business Administration with 10+ years in AI strategy."
  },
  {
    name: "Dr. Peter Chen",
    role: "CEO, Synectify",
    image: "https://picsum.photos/id/2/200/200",
    bio: "PhD in Computer Science, specializing in Large Language Models."
  },
  {
    name: "Stan Tan",
    role: "Lead Data Scientist",
    image: "https://picsum.photos/id/3/200/200",
    bio: "Expert in predictive modeling and NLP applications in finance."
  }
];

export const REVIEWS: Review[] = [
  {
    name: "Fion Heu",
    role: "Marketing Director",
    date: "Sep 2025",
    rating: 5,
    content: "This course sharpened my AI skills through hands-on practice with ChatGPT, Copilot, and Claude. The prompt engineering techniques were game-changing.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "Boon Peng Yeo",
    role: "Consultant",
    date: "Sep 2025",
    rating: 5,
    content: "I love how the course focused on prompt engineering concepts: from zero-shot prompting to chain-of-thought reasoning.",
    image: "https://picsum.photos/id/91/100/100"
  }
];

export const SCHEDULES: ScheduleItem[] = [
  {
    type: 'Weekday',
    dates: '22 Dec - 5 Jan',
    time: 'Mon - Wed, 9:00am - 12:00pm',
    format: 'In-Person',
    slotsLeft: 1
  },
  {
    type: 'Weekend',
    dates: '27 Dec - 17 Jan',
    time: 'Sat & Sun, 9:00am - 12:00pm',
    format: 'Online (Zoom)',
    slotsLeft: 4
  },
  {
    type: 'Weekday',
    dates: '10 Feb - 24 Feb',
    time: 'Mon & Wed, 7:00pm - 10:00pm',
    format: 'Online (Zoom)',
    slotsLeft: 12
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is Generative AI and how does it work?",
    answer: "Generative AI refers to algorithms (like ChatGPT or Midjourney) that can be used to create new content, including audio, code, images, text, simulations, and videos."
  },
  {
    question: "What are the prerequisites for this course?",
    answer: "There are no technical prerequisites. The course is designed to be beginner-friendly while scaling to advanced techniques."
  },
  {
    question: "Are there course fee subsidies available?",
    answer: "Yes! Singapore Citizens and PRs aged 21+ can enjoy up to 70% subsidies. You can also use your SkillsFuture credits."
  },
  {
    question: "What certification will I receive?",
    answer: "Upon completion, you will receive a WSQ Statement of Attainment recognized by industry employers."
  }
];

export const MODULES: CurriculumModule[] = [
  {
    title: "Prompt Engineering",
    description: "Learn zero-shot, few-shot, and chain-of-thought prompting.",
    iconName: "Brain"
  },
  {
    title: "Content Generation",
    description: "Automate blog writing, report generation, and marketing copy.",
    iconName: "MessageSquare"
  },
  {
    title: "Image Generation",
    description: "Master Midjourney and DALL-E 3 for stunning visuals.",
    iconName: "Image"
  },
  {
    title: "AI Tools Integration",
    description: "Connect AI to Excel, Google Sheets, and other workflows.",
    iconName: "Code"
  },
  {
    title: "Ethics & Safety",
    description: "Understand hallucinations, bias, and data privacy.",
    iconName: "Shield"
  },
  {
    title: "Business Application",
    description: "Real-world case studies and ROI analysis.",
    iconName: "Briefcase"
  }
];

export const SYSTEM_INSTRUCTION = `
You are an expert AI Advisor for the 'Nexius Academy Generative AI Masterclass'.
Your goal is to help potential students understand the course and encourage them to apply.
Use the following course details to answer questions:

- Course Name: Generative AI Masterclass
- Price: $1,650 (Full), $643.50 (After 70% Subsidy for SG Citizens 40+), $973.50 (After 50% Subsidy).
- Duration: 21 Hours Total (7 Lessons + 1 Assessment).
- Format: Online (Zoom) or In-Person options available.
- Curriculum: Prompt Engineering, ChatGPT, Image Generation, Business Automation.
- Subsidies: SkillsFuture Credits, UTAP, PSEA available.
- Cert: WSQ Statement of Attainment.
- Tone: Professional, encouraging, and helpful. Keep answers concise (under 100 words).
`;