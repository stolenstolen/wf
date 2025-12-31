import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME_DATA } from '@/data/resume-data';

type CertificationTags = readonly string[];

interface CertificationLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders certification title with optional link
 */
function CertificationLink({ title, link }: CertificationLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} certification (opens in new tab)`}
      >
        {title}
      </a>
      <div className="hidden font-mono text-xs underline print:visible" aria-hidden="true">
        {link.replace('https://', '').replace('www.', '').replace('/', '')}
      </div>
    </>
  );
}

interface CertificationTagsProps {
  tags: CertificationTags;
}

/**
 * Renders a list of tags associated with the certification
 */
function CertificationTags({ tags }: CertificationTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul className="mt-2 flex list-none flex-wrap gap-1 p-0" aria-label="Certification tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
            variant="secondary"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface CertificationCardProps {
  title: string;
  tags: CertificationTags;
  link?: string;
}

/**
 * Card component displaying certification information
 */
function CertificationCard({ title, tags, link }: CertificationCardProps) {
  return (
    <Card
      className="flex h-full flex-col overflow-hidden rounded-lg border p-3 shadow-none"
      role="article"
    >
      <CardHeader className="p-0">
        <div className="space-y-1">
          <CardTitle className="text-base">
            <CertificationLink title={title} link={link} />
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex p-0">
        <CertificationTags tags={tags} />
      </CardContent>
    </Card>
  );
}

interface CertificationsProps {
  certifications: (typeof RESUME_DATA)['certifications'];
}

/**
 * Section component displaying all certifications
 */
export function Certifications({ certifications }: CertificationsProps) {
  if (certifications.length === 0) return null;

  return (
    <Section className="print-force-new-page scroll-mb-16 print:space-y-4 print:pt-12">
      <h2 className="text-xl font-bold" id="certifications">
        Certifications
      </h2>
      <div
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
        role="feed"
        aria-labelledby="certifications"
      >
        {certifications.map((certification) => (
          <article key={certification.title} className="h-full">
            <CertificationCard
              title={certification.title}
              tags={certification.tags}
              link={certification.link}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
