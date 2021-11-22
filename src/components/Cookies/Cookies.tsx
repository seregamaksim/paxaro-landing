import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/ui/components/Button';
import { useCookies } from 'react-cookie';
import { COLORS } from '@/constants';

const Cookies: FC = () => {
  const { t } = useTranslation('cookies');
  const [cookies, setCookie] = useCookies(['cookiesSite']);
  const [hasCookie, setHasCookie] = useState(true);

  function handleClickApplyButton() {
    setCookie('cookiesSite', 'true', { path: '/' });
    setHasCookie(true);
  }

  useEffect(() => {
    cookies.cookiesSite ? setHasCookie(true) : setHasCookie(false);
  }, []);

  return hasCookie ? null : (
    <Root>
      <Wrapper>
        <Text>
          {t('text')}
          <Link href="#" passHref>
            <TextLink>{t('more')}</TextLink>
          </Link>
        </Text>
        <ApplyButton text={t('textButton')} onClick={handleClickApplyButton} />
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(1, 2, 2, 0.8);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 840px;
  margin: 0 auto;
  padding: 22px;
  @media (max-width: 768px) {
    padding: 20px;
    flex-direction: column;
  }
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;

  color: ${COLORS.white};
  max-width: 610px;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 12px;
  }
`;

const TextLink = styled.a`
  text-decoration-line: underline;

  color: ${COLORS.white}; ;
`;

const ApplyButton = styled(Button)`
  font-size: 14px;
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export default Cookies;
