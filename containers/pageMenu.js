import React from 'react'; 
import { Link } from 'react-router-dom';
import { Header } from '../components';

export default function PageMenu({showMenuFunction, homeActive, aboutActive, worksActive }) { 
    
        return (
        <Header.Nav>
            <Header.Lists>
                <Header.Item onClick={showMenuFunction}>
                    <Link className={homeActive} onClick={showMenuFunction} to='/'>
                        Home
                    </Link>
                </Header.Item>
                <Header.Item>
                    <Link to='/about' className={aboutActive} onClick={showMenuFunction}>
                        About me
                    </Link>
                </Header.Item>  
                <Header.Item>
                    <Link to='/works' className={worksActive} onClick={showMenuFunction}>
                        Works
                    </Link>
                </Header.Item>  
            </Header.Lists>
        </Header.Nav>
    )
}
