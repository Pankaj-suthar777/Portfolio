import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import WebProjectCards from "../Cards/WebProjectCards";
import MobileProjectCard from "../Cards/MobileProjectCard";
import { projects } from "../../data/constants";

const Projects = () => {
  const [toggle, setToggle] = useState("web app");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "mobile app" ? (
            <ToggleButton
              active
              value="mobile app"
              onClick={() => setToggle("mobile app")}
            >
              MOBILE APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="mobile app"
              onClick={() => setToggle("mobile app")}
            >
              MOBILE APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {/* {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <WebProjectCards project={project} />
            ))} */}
          {toggle === "web app"
            ? projects
                .filter((item) => item.category === "web app")
                .map((project) => <WebProjectCards project={project} />)
            : projects
                .filter((item) => item.category === "mobile app")
                .map((project) => <MobileProjectCard project={project} />)}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
