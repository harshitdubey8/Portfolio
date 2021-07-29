import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import about from "../assets/images/about.jpeg";

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
          Hey ! I am a student of Computer Science, I love to build projects for
          fun ,I spend most of my time working on several projects, watching
          Anime or playing video games. I observe problems and try to find a
          creative solution out of it, I am also very much of an artist , I
          scribble my pencil to turn blank pages into beautiful sketches and I
          am also good in building UI for native mobile applications using
          Figma.I love laughing and spending my life with fun.
        </AboutDescription>
        <AboutHeading>Contact</AboutHeading>
        <AboutDescription>
          Email : hdlikes8@gmail.com
          <br />
          Prayagraj
        </AboutDescription>
        <StyledButton
          href="https://drive.google.com/file/d/1-7Eu56pZQMiLL5UyNPzTHTyHX9I4YWAF/view?usp=sharing"
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
  background: url(${about}) center/cover;
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
