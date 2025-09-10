import { portfolioData } from '@/lib/data';
import { HeroSection } from '@/components/portfolio/hero-section';
import { EducationSection } from '@/components/portfolio/education-section';
import { ProjectsSection } from '@/components/portfolio/projects-section';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ContactSection } from '@/components/portfolio/contact-section';
import { PortfolioHeader } from '@/components/portfolio/portfolio-header';
import { Footer } from '@/components/shared/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PortfolioHeader />
      <main className="flex-1">
        <HeroSection data={portfolioData.profile} />
        <EducationSection data={portfolioData.education} />
        <ProjectsSection data={portfolioData.projects} />
        <SkillsSection data={portfolioData.skills} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
