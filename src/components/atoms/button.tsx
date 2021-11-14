import styled from 'styled-components';
// import './button';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
  backgroudColor?: string;
  margin?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
};

const StyledButton = styled.button<
  Pick<
    ButtonProps,
    'width' | 'borderRadius' | 'color' | 'backgroudColor' | 'margin' | 'type'
  >
>`
  border: 0;
  outline: 0;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  background-color: ${({ backgroudColor }) => backgroudColor};
  border-radius: 6px;
  type: ${({ type }) => type};

  &:active {
    transition: 0.1s;
    transform: translate3d(0, 2px, 0);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  width,
  borderRadius,
  color,
  backgroudColor,
  margin = '0 0 0 0',
  onClick,
  disabled,
  type,
}) => {
  return (
    <StyledButton
      className={className}
      width={width}
      borderRadius={borderRadius}
      color={color}
      backgroudColor={backgroudColor}
      margin={margin}
      onClick={onClick}
      disabled={disabled}
      submit={type}
    >
      {children}
    </StyledButton>
  );
};
