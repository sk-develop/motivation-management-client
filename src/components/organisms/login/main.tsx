import React from "react";
import styled from "styled-components";
import Buttons from "components/molecules/login/buttons";

const MainConteiner = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  padding: 4rem;
`;

const MediaWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default function Main() {
  return (
    <MediaWrapper>
      <MainConteiner>
        <Buttons></Buttons>
      </MainConteiner>
    </MediaWrapper>
  );
}
