import { Send } from 'lucide-react';

import React, { ReactNode } from 'react';
import { NotionIcon } from '@/components/ui/notion-icon';

// Define types for each section
type Social = {
  name: string;
  url: string;
  icon: React.ElementType;
};

type ContactInfo = {
  email: string;
  website?: string;
  address?: string;
  notionResume?: {
    label: string;
    url: string;
  };
  telegram?: string;
  social: Social[];
};

type Education = {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
};

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: ReactNode;
};

type Project = {
  title: string;
  techStack: string[];
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

type Certification = {
  title: string;
  link?: string;
  tags: string[];
};

type Language = {
  name: string;
  level: string;
};

type Tool = {
  name: string;
  description: string;
  icon?: string;
};

// Main resume data type
type ResumeData = {
  name: string;
  age: number;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: ContactInfo;
  education: Education[];
  work: WorkExperience[];
  softSkills: string[];
  hardSkills: string[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  tools: Tool[];
};

export const RESUME_DATA: ResumeData = {
  name: 'Антон',
  age: 23,
  initials: 'АС',
  location: 'Россия, Москва - Самара',
  locationLink: 'https://www.google.com/maps/place/Moscow,+Russia/',
  about: 'Web / UI Designer, 2+ года опыта Digital / Web-продукты',
  summary: (
    <>
      Рассматриваю проектную занятость, part-time и full-time.
      Интересны web и digital-проекты с фокусом на продукт, интерфейсы и визуальные системы.
    </>
  ),
  avatarUrl: '/avatar.png',
  personalWebsiteUrl: 'https://aoudi.space',
  contact: {
    email: 'aoudiwork@mail.ru',
    website: 'https://aoudi.space',
    address: 'Россия, Москва - Самара',
    notionResume: {
      label: 'Посмотреть',
      url: 'https://www.notion.so/CV-80adac1cf19e4dbba9658f4f620d3512?source=copy_link',
    },
    telegram: '@dgnaou',
    social: [
      {
        name: 'Telegram',
        url: 'https://t.me/dgnaou',
        icon: Send,
      },
      {
        name: 'Notion',
        url: 'https://www.notion.so/CV-80adac1cf19e4dbba9658f4f620d3512?source=copy_link',
        icon: NotionIcon,
      },
    ],
  },
  education: [
    {
      school: 'Yandex.praktikum',
      degree: 'Фронтенд-разработчик',
      location: '',
      start: 'Ноябрь 2025',
      end: 'Июль 2026 (Текущий)',
    },
    {
      school: 'Yandex.praktikum',
      degree: 'Дизайнер интерфейсов',
      location: '',
      start: 'Июнь 2024',
      end: 'Март 2025',
    },
  ],
  work: [
    {
      company: 'Фриланс/проектная работа',
      link: '#',
      badges: [],
      title: '',
      start: 'Декабрь 2024',
      end: 'текущий',
      description: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Проектирование интерфейсов для web-продуктов и маркетинговых платформ.</li>
            <li>Формирование дизайн-концепций под бренд, аудиторию и цели продукта.</li>
            <li>Работа с UX-логикой, прототипированием и финальным UI-дизайном.</li>
            <li>Подготовка адаптивных версий и дизайн-спецификаций для разработки.</li>
            <li>Сопровождение проектов на этапе реализации и запуска.</li>
          </ul>
        </>
      ),
    },
    {
      company: 'Сезон славы',
      link: '#',
      badges: [],
      title: 'Бренд дизайнер',
      start: 'Июль 2023',
      end: 'Декабрь 2024',
      description: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>Участие в разработке визуальной концепции и айдентики бренда.</li>
            <li>
              Работа над коллекцией «Сезон славы», включая визуальный стиль, графику и презентацию
              продукта.
            </li>
            <li>
              Совместная работа с командой над позиционированием бренда и визуальной коммуникацией.
            </li>
            <li>
              Вклад в формирование продуктового образа, который получил хороший отклик у целевой
              аудитории и подтвердил product-market fit.
            </li>
          </ul>
        </>
      ),
    },
  ],
  softSkills: [
    'Быстрое обучение и адаптация под процессы команды',
    'Понимание современных трендов и тенденций',
    'Анализ задач бизнеса и пользователя',
    'Презентация решений',
    'Соблюдение сроков',
    'Открытость к обучению',
  ],
  hardSkills: [
    'Проектирование UX/UI интерфейсов веб-продуктов',
    'Работа с no-code / CMS решениями',
    'дизайн-системы и компонентный подход',
    'HTML / CSS (понимание структуры и логики верстки)',
    'Брендинг и визуальная айдентика',
    'Использование AI в дизайн-процессах',
  ],
  projects: [
    {
      title: 'XSAI',
      techStack: [],
      description: 'E-commerce бренд одежды',
      link: {
        label: 'xsai.vision',
        href: 'https://xsai.vision',
      },
    },
    {
      title: 'Dafilm.art',
      techStack: [],
      description: 'Сайт-витрина для демонстрации видео-работ',
      link: {
        label: 'dafilm.art',
        href: 'https://dafilm.art',
      },
    },
  ],
  certifications: [],
  languages: [
    { name: 'Русский', level: 'Нативный' },
    { name: 'Английский', level: 'B1' },
  ],
  tools: [
    { name: 'Figma', description: 'UI Дизайн, прототипирование' },
    { name: 'Photoshop', description: 'Графика, Ретушь, Мокапы' },
    { name: 'Illustrator', description: 'Работа с векторной графикой' },
    { name: 'CMS', description: 'No-code разработка' },
    { name: 'JavaScript', description: 'Разработка' },
    { name: 'HTML', description: 'Верстка' },
    { name: 'Notion', description: 'Управление проектами' },
  ],
} as const;
