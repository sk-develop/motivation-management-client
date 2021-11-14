import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "components/atoms/button";
import { signIn } from "next-auth/react";
import { firebaseAuth } from "lib/firebase";
import {
  signInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import type { AuthProvider } from "firebase/auth";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

export type LoginInputs = {
  email: string;
  password: string;
};

const handleAnonymousSignIn = () => {
  signInAnonymously(firebaseAuth)
    .then((credential) => credential.user.getIdToken(true))
    .then((idToken) => {
      signIn("credentials", {
        idToken,
        callbackUrl: "http://localhost:3000/point",
      });
    })
    .catch((err) => alert(err));
};

const handleOAuthSignIn = (provider: AuthProvider) => {
  signInWithPopup(firebaseAuth, provider)
    .then((credential) => credential.user.getIdToken(true))
    .then((idToken) => {
      signIn("credentials", {
        idToken,
        callbackUrl: "http://localhost:3000/point",
      });
    })
    .catch((err) => alert(err));
};

const googleProvider = new GoogleAuthProvider();

const Buttons = () => {
  return (
    <>
      <ButtonContainer>
        <Button
          backgroudColor="#f26964"
          color="white"
          width="300px"
          onClick={() => handleOAuthSignIn(googleProvider)}
        >
          Google アカウントでログイン
        </Button>
      </ButtonContainer>
      <ButtonContainer>
        <Button
          backgroudColor="#009900"
          color="white"
          width="300px"
          onClick={handleAnonymousSignIn}
        >
          ゲストユーザーでログイン
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Buttons;
