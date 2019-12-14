import React from "react";
import Styled from 'styled-components';
import StarWarsPerson from "./StarWarsPerson";

const PeopleContainer = Styled.div`
  text-align: center;
`;

const StarWarsPeople = ({ peopleList }) => {
  return (
    <PeopleContainer>
      { peopleList.map(personInfo => <StarWarsPerson personInfo={personInfo} key={personInfo.name}/>) }
    </PeopleContainer>
  );
};

export default StarWarsPeople;