import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME_DATA } from '@/data/resume-data';

type Education = (typeof RESUME_DATA)['education'][number];

interface EducationPeriodProps {
  start: Education['start'];
  end: Education['end'];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
  // Extract the main date and the note in parentheses if present
  const endMatch = end.match(/^(.+?)\s*(\(.+?\))$/);
  const endDate = endMatch ? endMatch[1] : end;
  const note = endMatch ? endMatch[2] : null;

  return (
    <div
      className="text-sm text-gray-500 tabular-nums text-right leading-tight min-w-fit max-w-[140px] pl-2 flex-shrink-0"
      aria-label={`Period: ${start} to ${end}`}
    >
      {/* Mobile: two lines */}
      <div className="md:hidden">
        <div className="whitespace-nowrap">{start} -</div>
        <div className="whitespace-nowrap">{endDate}{note && ` ${note}`}</div>
      </div>
      {/* Desktop: one line */}
      <div className="hidden md:block whitespace-nowrap">
        {start} - {endDate}{note && ` ${note}`}
      </div>
    </div>
  );
}

interface EducationItemProps {
  education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
  const { school, start, end, degree } = education;

  return (
    <Card className="flex flex-col gap-2 border-hidden shadow-none">
      <CardHeader className="p-0">
        <div className="flex items-end justify-between gap-x-2 text-base overflow-hidden">
          <div className="flex-1 min-w-0 pr-2">
            <h3
              className="text-sm leading-none font-semibold break-words"
              id={`education-${school.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {school}
            </h3>
          </div>
          <EducationPeriod start={start} end={end} />
        </div>
      </CardHeader>
      <CardContent
        className="text-muted-foreground p-0 font-mono text-xs font-light print:text-[12px]"
        aria-labelledby={`education-${school.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {degree}
      </CardContent>
    </Card>
  );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="education-section">
        Курсы
      </h2>
      <div className="space-y-4" role="feed" aria-labelledby="education-section">
        {education.map((item, index) => (
          <article key={`${item.school}-${item.start}-${index}`} role="article">
            <EducationItem education={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
