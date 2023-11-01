import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-around;
`;

export const HeroImage = styled.img`
  height: 250px;
  border-radius: 4px;
  box-shadow: 3px 4px 8px 1px rgba(140, 140, 140, 0.9);
  -webkit-box-shadow: 3px 4px 8px 1px rgba(140, 140, 140, 0.9);
  -moz-box-shadow: 3px 4px 8px 1px rgba(140, 140, 140, 0.9);
`;

export const InnerText = styled.div`
  font-size: 13px;
  width: 40%;
  font-family: Avenir;
`;

