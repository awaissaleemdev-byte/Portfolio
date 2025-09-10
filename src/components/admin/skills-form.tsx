'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus } from 'lucide-react';
import type { Skill } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface SkillsFormProps {
  data: Skill[];
}

export const SkillsForm: FC<SkillsFormProps> = ({ data }) => {
  const { toast } = useToast();
  const [skills, setSkills] = useState<Skill[]>(data);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, { id: `new-${Date.now()}`, name: newSkill.trim() }]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };
  
  const handleSave = () => {
    console.log('Saving skills:', skills);
    toast({
      title: 'Skills Updated',
      description: 'Your skills list has been saved.',
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardDescription>List the technologies you are proficient in.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-1 bg-secondary text-secondary-foreground rounded-full pl-3 pr-1 py-1 text-sm">
              <span>{skill.name}</span>
              <button
                onClick={() => handleRemoveSkill(skill.id)}
                className="flex items-center justify-center h-5 w-5 rounded-full bg-background/20 hover:bg-destructive hover:text-destructive-foreground transition-colors"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {skill.name}</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input 
            value={newSkill} 
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill"
            onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
          />
          <Button onClick={handleAddSkill}>
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSave}>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};
