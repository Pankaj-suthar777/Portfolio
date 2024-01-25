import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { message } from "antd";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../../data/constants";

const Btn = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 12px;
  width: 100%;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-top: 30px;

  &:active,
  &:hover {
    outline: 0;
  }

  span {
    background-color: rgb(5, 6, 45);
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover span {
    background: none;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
const Input = styled.input`
  color: white;
  border: 2px solid #8707ff;
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  width: 100%;

  &:active {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;
const Textarea = styled.textarea`
  color: white;
  border: 2px solid #8707ff;
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  width: 100%;

  &:active {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;
const Container = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  align-items: center;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
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
  max-width: 500px;
  gap: 15px;
`;

const Label = styled.label`
  color: white;
  margin-top: 15px;
`;
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9p8dopp",
        "template_ovuuswk",
        form.current,
        "0oRK_lOeJo5UekD0c"
      )
      .then(
        (result) => {
          console.log(result.text);
          message.success("Message Sent Successfully");
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
  `;

  const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  `;
  const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    text-align: center;

    color: salmon;
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
  return (
    <div id="contact">
      <Container>
        <form ref={form} onSubmit={sendEmail}>
          <InnerContainer>
            <TextLoop>
              "Let's connect what do you want build? share i'm waiting"
            </TextLoop>
            <SocialMediaIcons>
              <SocialMediaIcon href={Bio.twitter} target="display">
                <TwitterIcon />
              </SocialMediaIcon>
              <SocialMediaIcon href={Bio.linkedin} target="display">
                <LinkedInIcon />
              </SocialMediaIcon>
            </SocialMediaIcons>

            <Input type="text" name="user_name" placeholder="Name" />

            <Input type="email" name="user_email" placeholder="Email" />

            <Textarea rows={4} name="message" placeholder="Message" />
            <Btn type="submit" value="Send">
              <span class="text">Send</span>
            </Btn>
          </InnerContainer>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
