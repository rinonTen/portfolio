import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';

export default function PageMenu({showMenuFunction }) { 
    
    return (
        <Header.Nav>
            <Header.Lists>
                <Header.Item onClick={showMenuFunction}>
                    <Link to='/'>
                        Home
                    </Link>
                </Header.Item>
                <Header.Item>
                    <Link to='/about' onClick={showMenuFunction}>
                        About me
                    </Link>
                </Header.Item>  
                <Header.Item>
                    <Link to='/works' onClick={showMenuFunction}>
                        Works
                    </Link>
                </Header.Item>  
            </Header.Lists>
        </Header.Nav>
    )
}
