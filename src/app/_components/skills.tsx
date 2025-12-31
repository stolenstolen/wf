import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
import { RESUME_DATA } from '@/data/resume-data';
import { cn } from '@/lib/utils';

type Skills = readonly string[];

interface SkillsListProps {
  skills: Skills;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul className={cn('flex list-none flex-wrap gap-1 p-0', className)} aria-label="List of skills">
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  className?: string;
}

/**
 * Skills section component
 * Displays soft and hard skills as separate sections
 */
export function Skills({ className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Мои навыки
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
          <SkillsList skills={RESUME_DATA.softSkills} aria-labelledby="skills-section" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hard Skills</h3>
          <SkillsList skills={RESUME_DATA.hardSkills} aria-labelledby="skills-section" />
        </div>
      </div>
    </Section>
  );
}
