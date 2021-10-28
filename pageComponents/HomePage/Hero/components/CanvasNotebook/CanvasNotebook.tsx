import { FC, useEffect, useRef, useState } from 'react';

function getCurrentFrame(index: any) {
  return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, '0')}.jpg`;
  // return `../..//notebook/notebook${index.toString().padStart(3, '0')}.png`;
}
const CanvasNotebook = ({ scrollHeight, numFrames, width, height }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
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
    preloadImages();
    renderCanvas();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }

    const context = canvasRef.current.getContext('2d');
    let requestId: any;

    const render = () => {
      context!.drawImage(images[frameIndex], 0, 0);
      requestId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  return (
    <div style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} />
    </div>
  );
};
// const CanvasNotebook: FC = () => {
//   const ref = useRef<HTMLCanvasElement>(null);
//   // const context = ref.current?.getContext('2d');
//   // const [img, setImg] = useState<any>();

//   // const frameCount = 120;
//   // const currentFrame = (index: number) =>
//   //   `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${index
//   //     .toString()
//   //     .padStart(4, '0')}.jpg`;

//   // const preloadImages = () => {
//   //   for (let i = 1; i < frameCount; i++) {
//   //     const img = new Image();
//   //     img.src = currentFrame(i);
//   //   }
//   // };

//   // const updateImage = (index: number) => {
//   //   img.src = currentFrame(index);
//   //   context?.drawImage(img, 0, 0, 1100, (1100 * img.height) / img.width);
//   // };
//   // useEffect(() => {
//   //   setImg(new Image());
//   //   img.src = currentFrame(0);
//   //   // const img = new Image();

//   //   ref.current!.width = innerWidth;
//   //   ref.current!.height = innerHeight;
//   //   img.onload = function () {
//   //     context?.drawImage(img, 0, 0, 1100, (1100 * img.height) / img.width);
//   //   };
//   //   const html = document.documentElement;
//   //   // console.log('images', images);
//   //   window.addEventListener('scroll', () => {
//   //     const scrollTop = html.scrollTop;
//   //     const maxScrollTop = html.scrollHeight - window.innerHeight;
//   //     const scrollFraction = scrollTop / maxScrollTop;
//   //     const frameIndex = Math.min(
//   //       frameCount - 1,
//   //       Math.ceil(scrollFraction * frameCount)
//   //     );

//   //     requestAnimationFrame(() => updateImage(frameIndex + 1));
//   //   });

//   //   preloadImages();
//   // }, [currentFrame]);

//   return <canvas ref={ref} id="hero-notebook"></canvas>;
// };

export default CanvasNotebook;
