import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';

interface ProjectsSectionProps {
  data: Project[];
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ data }) => {
  return (
    <section id="projects" className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden group transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                {projectImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                     <Button size="sm" asChild>
                      <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
