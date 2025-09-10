import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProfileForm } from '@/components/admin/profile-form';
import { portfolioData } from '@/lib/data';
import { EducationForm } from '@/components/admin/education-form';
import { ProjectsForm } from '@/components/admin/projects-form';
import { SkillsForm } from '@/components/admin/skills-form';

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-2 text-primary">Admin Panel</h1>
      <p className="text-muted-foreground mb-8">Manage your portfolio content here.</p>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <ProfileForm data={portfolioData.profile} />
        </TabsContent>
        <TabsContent value="education" className="mt-6">
          <EducationForm data={portfolioData.education} />
        </TabsContent>
        <TabsContent value="projects" className="mt-6">
          <ProjectsForm data={portfolioData.projects} />
        </TabsContent>
        <TabsContent value="skills" className="mt-6">
          <SkillsForm data={portfolioData.skills} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
