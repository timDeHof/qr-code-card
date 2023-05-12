import { Wrapper, CodeContainer, Context, Title, Subtitle } from "./cardStyles";
import CardType from "../types/cardType";

export const Card = ({ title, subtitle, imgUrl }: CardType) => {
  return (
    <div>
      <Wrapper>
        <CodeContainer href='#'>
          <img src={imgUrl} alt='qrCode image' />
        </CodeContainer>
        <Context>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Context>
      </Wrapper>
    </div>
  );
};
