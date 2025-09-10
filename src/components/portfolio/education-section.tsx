import type { FC } from 'react';
import type { Education } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  data: Education[];
}

export const EducationSection: FC<EducationSectionProps> = ({ data }) => {
  return (
    <section id="education" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {data.map((edu, index) => (
            <div key={edu.id} className="relative mb-8">
              <div className="absolute left-1/2 top-4 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background"></div>
              <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{edu.startDate} - {edu.endDate}</p>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
