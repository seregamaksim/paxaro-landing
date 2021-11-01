import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function getCurrentFrame(index: any) {
  return `/notebook/notebook${index.toString().padStart(3, '0')}.png`;
}
const CanvasNotebook = ({ scrollHeight, numFrames, width, height }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapRef = useRef(null);
  const [images, setImages] = useState<any>([]);
  const [frameIndex, setFrameIndex] = useState(0);

  function preloadImages() {
    for (let i = 0; i <= numFrames; i++) {
      console.log(getCurrentFrame(i));
      // const img = `<img src=${getCurrentFrame(i)} />`;
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages: any) => [...prevImages, img]);
    }
  }

  const handleScroll = () => {
    const scrollFraction = window.scrollY / (4000 - window.innerHeight);
    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }

    setFrameIndex(index);
  };

  const renderCanvas = () => {
    const context = canvasRef!.current!.getContext('2d');
    context!.canvas.width = width;
    context!.canvas.height = height;
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    preloadImages();
    renderCanvas();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }
    console.log('asd');

    const context = canvasRef.current.getContext('2d');
    let requestId: any;

    const render = () => {
      context!.drawImage(
        images[frameIndex],
        0,
        0,
        1100,
        (1100 * images[frameIndex].height) / images[frameIndex].width
      );
      requestId = requestAnimationFrame(render);
    };

    render();
    // const heroTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: canvasWrapRef.current,
    //     start: 'top bottom',
    //     // end: '+=4000',
    //     markers: true,
    //     scrub: 1,
    //     pin: true,
    //     // onUpdate: render,
    //   },
    // });
    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <div ref={canvasWrapRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasNotebook;
