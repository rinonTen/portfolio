import React, { useContext } from 'react';
import { Context } from '../contexts/globalContext';
import { Header } from '../components';
import PageMenu from './pageMenu';
import { Link } from 'react-router-dom';

export default function HeaderContainer() {
    const { showMenu, setShowMenu } = useContext(Context);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <Header>
            <Header.HeadingContainer>
                <Link to="/"> 
                </Link>
                <Header.DisplayMenuButton onClick={toggleMenu}>
                {!showMenu ?
                    <Header.OpenMenu src="./images/icon_menu.svg" alt="Open menu icon"/>
                    : "X"}
                </Header.DisplayMenuButton>
                {showMenu && <PageMenu showMenuFunction={toggleMenu} showMenu={showMenu} setShowMenuFunction={setShowMenu} />}
                <PageMenu />
            </Header.HeadingContainer>
        </Header>
    )
}
