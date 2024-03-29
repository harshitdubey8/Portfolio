import styled from "styled-components";
import { IconButton } from "@material-ui/core";
// import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";

import hero2 from "../assets/images/hero2.jpg";

function Home() {
  return (
    <HomeContainer id="home">
      <HeroDetails>
        <HeroTitle>Harshit Dubey</HeroTitle>
        <HeroDescription>Full Stack Developer | UI UX Designer</HeroDescription>
      </HeroDetails>
      <SocialContainer>
        <IconButton>
          <IconContainer
            href="https://twitter.com/BabaAramdev_"
            target="_blank"
          >
            <TwitterIcon />
          </IconContainer>
        </IconButton>
        <IconButton>
          <IconContainer
            href="https://www.linkedin.com/in/harshit-dubey-a148851a7/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconContainer>
        </IconButton>
        <IconButton>
          <IconContainer
            href="https://www.instagram.com/harsh_hitdubey/"
            target="_blank"
          >
            <InstagramIcon />
          </IconContainer>
        </IconButton>
        <IconButton>
          <IconContainer
            href="https://www.github.com/harshitdubey8"
            target="_blank"
          >
            <GitHubIcon />
          </IconContainer>
        </IconButton>
      </SocialContainer>
      <DropDownLink href="#about">
        <ArrowDropdownCustom />
      </DropDownLink>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3) url(${hero2}) center/cover fixed no-repeat;
  background-blend-mode: darken;
  width: 100%;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const HeroDetails = styled.div`
  /* background-color: rgba(0, 0, 0, 0.4); */
  padding: 10px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 6rem;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.h2`
  font-size: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  margin-top: 60px;
  width: 30%;
  justify-content: space-around;
`;

const IconContainer = styled.a`
  text-decoration: none;
  color: #fff;

  .MuiSvgIcon-root {
    font-size: 3rem;
    transition: 0.2s all ease;
  }

  :hover .MuiSvgIcon-root {
    transform: scale(1.2);
    color: #ffbf00;
  }
`;

const DropDownLink = styled.a`
  position: absolute;
  bottom: 10px;
`;

const ArrowDropdownCustom = styled(ArrowDropDownCircleRoundedIcon)`
  color: #fff;
  font-size: 3.5rem !important;
  transition: 0.5s color ease-in-out !important;

  :hover {
    color: #ffbf00 !important;
  }
`;
