import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Profile } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';

interface HeroSectionProps {
  data: Profile;
}

export const HeroSection: FC<HeroSectionProps> = ({ data }) => {
  const avatarImage = PlaceHolderImages.find((img) => img.id === data.avatarId);

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            {avatarImage && (
              <Image
                src={avatarImage.imageUrl}
                alt={data.name}
                width={200}
                height={200}
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint={avatarImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 text-primary">
              {data.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
              {data.bio}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors">
                  {data.email}
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
              {data.socials.map((social) => (
                <Button key={social.name} variant="outline" size="icon" asChild>
                  <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
