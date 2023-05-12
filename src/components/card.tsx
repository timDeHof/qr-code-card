import React from "react";
import { Wrapper, CodeContainer, Context, Title, Subtitle } from "./cardStyles";
import { CardType } from "@types/cartType";

export const Card = ({ title, subtitle, imageURL }: CardType) => {
  return (
    <div>
      <Wrapper>
        <CodeContainer href='#'>
          <img src={imageURL} alt='qrCode image' />
        </CodeContainer>
        <Context>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Context>
      </Wrapper>
    </div>
  );
};
