import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import russiaIcon from '@/assets/images/russia.svg';
import kazakhstanIcon from '@/assets/images/kazakhstan.svg';
import usaIcon from '@/assets/images/usa.svg';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { ActiveLink } from '@/components/ActiveLink';
import { COLORS } from '@/constants';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const router = useRouter();
  const { pathname, query, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function closeDropdownEsc(event: KeyboardEvent) {
    const code = event.code;
    if (code === 'Escape') {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener('keyup', closeDropdownEsc);
    return () => {
      window.removeEventListener('keyup', closeDropdownEsc);
    };
  }, [closeDropdownEsc]);

  return (
    <Root ref={ref} className={className}>
      <ButtonLangIndicator $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {router.locale}
      </ButtonLangIndicator>
      {isOpen && (
        <LanguagesDropdown>
          <LanguagesDropdownList>
            <LanguagesDropdownItem>
              <ActiveLink
                href={{ pathname, query }}
                asPath={asPath}
                activeClassName="active"
                locale="ru"
              >
                <LanguagesDropdownLink>
                  <Image src={russiaIcon} alt="Russia" />
                  <LanguagesDropdownLinkText>Россия</LanguagesDropdownLinkText>
                </LanguagesDropdownLink>
              </ActiveLink>
            </LanguagesDropdownItem>
            <LanguagesDropdownItem>
              <ActiveLink
                href={{ pathname, query }}
                asPath={asPath}
                activeClassName="active"
                locale="en"
              >
                <LanguagesDropdownLink>
                  <Image src={usaIcon} alt="English" />
                  <LanguagesDropdownLinkText>English</LanguagesDropdownLinkText>
                </LanguagesDropdownLink>
              </ActiveLink>
            </LanguagesDropdownItem>
            <LanguagesDropdownItem>
              <ActiveLink
                href={{ pathname, query }}
                asPath={asPath}
                activeClassName="active"
                locale="kz"
              >
                <LanguagesDropdownLink>
                  <Image src={kazakhstanIcon} alt="Қазақстан" />
                  <LanguagesDropdownLinkText>
                    Қазақстан
                  </LanguagesDropdownLinkText>
                </LanguagesDropdownLink>
              </ActiveLink>
            </LanguagesDropdownItem>
          </LanguagesDropdownList>
        </LanguagesDropdown>
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const ButtonLangIndicator = styled.button<{ $isOpen: boolean }>`
  background: ${COLORS.white};
  border-radius: 8px;
  padding: 11px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: ${COLORS.black3};
  cursor: pointer;
  @media (max-width: 900px) {
    padding: 20px;
    width: 100%;
    border-radius: 0;
    background-color: ${(props) =>
      props.$isOpen ? COLORS.black2 : 'transparent'};
    color: ${COLORS.white};
    justify-content: flex-start;

    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      right: 0;
      height: 1px;
      background-color: rgba(153, 153, 153, 0.3);
      width: ${(props) => (props.$isOpen ? '100%' : 'calc(100% - 40px)')};
    }
  }
`;
const LanguagesDropdown = styled.div.attrs(() => ({
  className: 'language-switcher',
}))`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  min-width: 133px;
  background: ${COLORS.white};
  box-shadow: 0px 6px 23px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding-bottom: 7px;
  overflow: hidden;
  z-index: 2;
  @media (max-width: 900px) {
    top: auto;
    bottom: 100%;
    left: 0;
    border-radius: 30px 30px 0px 0px;
    padding-top: 20px;
    background-color: ${COLORS.black2};
  }
`;
const LanguagesDropdownList = styled.ul``;
const LanguagesDropdownItem = styled.li``;
const LanguagesDropdownLink = styled.a`
  display: flex;
  align-items: center;
  padding: 7px 13px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  position: relative;
  &.active {
    background-color: #f4f4f4;
  }

  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 26px);
    height: 1px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%) scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    background-color: ${COLORS.green};
  }
  &:hover:not(.active) {
    &::before {
      transform: translateX(-50%) scaleX(1);
    }
  }
  @media (max-width: 900px) {
    color: ${COLORS.white};

    font-size: 18px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    img {
      width: 24px;
    }
    &:hover:not(.active) {
      &::before {
        transform: scaleX(0);
      }
    }
  }
`;
const LanguagesDropdownLinkText = styled.p`
  margin-left: 8px;
  @media (max-width: 900px) {
    margin-left: 14px;
  }
`;
export default LanguageSwitcher;
