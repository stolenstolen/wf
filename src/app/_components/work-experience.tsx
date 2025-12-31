import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { RESUME_DATA } from '@/data/resume-data';
import { cn } from '@/lib/utils';

type WorkExperience = (typeof RESUME_DATA)['work'][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn('inline-flex list-none gap-x-1 p-0', className)}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience['start'];
  end?: WorkExperience['end'];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-sm text-gray-500 tabular-nums text-right leading-tight min-w-fit max-w-[140px] pl-2 flex-shrink-0"
      aria-label={`Employment period: ${start} to ${end ?? 'Present'}`}
    >
      <div className="whitespace-nowrap">{start} - {end ?? 'Present'}</div>
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience['company'];
  link: WorkExperience['link'];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="hover:underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="border-hidden py-1 shadow-none outline-hidden print:py-0">
      <CardHeader className="p-0 print:space-y-1">
        <div className="flex items-end justify-between gap-x-2 text-base overflow-hidden">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="inline-flex items-center justify-center gap-x-1 leading-none font-semibold print:text-sm break-words">
              <CompanyLink company={company} link={link} />
            </h3>
          </div>
          <WorkPeriod start={start} end={end} />
        </div>
        <BadgeList className="hidden gap-x-1 pb-1 sm:inline-flex" badges={badges} />

        {title && (
          <h4 className="font-mono text-sm leading-none font-semibold print:text-[12px]">{title}</h4>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="text-foreground/80 mt-2 font-mono text-xs text-pretty print:mt-1 print:text-[10px]">
          {description}
        </div>
        <div className="mt-2">
          <BadgeList className="-mx-2 flex-wrap gap-1 sm:hidden" badges={badges} />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)['work'];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Опыт и специализация
      </h2>
      <div className="space-y-4 print:space-y-2" role="feed" aria-labelledby="work-experience">
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`} role="article">
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
