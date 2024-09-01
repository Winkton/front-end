import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import activeHome from '../../assets/header/activeHome.svg';
import deActiveHome from '../../assets/header/deActiveHome.svg';
import activeSearch from '../../assets/header/activeSearch.svg';
import deActiveSearch from '../../assets/header/deActiveSearch.svg';
import activeHeart from '../../assets/header/activeHeart.svg';
import deActiveHeart from '../../assets/header/deActiveHeart.svg';
import activeUser from '../../assets/header/activeUser.svg';
import deActiveUser from '../../assets/header/deActiveUser.svg';
import logoutIcon from '../../assets/header/logoutIcon.svg';
import Logo from '../../assets/Logo.svg';
import userState from '../../store/userState';

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

const LogoImage = styled.img`
  width: 60px;
  height: 40px;
`;

function Header() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const setUserInfo = useSetRecoilState(userState);

  const navItems = [
    {
      name: 'home',
      activeIcon: activeHome,
      inactiveIcon: deActiveHome,
      path: '/main',
    },
    {
      name: 'search',
      activeIcon: activeSearch,
      inactiveIcon: deActiveSearch,
      path: '/search',
    },
    {
      name: 'heart',
      activeIcon: activeHeart,
      inactiveIcon: deActiveHeart,
      path: '/favorites',
    },
    {
      name: 'user',
      activeIcon: activeUser,
      inactiveIcon: deActiveUser,
      path: '/profile',
    },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find((item) => {
      return item.path === currentPath;
    });
    if (activeItem) {
      setActiveTab(activeItem.name);
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    setActiveTab(item.name);
    navigate(item.path);
  };

  const handleLogout = () => {
    setUserInfo({
      userId: '',
      username: '',
      country: '',
    });
    navigate('/');
  };

  return (
    <Container>
      <LogoImage src={Logo} />
      <NavArea>
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.name}
              isActive={activeTab === item.name}
              onClick={() => {
                return handleNavClick(item); // 화살표 함수 블록 문으로 return 추가
              }}
            >
              <NavImage
                src={
                  activeTab === item.name ? item.activeIcon : item.inactiveIcon
                }
                alt={`${item.name} icon`}
              />
            </NavItem>
          );
        })}
      </NavArea>
      <LogOutImage src={logoutIcon} alt="logout icon" onClick={handleLogout} />
    </Container>
  );
}

export default Header;
