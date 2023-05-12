import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 320px;
  height: 100%;
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.05));
`;
export const CodeContainer = styled.a`
  margin-bottom: 24px;
  aspect-ratio: 1:1;
  & img {
    display: inline-block;
    width: 100%;
    border-radius: 10px;
  }
`;

export const Context = styled.div`
  width: 288px;
`;
export const Title = styled.h1`
  color: #1f314f;
  font-family: "Outfit", sans-serif;
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`;
export const Subtitle = styled.p`
  text-align: center;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 0 16px;
  color: #7d889e;
`;
