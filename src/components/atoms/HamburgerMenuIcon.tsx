import React from 'react';
import PropTypes from 'prop-types';
import { config, animated, to, useSpring } from '@react-spring/web';

const HamburgerMenuIcon = ({ menuIsOpen, toggleMenu }) => {
  const strokeColor = 'white';

  const { x, y /* strokeColor */ } = useSpring({
    to: {
      x: menuIsOpen ? 1 : 0,
      y: menuIsOpen ? 0 : 1,
    },
    config: config.wobbly,
  });

  return (
    <svg
      viewBox="0 0 96 96"
      onClick={toggleMenu}
      style={{
        height: '6vh',
        overflow: 'visible',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
    >
      <animated.g
        id="navicon"
        fill="none"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animated.line
          transform={to(
            [x],
            (xCoord) =>
              `translate(${xCoord * 12}, ${xCoord * -7}) rotate(${
                xCoord * 45
              }, 7, 26)`
          )}
          x1="7"
          y1="26"
          x2="89"
          y2="26"
        />
        <animated.line
          transform={to(
            [x],
            (xCoord) =>
              `translate(${xCoord * 12}, ${xCoord * 7}) rotate(${
                xCoord * -45
              }, 7, 70)`
          )}
          x1="7"
          y1="70"
          x2="89"
          y2="70"
        />
        <animated.line
          transform={to([x], (xCoord) => `translate(${xCoord * -96})`)}
          opacity={y}
          x1="7"
          y1="48"
          x2="89"
          y2="48"
        />
      </animated.g>
    </svg>
  );
};

HamburgerMenuIcon.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default HamburgerMenuIcon;
