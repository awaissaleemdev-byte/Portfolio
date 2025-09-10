import type { FC } from 'react';
import type { Skill } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

interface SkillsSectionProps {
  data: Skill[];
}

export const SkillsSection: FC<SkillsSectionProps> = ({ data }) => {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {data.map((skill) => (
            <Badge key={skill.id} variant="outline" className="text-lg px-4 py-2 border-primary/50 bg-primary/10 text-primary transition-all hover:bg-primary/20">
              {skill.icon && <skill.icon className="mr-2 h-5 w-5" />}
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
