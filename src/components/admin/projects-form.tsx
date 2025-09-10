'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, PlusCircle } from 'lucide-react';
import type { Project } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface ProjectsFormProps {
  data: Project[];
}

export const ProjectsForm: FC<ProjectsFormProps> = ({ data }) => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>(data);

  const handleAddProject = () => {
    setProjects([
      ...projects,
      { 
        id: `new-${Date.now()}`, 
        title: '', 
        description: '', 
        imageId: '', 
        tags: [], 
        links: { github: '', demo: '' } 
      },
    ]);
  };

  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };
  
  const handleSave = () => {
    console.log('Saving projects:', projects);
    toast({
      title: 'Projects Updated',
      description: 'Your project list has been saved.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>Showcase your best work.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.id} className="p-4 border rounded-lg space-y-4 relative bg-card-foreground/5">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => handleRemoveProject(project.id)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
            <div className="space-y-2">
              <Label htmlFor={`title-${index}`}>Title</Label>
              <Input id={`title-${index}`} defaultValue={project.title} placeholder="Project Title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea id={`description-${index}`} defaultValue={project.description} placeholder="Project Description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`tags-${index}`}>Tags (comma-separated)</Label>
              <Input id={`tags-${index}`} defaultValue={project.tags.join(', ')} placeholder="e.g., React, Next.js" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`github-${index}`}>GitHub Link</Label>
                <Input id={`github-${index}`} defaultValue={project.links.github} placeholder="https://github.com/..." />
              </div>
               <div className="space-y-2">
                <Label htmlFor={`demo-${index}`}>Demo Link</Label>
                <Input id={`demo-${index}`} defaultValue={project.links.demo} placeholder="https://..." />
              </div>
            </div>
          </div>
        ))}
         <Button variant="outline" onClick={handleAddProject}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};
