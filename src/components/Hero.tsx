'use client';

import { ArrowRight, MessageCircle, Bot, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

import { BackgroundGradient } from './layout/BackgroundGradient';

export function Hero() {
  const features = [
    {
      name: 'Respon Cepat',
      icon: Zap,
      description: 'Balas pesan pelanggan secara otomatis dalam hitungan detik',
    },
    {
      name: 'AI Canggih',
      icon: Bot,
      description: 'AI yang bisa disesuaikan dengan bisnis Anda untuk respon yang alami',
    },
    {
      name: 'Aman & Terpercaya',
      icon: ShieldCheck,
      description: 'Keamanan data pelanggan adalah prioritas utama kami',
    },
  ];

  return (
    <div className="relative">
      <BackgroundGradient />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl pt-24 sm:pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-16">
              Tingkatkan Layanan Pelanggan dengan <span className="text-primary">AutoReply AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Solusi otomatisasi balasan WhatsApp berbasis AI untuk bisnis Anda. Respon pelanggan
              24/7 dengan cepat dan personal.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#mulai-sekarang"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                Coba Gratis <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#demo"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                Lihat Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
