import { FC, useEffect, useRef, useState } from 'react';
import images from '@/assets/images/*.png';

const CanvasNotebook: FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  // const context = ref.current?.getContext('2d');
  // const [img, setImg] = useState<any>();

  // const frameCount = 120;
  // const currentFrame = (index: number) =>
  //   `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${index
  //     .toString()
  //     .padStart(4, '0')}.jpg`;

  // const preloadImages = () => {
  //   for (let i = 1; i < frameCount; i++) {
  //     const img = new Image();
  //     img.src = currentFrame(i);
  //   }
  // };

  // const updateImage = (index: number) => {
  //   img.src = currentFrame(index);
  //   context?.drawImage(img, 0, 0, 1100, (1100 * img.height) / img.width);
  // };
  // useEffect(() => {
  //   setImg(new Image());
  //   img.src = currentFrame(0);
  //   // const img = new Image();

  //   ref.current!.width = innerWidth;
  //   ref.current!.height = innerHeight;
  //   img.onload = function () {
  //     context?.drawImage(img, 0, 0, 1100, (1100 * img.height) / img.width);
  //   };
  //   const html = document.documentElement;
  //   // console.log('images', images);
  //   window.addEventListener('scroll', () => {
  //     const scrollTop = html.scrollTop;
  //     const maxScrollTop = html.scrollHeight - window.innerHeight;
  //     const scrollFraction = scrollTop / maxScrollTop;
  //     const frameIndex = Math.min(
  //       frameCount - 1,
  //       Math.ceil(scrollFraction * frameCount)
  //     );

  //     requestAnimationFrame(() => updateImage(frameIndex + 1));
  //   });

  //   preloadImages();
  // }, [currentFrame]);

  return <canvas ref={ref} id="hero-notebook"></canvas>;
};

export default CanvasNotebook;
