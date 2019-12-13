import React from "react";
import Styled from 'styled-components';

const PersonContainer = Styled.div`
  border: 1px solid black;
  margin: 20px;
  width: 300px;
  display: inline-block;
`;

const PersonData = Styled.div`
  background-color: whitesmoke;
`;

function upperCaseWord(word) {
  return word === "n/a" ? "N/A" : word.charAt(0).toUpperCase() + word.slice(1)
}

const StarWarsPerson = ({personInfo}) => {
  return (
    <PersonContainer>
      <PersonData>Name: {personInfo.name}</PersonData>
      <PersonData>Hair Color: {upperCaseWord(personInfo.hair_color)}</PersonData>
      <PersonData>Eye Color: {upperCaseWord(personInfo.eye_color)}</PersonData>
    </PersonContainer>
  );
};

export default StarWarsPerson;