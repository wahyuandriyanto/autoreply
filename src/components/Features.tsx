'use client';

import { MessageSquare, Zap, BarChart2, Settings, Shield, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      name: 'Balas Otomatis',
      description:
        'Atur balasan otomatis untuk pertanyaan umum pelanggan Anda. Hemat waktu dan tenaga dengan respon instan 24/7.',
      icon: MessageSquare,
    },
    {
      name: 'Cepat & Responsif',
      description:
        'Respon dalam hitungan detik. Pelanggan tidak perlu menunggu lama untuk mendapatkan balasan dari bisnis Anda.',
      icon: Zap,
    },
    {
      name: 'Analisis Lanjutan',
      description:
        'Pantau performa balasan otomatis dengan dashboard analitik yang lengkap. Ketahui apa yang berhasil dan perlu ditingkatkan.',
      icon: BarChart2,
    },
    {
      name: 'Kustomisasi Mudah',
      description:
        'Sesuaikan pesan balasan sesuai dengan merek dan kebutuhan bisnis Anda. Tidak perlu keahlian teknis khusus.',
      icon: Settings,
    },
    {
      name: 'Keamanan Data',
      description:
        'Keamanan data pelanggan adalah prioritas kami. Semua data dienkripsi dan dilindungi dengan standar tertinggi.',
      icon: Shield,
    },
    {
      name: 'Dukungan Pelanggan',
      description:
        'Tim dukungan kami siap membantu 24/7 untuk memastikan bisnis Anda berjalan lancar dengan AutoReply AI.',
      icon: Users,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32" id="fitur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Fitur Unggulan</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Semua yang Anda Butuhkan untuk Layanan Pelanggan Lebih Baik
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AutoReply AI dilengkapi dengan berbagai fitur canggih yang dirancang untuk membantu bisnis Anda memberikan pengalaman pelanggan terbaik.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
