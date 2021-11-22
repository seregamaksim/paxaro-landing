import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { LINKS, COLORS } from '@/constants';

interface SocialListProps {
  className?: string;
}
const SocialList: FC<SocialListProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Item>
        <Link href={LINKS.instagramLink} passHref>
          <ItemLink target="_blank">Instagram</ItemLink>
        </Link>
      </Item>
      <Item>
        <Link href={LINKS.vkLink} passHref>
          <ItemLink target="_blank">VC</ItemLink>
        </Link>
      </Item>
      <Item>
        <Link href={LINKS.twitterLink} passHref>
          <ItemLink target="_blank">Twitter</ItemLink>
        </Link>
      </Item>
      <Item>
        <Link href={LINKS.youtubeLink} passHref>
          <ItemLink target="_blank">YouTube</ItemLink>
        </Link>
      </Item>
      <Item>
        <Link href={LINKS.telegramLink} passHref>
          <ItemLink target="_blank">Telegram</ItemLink>
        </Link>
      </Item>
    </Root>
  );
};

const Root = styled.ul`
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;

const Item = styled.li`
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 900px) {
    margin-bottom: 0;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const ItemLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.01em;

  color: ${COLORS.white};
`;

export default SocialList;
