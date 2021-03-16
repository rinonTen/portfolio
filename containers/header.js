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

                </Header.DisplayMenuButton>
                {showMenu && <PageMenu />}
                <PageMenu />
            </Header.HeadingContainer>
        </Header>
    )
}
