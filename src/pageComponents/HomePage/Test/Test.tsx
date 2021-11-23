import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
function getPixelsByVw(vw: number) {
  const widthWindow = innerWidth <= 1440 ? innerWidth : 1440;

  return (vw * widthWindow) / 100;
}
const Test: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const testTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: () => 'top top',
          end: () => '+=2000',
          markers: true,
          scrub: 1,
          pin: true,
        },
      });
      testTimeline
        .set(boxRef.current, {
          x: getPixelsByVw(50),
          top: getPixelsByVw(10),
        })
        .to(textRef.current, {
          x: 100,
          opacity: 0.3,
          duration: 1,
        });
    }
  }, []);
  return (
    <Root ref={rootRef}>
      <Text ref={textRef}>Тестовое сообщение</Text>
      <Box ref={boxRef} />
    </Root>
  );
};

const Root = styled.div`
  /* width: calc(100% - 200px); */
  height: 300px;
  background-color: blue;

  position: relative;
`;

const Box = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  background-color: red;
`;

const Text = styled.p`
  font-size: 24px;
`;

export default Test;
