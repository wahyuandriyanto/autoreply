'use client';

import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="bg-white py-16 sm:py-24" id="mulai-sekarang">
      <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Siap Meningkatkan Layanan Pelanggan Anda?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
          Mulai uji coba gratis 14 hari. Tidak perlu kartu kredit. Batalkan kapan saja.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors flex items-center gap-2"
          >
            Mulai Sekarang <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Hubungi Penjualan <span aria-hidden="true">→</span>
          </a>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#4F46E5" />
              <stop offset={1} stopColor="#7C3AED" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
