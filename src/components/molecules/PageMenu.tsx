import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { animated, to, useSpring } from "@react-spring/web";
import Link from "next/link";
import Scrollbar from "components/atoms/Scrollbar";

const PageMenu = ({ menuIsOpen, toggleMenu }) => {
  const { opacity } = useSpring({
    to: { opacity: menuIsOpen ? 1 : 0 },
  });

  return (
    <MenuContainer
      style={{
        opacity,
        display: to([opacity], (x) => (x === 0 ? "none" : "flex")),
      }}
    >
      <Scrollbar
        contentProps={{
          renderer: ({ elementRef, style, ...restProps }) => (
            <ScrollbarContent
              {...restProps}
              style={{
                ...style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              ref={elementRef}
            />
          ),
        }}
      >
        <NavMenuContainer>
          <Link passHref href="/points">
            <MobileStyledLink onClick={toggleMenu}>
              <LinkHeading>Points</LinkHeading>
            </MobileStyledLink>
          </Link>

          <Link passHref href="/tasks">
            <MobileStyledLink onClick={toggleMenu}>
              <LinkHeading>Tasks</LinkHeading>
            </MobileStyledLink>
          </Link>

          <Link passHref href="/habits">
            <MobileStyledLink onClick={toggleMenu}>
              <LinkHeading>Habits</LinkHeading>
            </MobileStyledLink>
          </Link>

          <Link passHref href="/account">
            <MobileStyledLink onClick={toggleMenu}>
              <LinkHeading>Account</LinkHeading>
            </MobileStyledLink>
          </Link>
        </NavMenuContainer>
      </Scrollbar>
    </MenuContainer>
  );
};

PageMenu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default PageMenu;

const ScrollbarContent = styled.div`
  &[style] {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const LinkHeading = styled.span`
  color: white;
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
`;

const NavMenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  margin: auto;
`;

const MenuContainer = animated(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: #1d1e1f;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`);

const MobileStyledLink = styled.a`
  font-size: 2em;
  margin: 20px 20px;
  padding: 15px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.headerNavMobileMenuFontColor};
`;
