import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Logo } from "components/atoms/logo";
import { lgxl, mdlgxl } from "styles/media";
import LinkList from "components/molecules/linkList";
import PageMenu from "components/molecules/PageMenu";
import HamburgerMenuIcon from "components/atoms/HamburgerMenuIcon";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false,
    };
  }

  render() {
    const { menuIsOpen } = this.state;

    return (
      <AppHeaader>
        <Logo
          color="red"
          fontSizeSM="1.6rem"
          fontSizeMD="2rem"
          fontSizeLGXL="3rem"
        />
        <HeaaderRight>
          <MobileMenu
            menuIsOpen={menuIsOpen}
            toggleMenu={() => this.setState({ menuIsOpen: !menuIsOpen })}
          />
          <LinkList />
        </HeaaderRight>
      </AppHeaader>
    );
  }
}

const AppHeaader = styled.header`
  padding: 0px 10px;
  display: flex;
  color: #fff;
  background: #000;
  height: 60px;
  align-items: center;
  ${lgxl`
    padding: 0px 20px;
  `}
`;

const HeaaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  display: flex;
  color: #fff;
  background: #000;
  align-items: center;

  & div {
    display: flex;
    justify-content: flex-end;
  }
`;

const MobileRightSideMenu = styled.div`
  ${mdlgxl`
    display: none !important;
  `}
  z-index: ${({ menuIsOpen }) => (menuIsOpen ? 21 : "inherit")};
`;

const MobileMenu = ({ menuIsOpen, toggleMenu }) => (
  <MobileRightSideMenu menuIsOpen={menuIsOpen}>
    <HamburgerMenuIcon menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
    <PageMenu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
  </MobileRightSideMenu>
);

MobileMenu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
