import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/ui/components/Button';
import { useCookies } from 'react-cookie';

const Cookies: FC = () => {
  const { t } = useTranslation('cookies');
  const [cookies, setCookie, removeCookie] = useCookies(['cookies']);
  console.log('cookies', cookies);

  return (
    <Root>
      <Wrapper>
        <Text>
          {t('text')}
          <Link href="#" passHref>
            <TextLink>{t('more')}</TextLink>
          </Link>
        </Text>
        <ApplyButton
          text={t('textButton')}
          onClick={() => console.log('success')}
        />
      </Wrapper>
    </Root>
  );
};

const Root = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;

  color: var(--white);
`;

const TextLink = styled.a`
  text-decoration-line: underline;

  color: var(--white); ;
`;

const ApplyButton = styled(Button)`
  font-size: 14px;
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
export default Cookies;
