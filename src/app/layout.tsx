import { ReactNode } from 'react';
import '@/styles/globals.css';
import { lora, quicksand } from '@/fonts/fonts';

export const metadata = {
  title: 'Hafa | Thời trang thanh lịch',
  description: 'Thời trang trung niên thanh lịch từ Hafa.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={`${quicksand.variable} ${lora.variable}`}>
      <body className="bg-[#fffdfa] text-stone-800">{children}</body>
    </html>
  );
}
