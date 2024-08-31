import React, { useState } from 'react';
import styled from 'styled-components';
import activeHome from '../../assets/header/activeHome.svg';
import deActiveHome from '../../assets/header/deActiveHome.svg';
import activeSearch from '../../assets/header/activeSearch.svg';
import deActiveSearch from '../../assets/header/deActiveSearch.svg';
import activeHeart from '../../assets/header/activeHeart.svg';
import deActiveHeart from '../../assets/header/deActiveHeart.svg';
import activeUser from '../../assets/header/activeUser.svg';
import deActiveUser from '../../assets/header/deActiveUser.svg';
import logoutIcon from '../../assets/header/logoutIcon.svg';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  background-color: var(--background-color);
  border-bottom: 1px solid #d9d9d9;
  z-index: 1000;
`;

const NavArea = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Text = styled.div`
  font-size: 20px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => {
    return props.isActive ? '#f0f0f0' : 'transparent';
  }};

  &:hover {
    background-color: #f0f0f0;
  }
`;

const NavImage = styled.img`
  width: 22px;
  height: 22px;
`;

const LogOutImage = styled.img`
  width: 24px;
  height: 24px;
`;

export default function Header() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { name: 'home', activeIcon: activeHome, inactiveIcon: deActiveHome },
    { name: 'search', activeIcon: activeSearch, inactiveIcon: deActiveSearch },
    { name: 'heart', activeIcon: activeHeart, inactiveIcon: deActiveHeart },
    { name: 'user', activeIcon: activeUser, inactiveIcon: deActiveUser },
  ];

  return (
    <Container>
      <Text>HanQu</Text>
      <NavArea>
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.name}
              isActive={activeTab === item.name}
              onClick={() => {
                return setActiveTab(item.name);
              }}
            >
              <NavImage
                src={
                  activeTab === item.name ? item.activeIcon : item.inactiveIcon
                }
              />
            </NavItem>
          );
        })}
      </NavArea>
      <LogOutImage src={logoutIcon} />
    </Container>
  );
}
