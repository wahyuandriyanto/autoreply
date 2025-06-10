'use client';

import { CheckIcon } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      id: 'tier-starter',
      href: '#',
      price: 'Rp149.000',
      description: 'Cocok untuk bisnis kecil yang baru memulai',
      features: [
        'Hingga 1.000 pesan/bulan',
        '1 Nomor WhatsApp',
        'Balasan Dasar AI',
        'Dukungan Email',
        'Laporan Dasar',
      ],
      mostPopular: false,
    },
    {
      name: 'Pro',
      id: 'tier-pro',
      href: '#',
      price: 'Rp349.000',
      description: 'Untuk bisnis yang sedang berkembang pesat',
      features: [
        'Hingga 5.000 pesan/bulan',
        '3 Nomor WhatsApp',
        'Balasan AI Canggih',
        'Dukungan Prioritas',
        'Analisis Lanjutan',
        'Integrasi dengan CRM',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      price: 'Custom',
      description: 'Solusi khusus untuk bisnis besar',
      features: [
        'Pesan Tidak Terbatas',
        'Multi-Nomor WhatsApp',
        'AI Khusus Perusahaan',
        'Dedicated Support',
        'Integrasi Kustom',
        'Pelatihan Tim',
      ],
      mostPopular: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32" id="harga">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Harga</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Semua paket termasuk fitur inti dan dukungan pelanggan yang responsif. Tingkatkan atau turunkan paket kapan saja.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white ring-2 ring-primary' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 xl:p-10',
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                'flex flex-col'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-primary' : 'text-gray-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                    Paling populer
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {typeof tier.price === 'string' ? tier.price : `$${tier.price}`}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  {typeof tier.price === 'string' ? '' : '/bulan'}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary text-white shadow-sm hover:bg-primary/90'
                    : 'text-primary ring-1 ring-inset ring-primary hover:ring-primary/50',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors'
                )}
              >
                Mulai Sekarang
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
