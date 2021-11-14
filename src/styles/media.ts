import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from "styled-components";

export const sm = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: 640px) {
    ${css(first, ...interpolations)}
  }
`;

export const md = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 641px) and (max-width: 768px) {
    ${css(first, ...interpolations)}
  }
`;
export const lg = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 769px) and (max-width: 1024px) {
    ${css(first, ...interpolations)}
  }
`;

export const xl = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 1280px) {
    ${css(first, ...interpolations)}
  }
`;

export const smmd = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (max-width: 768px) {
    ${css(first, ...interpolations)}
  }
`;

export const lgxl = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 769px) {
    ${css(first, ...interpolations)}
  }
`;

export const mdlgxl = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation => css`
  @media (min-width: 641px) {
    ${css(first, ...interpolations)}
  }
`;

export function IsMobile() {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 640 ? true : false;
  }
}

// export const UseWindowDimensions = () => {
//   const getWindowDimensions = () => {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height,
//     };
//   };

//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );
//   useEffect(() => {
//     const onResize = () => {
//       setWindowDimensions(getWindowDimensions());
//     };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);
//   return windowDimensions;
// };
