'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Profile } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, Sparkles } from 'lucide-react';
import { getImprovedBio } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  email: z.string().email('Invalid email address'),
  location: z.string().min(2, 'Location is required'),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  data: Profile;
}

export const ProfileForm: FC<ProfileFormProps> = ({ data }) => {
  const { toast } = useToast();
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBio, setGeneratedBio] = useState('');
  const [aiForm, setAiForm] = useState({ desiredTone: '', keywords: '' });
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: data.name,
      bio: data.bio,
      email: data.email,
      location: data.location,
    },
  });

  const currentBio = watch('bio');

  const onSubmit: SubmitHandler<ProfileFormData> = (formData) => {
    console.log(formData);
    toast({
      title: 'Profile Updated',
      description: 'Your profile information has been saved.',
    });
  };
  
  const handleGenerateBio = async () => {
    setIsGenerating(true);
    setGeneratedBio('');
    const result = await getImprovedBio({
      currentBio: currentBio,
      desiredTone: aiForm.desiredTone,
      keywords: aiForm.keywords,
    });
    setIsGenerating(false);
    if(result.success) {
      setGeneratedBio(result.bio);
    } else {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    }
  };
  
  const handleUseGeneratedBio = () => {
    setValue('bio', generatedBio, { shouldValidate: true });
    setIsAiModalOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your personal details and bio.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register('name')} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="bio">Bio</Label>
               <Dialog open={isAiModalOpen} onOpenChange={setIsAiModalOpen}>
                <DialogTrigger asChild>
                  <Button type="button" variant="outline" size="sm">
                    <Sparkles className="mr-2 h-4 w-4 text-primary" />
                    Improve with AI
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Improve Bio with AI</DialogTitle>
                    <DialogDescription>
                      Refine your bio for a more professional and engaging tone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                     <Textarea readOnly value={currentBio} className="h-24 bg-muted/50" />
                     <div className="space-y-2">
                        <Label htmlFor="desiredTone">Desired Tone</Label>
                        <Select onValueChange={(value) => setAiForm(prev => ({...prev, desiredTone: value}))}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a tone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Professional">Professional</SelectItem>
                                <SelectItem value="Friendly">Friendly</SelectItem>
                                <SelectItem value="Humorous">Humorous</SelectItem>
                                <SelectItem value="Concise">Concise</SelectItem>
                            </SelectContent>
                        </Select>
                     </div>
                      <div className="space-y-2">
                        <Label htmlFor="keywords">Keywords</Label>
                        <Input id="keywords" placeholder="e.g., AI, Next.js, product-focused" value={aiForm.keywords} onChange={(e) => setAiForm(prev => ({...prev, keywords: e.target.value}))}/>
                     </div>
                     {generatedBio && (
                       <div className="space-y-2">
                        <Label>Suggested Bio</Label>
                        <Textarea readOnly value={generatedBio} className="h-32 bg-accent/20 border-primary/50" />
                       </div>
                     )}
                  </div>
                  <DialogFooter>
                    {generatedBio ? (
                      <>
                        <Button type="button" variant="ghost" onClick={() => setGeneratedBio('')}>Clear</Button>
                        <Button type="button" onClick={handleUseGeneratedBio}>Use this bio</Button>
                      </>
                    ) : (
                      <Button type="button" onClick={handleGenerateBio} disabled={isGenerating}>
                        {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Generate
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <Textarea id="bio" {...register('bio')} className="min-h-[120px]" />
            {errors.bio && <p className="text-sm text-destructive">{errors.bio.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" {...register('location')} />
              {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
