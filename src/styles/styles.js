import styled from "styled-components";

export const Title = styled.h1`
font-weight: bold;
padding: 3% 0% 3%;
text-transform: uppercase;
font-size: 35px;
color: #f7f7f7;
background-color: rgb(55, 1, 71);
margin: 0% 0% 5%;
`;

export const ProjectContainer = styled.div`
  background-color: #f7f7f7;
  padding: 10% 0%;
  text-align: center;
`;
export const SteamContainer = styled.div`
  background-color: #f7f7f7;
  padding: 10% 0%;
  color: #020e40;
  text-align: center;
`;

export const BoxContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxProject = styled.div`
background:white;
padding: 50px 20px;
color:#8041E5;
  margin: 0% 5%;
  @media (max-width: 768px) {
    margin: 5%;
  }
`;

export const Label = styled.h2`
margin: 0% 0% 7%;
color:#aa1fd6;
text-transform:uppercase;
font-size:22px;
`;

export const Description = styled.p`
font-size:18px;
margin-bottom: 8%;
`;


export const SectionHacklab = styled.div`
  padding: 6%;
`;

export const Decription = styled.div`
  text-align: center;
`;

export const TitleDecription = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  color: #14434b;
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

export const CopyDecription = styled.p`
  font-size: 20px;
  color: #161616;
  margin-top: 3%;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3%;
`;

export const ProjectNumber = styled.h2`
  font-size: 125px;
  text-transform: uppercase;
  color: #4b1e6d;
  @media (max-width: 768px) {
    font-size: 70px;
  }
`;

export const Girls = styled.p`
  font-size: 35px;
  color: #4b1e6d;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ProyectLabel = styled.h4`
  font-size: 30px;
  color: #14434b;
  margin-bottom: 4%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const CallToAction = styled.p`
  font-size: 24px;
  color: #161616;
  margin-bottom: 4%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

