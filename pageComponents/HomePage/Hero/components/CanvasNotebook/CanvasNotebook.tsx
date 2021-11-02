import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages: any) => [...prevImages, img]);
    }
  }

  const handleScroll = () => {
    const scrollFraction = window.scrollY / (2500 - window.innerHeight);
    console.log('scrollFraction', scrollFraction);

    const index = Math.min(
      numFrames - 1,
      Math.ceil(scrollFraction * numFrames)
    );

    if (index <= 0 || index > numFrames) {
      return;
    }
    console.log('index', index);

    setFrameIndex(index);
  };

  const test = {
    frame: frameIndex,
  };
  const renderCanvas = () => {
    const context = canvasRef!.current!.getContext('2d');
    context!.canvas.width = width;
    context!.canvas.height = height;
  };

  // console.log('asd', frameIndex);

  useEffect(() => {
    preloadImages();
    renderCanvas();

    gsap.to(test, {
      frame: numFrames - 1,
      snap: 'frame',
      scrollTrigger: {
        trigger: canvasWrapRef.current,
        start: 'top top',
        pin: true,
        markers: true,
        scrub: 1,
      },
      onUpdate: () => {
        console.log('test', test);
        const context = canvasRef!.current!.getContext('2d');
        context?.drawImage(
          images[test.frame],
          0,
          0,
          1100,
          (1100 * images[test.frame].height) / images[test.frame].width
        );
        // render(test.frame);
      },
    });

    // const t = gsap.to(canvasRef.current, {
    //   scrollTrigger: {
    //     trigger: canvasWrapRef.current,
    //     start: 'top top',
    //     end: '+=2500',
    //     pin: true,
    //     markers: true,
    //     scrub: true,
    //     onUpdate: () => {
    //       // if (frameIndex <= 0 || frameIndex > numFrames) {
    //       //   return;
    //       // }
    //       // const index = frameIndex + 1;
    //       // handleScroll();

    //       // setFrameIndex((prevIndex) => prevIndex + 1);
    //       // console.log('update', frameIndex);
    //       // handleScroll();
    //     },
    //   },
    // });
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   // t.kill();
    //   // ScrollTrigger.getAll().forEach((e) => e.kill());
    //   // window.removeEventListener('scroll', handleScroll);
    //   // cancelAnimationFrame(requestId);
    // };

    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  // if (!canvasRef.current || images.length < 1) {
  //   return;
  // }
  // console.log('asd', frameIndex);
  // const context = canvasRef.current.getContext('2d');
  // let requestId: any;
  // const render = () => {
  //   context!.drawImage(
  //     images[frameIndex],
  //     0,
  //     0,
  //     1100,
  //     (1100 * images[frameIndex].height) / images[frameIndex].width
  //   );
  //   requestId = requestAnimationFrame(render);
  // };
  // render();
  // return () => cancelAnimationFrame(requestId);
  // }, [frameIndex, images]);
  return (
    <div ref={canvasWrapRef} style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasNotebook;
