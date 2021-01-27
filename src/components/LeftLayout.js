import React from "react";
import styled from "styled-components";

const Content = styled.div`
  height: 100vh;
  position: relative;
`;

const Background = styled.div`
  display: flex;
  height: 100%;
`;

const Left = styled.div`
  background: black;
  width: 30%;
  position: relative;
  color: white;
  display: flex;

  align-items: center;

  ::before {
    content: "";
    position: absolute;
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
  }
`;

const Right = styled.div`
  background: no-repeat center url("${(props) => props}");
  background-size: cover;
  z-index: -1;
  width: 70%;
`;

const ContentContainer = styled.div`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
`;

const LeftLayout = ({ children, backdropImage }) => {
  return (
    <Content>
      <Background>
        <Left>{children}</Left>
        <Right
          // conditionalBgGradient={gradientChange}
          style={{ backgroundImage: `url(${backdropImage})` }}
        ></Right>
      </Background>
      <ContentContainer></ContentContainer>
    </Content>
  );
};

export default LeftLayout;
