'use client';

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const navigation = {
    main: [
      { name: 'Beranda', href: '/' },
      { name: 'Fitur', href: '#fitur' },
      { name: 'Harga', href: '#harga' },
      { name: 'Tentang Kami', href: '#tentang' },
      { name: 'Blog', href: '#' },
      { name: 'Kontak', href: '#kontak' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook,
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin,
      },
    ],
  };

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              AutoReplyAI
            </span>
            <p className="text-sm leading-6 text-gray-600">
              Solusi otomatisasi balasan WhatsApp berbasis AI untuk membantu bisnis Anda tumbuh dengan memberikan layanan pelanggan terbaik.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Produk</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Perusahaan</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.slice(3).map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-primary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Hubungi Kami</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex gap-x-3">
                    <Mail className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-600">hello@autoreplyai.com</span>
                  </li>
                  <li className="flex gap-x-3">
                    <Phone className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-600">+62 123 4567 890</span>
                  </li>
                  <li className="flex gap-x-3">
                    <MapPin className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                    <span className="text-sm leading-6 text-gray-600">Jakarta, Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} AutoReplyAI. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
