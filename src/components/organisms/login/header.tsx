import styled from "styled-components";
import { smmd } from "styles/media";
import { Logo } from "components/atoms/logo";

const Header = styled.header`
  ${smmd`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh
  `}
`;

const HeaderLogo = styled.div`
  position: absolute;

  ${smmd`
    display: flex;
      padding-top: 80px;
    justify-content: center;
    align-items: center;
    height: 10vh
  `}
`;

export default function AppHeaderLogo() {
  return (
    <Header>
      <HeaderLogo>
        <Logo
          color="black"
          fontSizeSM="2.5rem"
          fontSizeMD="4rem"
          fontSizeLGXL="3.5rem"
        />
      </HeaderLogo>
    </Header>
  );
}
