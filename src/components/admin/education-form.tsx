'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, PlusCircle } from 'lucide-react';
import type { Education } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface EducationFormProps {
  data: Education[];
}

export const EducationForm: FC<EducationFormProps> = ({ data }) => {
  const { toast } = useToast();
  const [education, setEducation] = useState<Education[]>(data);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { id: `new-${Date.now()}`, degree: '', institution: '', startDate: '', endDate: '' },
    ]);
  };

  const handleRemoveEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const handleSave = () => {
    console.log('Saving education:', education);
    toast({
      title: 'Education Updated',
      description: 'Your education history has been saved.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>Manage your educational background.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className="p-4 border rounded-lg space-y-4 relative bg-card-foreground/5">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-destructive"
              onClick={() => handleRemoveEducation(edu.id)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input id={`degree-${index}`} defaultValue={edu.degree} placeholder="e.g., M.S. in Computer Science" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <Input id={`institution-${index}`} defaultValue={edu.institution} placeholder="e.g., Stanford University" />
              </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input id={`startDate-${index}`} defaultValue={edu.startDate} placeholder="e.g., 2020" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input id={`endDate-${index}`} defaultValue={edu.endDate} placeholder="e.g., 2022" />
              </div>
            </div>
          </div>
        ))}
        <Button variant="outline" onClick={handleAddEducation}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Education
        </Button>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};
