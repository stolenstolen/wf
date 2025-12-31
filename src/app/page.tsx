import { CommandMenu } from '@/components/shared/command-menu';
import { Metadata } from 'next';
import { RESUME_DATA } from '@/data/resume-data';
import { WorkExperience } from '@/app/_components/work-experience';
import { Projects } from '@/app/_components/projects';
import { Education } from '@/app/_components/education';
import { Summary } from '@/app/_components/summary';
import { Skills } from '@/app/_components/skills';
import { Header } from '@/app/_components/header';
import { Certifications } from '@/app/_components/certifications';

export const metadata: Metadata = {
  title: 'Design engeneer - Anton Aoudi',
  description: RESUME_DATA.about,
  openGraph: {
    title: 'Design engeneer - Anton Aoudi',
    description: RESUME_DATA.about,
    type: 'profile',
    locale: 'en_US',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design engeneer - Anton Aoudi',
    description: RESUME_DATA.about,
    images: ['/banner.png'],
  },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: 'Personal Website',
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <main
      className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-11"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />

          <WorkExperience work={RESUME_DATA.work} />

          <Education education={RESUME_DATA.education} />

          <Skills />

          <Projects projects={RESUME_DATA.projects} />

          <Certifications certifications={RESUME_DATA.certifications} />
        </div>
      </section>

      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
}
