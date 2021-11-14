import styled from "styled-components";
import { sm } from "styles/media";
import Link from "next/link";

const AppLinkList = styled.ul`
  ${sm`
    display: none;
  `}
  display: flex;
  align-items: center;

  & li {
    margin-left: 40px;
    list-style-type: none;
  }
  & a {
    color: #fff;
    font: 1.4rem "noto sans japanese", sans-serif;
    text-decoration: none;
  }
`;

const LinkList = () => {
  return (
    <AppLinkList>
      <li>
        <Link passHref href="/points">
          <a>Points</a>
        </Link>
      </li>
      <li>
        <Link passHref href="/tasks">
          <a>Tasks</a>
        </Link>
      </li>
      <li>
        <Link passHref href="/habits">
          <a>Habits</a>
        </Link>
      </li>
      <li>
        <Link passHref href="/account">
          <a>Account</a>
        </Link>
      </li>
    </AppLinkList>
  );
};

export default LinkList;
