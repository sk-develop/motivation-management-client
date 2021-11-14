import styled from "styled-components";
import { sm, md, lgxl } from "styles/media";

type LogoProps = {
  // children: React.ReactNode;
  fontSizeLGXL?: string;
  fontSizeSM?: string;
  fontSizeMD?: string;
  color?: string;
};

const StyledLogo = styled.strong<
  Pick<
    LogoProps,
    "fontSize" | "color" | "fontSizeSM" | "fontSizeMD" | "fontSizeLGXL"
  >
>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  color: ${({ color }) => color};
  ${md`
    font-size: ${({ fontSizeMD }) => fontSizeMD};
  `}
  ${sm`
    font-size: ${({ fontSizeSM }) => fontSizeSM};
  `}
  ${lgxl`
    font-size: ${({ fontSizeLGXL }) => fontSizeLGXL};
  `}
`;

export const Logo: React.FC<LogoProps> = ({
  fontSize,
  fontSizeSM,
  fontSizeMD,
  fontSizeLGXL,
  color,
}) => {
  return (
    <StyledLogo
      fontSize={fontSize}
      fontSizeSM={fontSizeSM}
      fontSizeMD={fontSizeMD}
      fontSizeLGXL={fontSizeLGXL}
      color={color}
    >
      MOTIVATION
    </StyledLogo>
  );
};
