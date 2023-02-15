import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import about2 from "../assets/images/about2.png";

import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage></AboutImage>
      </AboutImageContainer>
      <AboutContent>
        <AboutHeading>Know About Me !</AboutHeading>
        <AboutDescription>
          Hi, I'm Harshit, a fresher software engineer with a passion for coding
          and design. I've always been intrigued by the fascinating world of
          technology, and I'm eager to explore more of it in my new career. I
          love to code and design; creating something meaningful out of nothing
          is something that excites me. From web development to app development,
          I'm up for any challenge that comes my way. With my skillset as a
          software engineer and knowledge in coding and design, I am ready to
          take on the next challenge!
        </AboutDescription>
        <AboutHeading>Contact</AboutHeading>
        <AboutDescription>
          Email : hdlikes8@gmail.com
          <br />
          Prayagraj
        </AboutDescription>
        <StyledButton
          href="https://drive.google.com/file/d/1K5exEEPyUmh1_1moqhhpYKNQITyF2twN/view?usp=sharing"
          target="_blank"
        >
          <GetAppIcon /> Download Resume
        </StyledButton>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 70px 20px;
  background: #141d26;
  flex-wrap: wrap;
`;

const AboutImageContainer = styled.div`
  margin: 0 133px 50px 0;
`;

const AboutImage = styled.section`
  background: url(${about2}) center/cover;
  width: 120px;
  height: 120px;

  border-radius: 50%;
  object-fit: cover;
`;

const AboutContent = styled.div`
  max-width: 755px;
`;

const AboutHeading = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  color: #7a7a7a;
  margin-bottom: 20px;
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const StyledButton = styled(Button)`
  background: #ffbf00 !important;
  color: black !important;
  padding: 15px 20px !important;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
  transition: 0.2s all ease-in-out !important;

  :hover {
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2) !important;
  }
`;
