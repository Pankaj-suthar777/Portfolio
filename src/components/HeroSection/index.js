import React from "react";
import styled from "styled-components";

import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  Smallpara,
  RightTitle,
  Smallheading,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../Images/HeroImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
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

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            {/* <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton> */}
            <Btn>Get in toach</Btn>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            {/*  <Img src={HeroImg} alt="hero-image" /> */}
            <RightTitle>How I Develop Websites</RightTitle>
            <Smallpara>
              From concept, to strategy, to design, development. I'm with you
              the whole way
            </Smallpara>
            <div
              style={{
                borderRadius: "12px",
                padding: "10px 5px",
                maxWidth: "500px",
                background: "#171721",
                border: "0.1px solid #854ce6",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
              }}
            >
              <Smallheading>Listen</Smallheading>
              <Smallpara>
                From start to finish, I work with you. I want to understand
                everything about your buisness
              </Smallpara>
            </div>
            <div
              style={{
                borderRadius: "12px",
                padding: "10px 5px",
                maxWidth: "500px",
                background: "#171721",
                border: "0.1px solid #854ce6",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
              }}
            >
              <Smallheading>Understand</Smallheading>
              <Smallpara>
                Before i even begin to build anything. I make sure i understand
                all the pieces
              </Smallpara>
            </div>
            <div
              style={{
                borderRadius: "12px",
                padding: "10px 5px",
                maxWidth: "500px",
                background: "#171721",
                border: "0.1px solid #854ce6",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
              }}
            >
              <Smallheading>Execute</Smallheading>
              <Smallpara>
                I'll create a strategy with your company, and then execute the
                plan
              </Smallpara>
            </div>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
