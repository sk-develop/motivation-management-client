import React from "react";
import styled from "styled-components";
import Main from "components/organisms/login/main";
import Image from "next/image";
import LoginHeader from "components/organisms/login/header";

const BackgroundImage = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  // background: red;
`;

function LoginPage() {
  return (
    <BackgroundImage>
      <Image
        src="/China-Cove-FB.jpeg"
        alt="Landscape picture"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <LoginHeader />
      <Main />
    </BackgroundImage>
  );
}

export default LoginPage;
