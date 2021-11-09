import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/ui/components/Button';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ItemType {
  text: string;
}
interface PlanProps {
  title: string;
  price: string;
  hrefLink: string;
  className?: string;
  data: ItemType[];
}

const Plan: FC<PlanProps> = ({ title, price, hrefLink, className, data }) => {
  const { t } = useTranslation('plans');

  const mainRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLLIElement[]>([]);

  const addToRefs = (el: HTMLLIElement) => {
    if (el && !listRef.current.includes(el)) {
      listRef.current.push(el);
    }
  };

  useEffect(() => {
    const planTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top 70%',
        end: '1% 71%',
        toggleActions: 'play none reverse none',
      },
    });

    planTimeline
      .addLabel('start')
      .from(
        headRef.current,
        {
          width: '70%',
          opacity: 0,
          duration: 1,
        },
        'start'
      )
      .from(
        priceRef.current,
        {
          opacity: 0,
          duration: 0.7,
        },
        '>-0.8'
      )
      .from(
        listRef.current,
        {
          opacity: 0,
          x: 15,
          duration: 0.7,
          stagger: 0.1,
        },
        '>'
      );
  }, []);
  return (
    <Root className={className} ref={mainRef}>
      <PlanHead ref={headRef}>
        <PlanTitle>{title}</PlanTitle>
        <PlanHeadWrap ref={priceRef}>
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PlanTitle = styled.p`
  font-weight: bold;
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  letter-spacing: 0.01em;

  color: var(--black2);
  @media (max-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
    line-height: 50px;
  }
`;

const PlanHeadWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const PlanPrice = styled.p`
  font-weight: bold;
  font-size: 72px;
  line-height: 90px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-right: 56px;
  color: var(--black2);
  @media (max-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
    margin-right: 30px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
    line-height: 50px;
  }
`;

const PlanLink = styled(Button)`
  font-size: 24px;
  line-height: 34px;
  @media (max-width: 1024px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const PlanList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 50px;
  @media (max-width: 1024px) {
    column-gap: 30px;
  }
  @media (max-width: 768px) {
    display: block;
  }
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
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
    padding-left: 34px;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      width: 20px;
      height: 20px;
    }
    &::after {
      width: 16px;
      height: 16px;
      left: 2px;
    }
  }
`;

export default Plan;
