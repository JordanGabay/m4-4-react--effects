import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from './Item';
import cookieSrc from "../cookie.svg";
import { useState } from 'react';
import useInterval from '../hooks/use-interval.hook'

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  const [cookie, setCookie] = useState(100)
  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{cookie} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>0</strong> cookies per second
        </Indicator>
        <Button>
          <Cookie src={cookieSrc} onClick={() => setCookie(cookie + 1)} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {/* TODO: Add <Item> instances here, 1 for each item type. */}
       {items.map((item) => 
        <Item 
          key={item.id} 
          item = {item}
          numOwned={purchasedItems[item.id]} 
          handleClick={() => {
            if (cookie >= item.cost) {
              setCookie(cookie - item.cost);
              setPurchasedItems({
                ...purchasedItems, [item.id]: purchasedItems[item.id] + 1})
            } else window.alert('This it not enough cookies!!');
          }}
        /> ) 
      }
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
