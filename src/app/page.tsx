'use client';

import { useState } from 'react';

const colors = [
  { name: 'Be camel', hex: '#b98657', image: '01-be-camel.png' },
  { name: 'Tím lavender', hex: '#a778c5', image: '02-tim-lavender.png' },
  { name: 'Nâu gạch', hex: '#9e492f', image: '03-nau-gach.png' },
  { name: 'Xanh navy', hex: '#1e3159', image: '04-xanh-navy.png' },
  { name: 'Đen', hex: '#212121', image: '05-den.png' },
  { name: 'Đỏ ruby', hex: '#b71d31', image: '06-do-ruby.png' },
  { name: 'Xanh rêu', hex: '#234d40', image: '07-xanh-reu.png' },
  { name: 'Hồng dusty rose', hex: '#c8848f', image: '08-hong-dusty-rose.png' },
  { name: 'Trắng ngà', hex: '#f2eee5', image: '09-trang-nga.png' }
];

export default function HomePage() {
  const [selected, setSelected] = useState(0);
  const [added, setAdded] = useState(false);
  const color = colors[selected] as (typeof colors)[number];

  return (
    <main>
      <div className="bg-[#5b2630] px-4 py-2 text-center text-xs font-semibold tracking-[0.12em] text-white sm:text-sm">FREESHIP TOÀN QUỐC • ĐỔI TRẢ TRONG 7 NGÀY</div>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8"><a className="font-lora text-3xl font-bold tracking-[0.2em] text-[#5b2630]" href="#top">HAFA</a><nav className="hidden gap-8 text-sm font-semibold text-stone-600 md:flex"><a href="#san-pham">Sản phẩm</a><a href="#cau-chuyen">Câu chuyện Hafa</a><a href="#lien-he">Liên hệ</a></nav><button className="rounded-full border border-[#5b2630] px-4 py-2 text-sm font-bold text-[#5b2630]">Giỏ hàng</button></header>
      <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-4 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20"><div className="order-2 lg:order-1"><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#9d6a48]">Bộ sưu tập Đông 2026</p><h1 className="font-lora text-4xl leading-tight text-[#4b2528] sm:text-5xl">Vẻ đẹp thanh lịch<br />của riêng nàng</h1><p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">Hafa tôn vinh nét duyên dáng của người phụ nữ bằng những thiết kế tinh tế, chỉn chu và thoải mái trong mọi khoảnh khắc.</p><a href="#san-pham" className="mt-8 inline-block rounded-full bg-[#5b2630] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#793540]">Khám phá thiết kế mới</a></div><div className="overflow-hidden rounded-[2rem] bg-[#efe4d6] shadow-xl"><img src="/images/hafa/01-be-camel.png" alt="Đầm ren Hafa màu be camel" className="aspect-[1/1.03] h-full w-full object-cover" /></div></section>
      <section id="san-pham" className="bg-[#f7f1e9] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-10 text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9d6a48]">Thiết kế nổi bật</p><h2 className="mt-3 font-lora text-3xl text-[#4b2528] sm:text-4xl">Đầm ren dập ly Hafa</h2></div><div className="grid gap-10 rounded-[2rem] bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-2 lg:p-10"><div className="overflow-hidden rounded-2xl bg-[#f2ebe3]"><img src={`/images/hafa/${color.image}`} alt={`Đầm ren dập ly Hafa màu ${color.name}`} className="h-full w-full object-cover" /></div><div className="flex flex-col justify-center py-2"><p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9d6a48]">Mã SP: HAFA-DL01</p><h3 className="mt-3 font-lora text-3xl text-[#4b2528]">Đầm ren dập ly đính hoa</h3><p className="mt-4 text-2xl font-bold text-[#9c3945]">1.500.000₫</p><p className="mt-5 leading-7 text-stone-600">Dáng đầm dài thướt tha với chất liệu ren hoa mềm mại, chi tiết đính hoa và thắt lưng nhấn eo. Phù hợp cho tiệc, gặp gỡ và những dịp trang trọng.</p><div className="mt-7"><p className="mb-3 text-sm font-bold">Màu sắc: <span className="font-normal text-stone-600">{color.name}</span></p><div className="flex flex-wrap gap-3">{colors.map((item, index) => <button key={item.name} onClick={() => { setSelected(index); setAdded(false); }} aria-label={item.name} title={item.name} className={`h-9 w-9 rounded-full border-2 transition ${selected === index ? 'scale-110 border-[#5b2630] ring-2 ring-[#d9b79a]' : 'border-white shadow'}`} style={{ backgroundColor: item.hex }} />)}</div></div><div className="mt-7"><p className="mb-3 text-sm font-bold">Kích thước</p><div className="flex gap-3">{['M', 'L', 'XL', '2XL'].map(size => <button key={size} className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-semibold hover:border-[#5b2630] hover:text-[#5b2630]">{size}</button>)}</div></div><button onClick={() => setAdded(true)} className="mt-8 rounded-full bg-[#5b2630] px-7 py-4 font-bold text-white transition hover:bg-[#793540]">{added ? 'Đã thêm vào giỏ hàng ✓' : 'Thêm vào giỏ hàng'}</button><p className="mt-4 text-sm text-stone-500">Hỗ trợ tư vấn size • Đổi trả trong 7 ngày</p></div></div></div></section>
      <section id="cau-chuyen" className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9d6a48]">Hafa</p><h2 className="mt-3 font-lora text-3xl text-[#4b2528] sm:text-4xl">Mặc đẹp, sống tự tin</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">Chúng tôi chọn lựa phom dáng tôn dáng, màu sắc trang nhã và chất liệu dễ chịu để mỗi thiết kế Hafa đồng hành cùng nàng trong những ngày đẹp nhất.</p></section>
      <footer id="lien-he" className="bg-[#4b2528] px-5 py-10 text-center text-stone-200"><div className="font-lora text-2xl tracking-[0.2em] text-white">HAFA</div><p className="mt-4 text-sm">Thời trang thanh lịch dành cho phụ nữ Việt</p><p className="mt-6 text-xs text-stone-400">© 2026 HAFA. All rights reserved.</p></footer>
    </main>
  );
}
