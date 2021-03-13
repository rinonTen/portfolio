import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';

export default function PageMenu() {
    return (
        <Header.Nav>
            <Header.Lists>
                <Header.Item>
                    <Link to='/'>
                        About
                    </Link>
                </Header.Item>
                <Header.Item>
                    <Link to='/works'>
                        Works
                    </Link>
                </Header.Item> 
                <Header.Item>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </Header.Item>
            </Header.Lists>
        </Header.Nav>
    )
}
