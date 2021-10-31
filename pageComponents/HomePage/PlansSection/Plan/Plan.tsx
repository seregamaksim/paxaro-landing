import { FC, useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/ui/components/Button';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsMounted } from '@/hooks/useIsMounted';

interface ItemType {
  text: string;
}
interface IPlanProps {
  title: string;
  price: string;
  hrefLink: string;
  className?: string;
  data: ItemType[];
}

const Plan: FC<IPlanProps> = ({ title, price, hrefLink, className, data }) => {
  const { t } = useTranslation('plans');
  const isMounted = useIsMounted();
  const mainRef = useRef(null);
  const listRef = useRef<HTMLLIElement[]>([]);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !listRef.current.includes(el)) {
      listRef.current.push(el);
    }
  };

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    window.addEventListener('load', function () {
      const planTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top 70%',
          end: '1% 71%',
          toggleActions: 'play none reverse none',
          markers: true,
        },
      });

      planTimeline.from(listRef.current, {
        opacity: 0,
        x: 15,
        duration: 0.7,
        stagger: 0.1,
      });
    });
    // ScrollTrigger.refresh();
  }, []);
  return (
    <Root className={className} ref={mainRef}>
      <PlanHead>
        <PlanTitle>{title}</PlanTitle>
        <PlanHeadWrap>
          <PlanPrice>${price}</PlanPrice>
          <Link href={hrefLink} passHref>
            <PlanLink text={t('buy')} isLink />
          </Link>
        </PlanHeadWrap>
      </PlanHead>
      <PlanList>
        {data.map((item, index) => (
          <PlanItem key={index} ref={addToRefs}>
            {item.text}
          </PlanItem>
        ))}
      </PlanList>
    </Root>
  );
};

const Root = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`;

const PlanHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(29, 29, 29, 0.3);
  margin-bottom: 40px;
`;

const PlanTitle = styled.p`
  font-weight: bold;
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  letter-spacing: 0.01em;

  color: var(--black2);
`;

const PlanHeadWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PlanPrice = styled.p`
  font-weight: bold;
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-right: 56px;
  color: var(--black2);
`;

const PlanLink = styled(Button)`
  font-size: 24px;
  line-height: 34px;
`;

const PlanList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 50px;
`;

const PlanItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 44px;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;

  color: var(--darkGray);
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    width: 24px;
    height: 24px;
    border: 1px solid var(--green);
    left: 0;
  }
  &::after {
    width: 18px;
    height: 18px;
    background-color: var(--green);
    left: 3px;
  }
`;

export default Plan;
