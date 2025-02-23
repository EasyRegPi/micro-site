import React from 'react';
import ImageCarousel from '@site/src/components/ImageCarousel';
// ... importe todas as imagens ...

const carouselItems = [
  { url: Mockup1, caption: 'Página 1' },
  { url: Mockup2, caption: 'Página 2' },
  // ... crie objetos para todas as imagens ...
];

// Componente de página que usa o carrossel
export default function MyPage() {
  return <ImageCarousel items={carouselItems} />;
}
