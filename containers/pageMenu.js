import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';

export default function PageMenu({showMenuFunction, showMenu}) {
    return (
        <Header.Nav>
            <Header.Lists>
                <Header.Item>
                    <Link to='/'>
                        About
                    </Link>
                </Header.Item>
                <Header.Item>
                    <Link to='/about'>
                        About me
                    </Link>
                </Header.Item>  
                <Header.Item>
                    <Link to='/works'>
                        Works
                    </Link>
                </Header.Item>  
            </Header.Lists>
        </Header.Nav>
    )
}
