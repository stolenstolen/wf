import { RESUME_DATA } from '@/data/resume-data';
import { Section } from '@/components/ui/section';
import { cn } from '../../lib/utils';

interface AboutProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={cn(className, 'border-t pt-8 print:pt-4')}>
      <h2 className="text-xl font-bold" id="about-section">
        О себе
      </h2>
      <div
        className="text-foreground/80 font-mono text-sm text-pretty print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
