import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  width: 500px;
  padding: 10px 0;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const Name = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  padding: 5px;
`;

const Description = styled.p`
  color: grey;
`;

const NumOwned = styled.p`
  font-size: 2em;
`;

const Item = ({ item: { name, cost, value }, numOwned, handleClick }) => {
  return (
    <ItemWrapper>
      <Name>{name}</Name>
      <Description>
        Cost: {cost} cookies. Produces {value} cookie(s)/second
      </Description>
      <NumOwned>{numOwned}</NumOwned>
    </ItemWrapper>
  );
};

export default Item;
