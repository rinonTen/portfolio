import React, { useContext } from 'react';
import { Context } from '../contexts/globalContext';
import { Header } from '../components';
import PageMenu from './pageMenu';

export default function HeaderContainer() {
    const { showMenu, setShowMenu } = useContext(Context);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <Header>
            <Header.HeadingContainer>
                <Header.Group>
                    <Header.Avatar src="./images/my-image.jpg" alt="my image" />
                    <Header.Heading>
                        Rinon
                    </Header.Heading>
                </Header.Group>
                <Header.DisplayMenuButton onClick={toggleMenu}></Header.DisplayMenuButton>
                {showMenu && <PageMenu />}
                <PageMenu />
            </Header.HeadingContainer>
        </Header>
    )
}
