import React from "react";

import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  margin-top: 25px:
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  max-width: 1200px;
`;

const Btn = styled.button`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #ffdeda;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
function Services() {
  return (
    <div id="services">
      <Container>
        <InnerContainer>
          <Title>
            "Focus on running your business, while i focus on growing your
            business"
          </Title>
          <TextLoop>
            Innovative Solutions For Your Diverse Business Needs
          </TextLoop>
          <SubTitle>
            Do you want to launch a new website or are you looking to enhance
            your online presence? I can offer you a range of robust, affordable
            custom solutions designed to convert visitors into customers and to
            produce tangible business results. High-performance data processing
            systems, secure eCommerce deployments, as well as multi-platform
            apps, are available to streamline your operations, increase user
            engagement and boost company growth.
          </SubTitle>
          <a href="#contact" style={{ textDecoration: "none" }}>
            <Btn>Get in toach</Btn>
          </a>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default Services;
