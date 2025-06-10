'use client';

import { CircleCheckBig } from 'lucide-react';
import { useEffect, useState } from 'react';

const TEXTS = [
  'Balas pesan pelanggan secara otomatis',
  'Tingkatkan responsivitas bisnis Anda',
  'Dukungan pelanggan 24/7 dengan AI',
  'Tingkatkan konversi dengan respon cepat',
];

export function AnimatedText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = TEXTS[currentTextIndex];

      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, typingSpeed]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">AutoReply AI</h2>
      <div className="h-20 flex items-center">
        <p className="text-xl text-gray-800 font-medium">
          {currentText}
          <span className="text-primary animate-pulse">|</span>
        </p>
      </div>
      <ul className="mt-8 space-y-3 text-left text-gray-700">
        <li className="flex items-center gap-2">
          <CircleCheckBig className="text-primary size-6" />
          Respon otomatis 24/7
        </li>
        <li className="flex items-center gap-2">
          <CircleCheckBig className="text-primary size-6" />
          Integrasi dengan WhatsApp
        </li>
        <li className="flex items-center gap-2">
          <CircleCheckBig className="text-primary size-6" />
          Dukungan AI canggih
        </li>
      </ul>
    </div>
  );
}
