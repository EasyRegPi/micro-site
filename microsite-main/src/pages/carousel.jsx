import React from 'react';
import ImageCarousel from '@site/src/components/ImageCarousel';
// ... importe todas as imagens ...

const carouselItems = [
 
  // ... crie objetos para todas as imagens ...
];

// Componente de página que usa o carrossel
export default function MyPage() {
  return <ImageCarousel items={carouselItems} />;
}
