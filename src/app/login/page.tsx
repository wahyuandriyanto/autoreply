import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';

import { LoginForm } from '@/components/login-form';
import { BackgroundGradient } from '@/components/layout/BackgroundGradient';
import { HeroShapes } from '@/components/layout/HeroShapes';
import { AnimatedText } from '@/components/layout/AnimatedText';
import { LoginShapes } from '@/components/layout/LoginShapes';

export default function LoginPage() {
  return (
    <div className="relative bg-white min-h-svh">
      <BackgroundGradient />
      <HeroShapes />
      <div className="relative grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 p-6 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link href="/" className="flex items-center gap-2 font-medium">
              <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-4" />
              </div>
              AutoReply AI
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-96">
              <LoginForm className="bg-white p-6 rounded-3xl" />
            </div>
          </div>
        </div>
        <div className="bg-white relative hidden lg:flex items-center justify-center overflow-hidden">
          <LoginShapes />
          <div className="relative z-10 p-8">
            <AnimatedText />
          </div>
        </div>
      </div>
    </div>
  );
}
