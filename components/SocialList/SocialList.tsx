import { FC } from 'react';
import styled from 'styled-components';
import { ActiveLink } from '@/components/ActiveLink';

interface ISocialListProps {
  className?: string;
}
const SocialList: FC<ISocialListProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Item>
        <ActiveLink href="https://dev.to/">
          <ItemLink>Instagram</ItemLink>
        </ActiveLink>
      </Item>
      <Item>
        <ActiveLink href="https://dev.to/">
          <ItemLink>VC</ItemLink>
        </ActiveLink>
      </Item>
      <Item>
        <ActiveLink href="https://dev.to/">
          <ItemLink>Twitter</ItemLink>
        </ActiveLink>
      </Item>
      <Item>
        <ActiveLink href="https://dev.to/">
          <ItemLink>YouTube</ItemLink>
        </ActiveLink>
      </Item>
      <Item>
        <ActiveLink href="https://dev.to/">
          <ItemLink>Telegram</ItemLink>
        </ActiveLink>
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

  color: var(--white);
`;

export default SocialList;
