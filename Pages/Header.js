import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="page_header">
        <div className="page_container header_container">
            <h1 className="page_heading">
                Rinon Tendrinomena
            </h1>
            <button className="open_menu_btn" type="button">Open</button>
            <nav className="header_nav">
                <ul className="nav_tabs">
                    <li className="nav_tabs_list">
                        <Link className="nav_tabs_link" to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="nav_tabs_list">
                        <Link to="/works" className="nav_tabs_link">Works</Link>
                    </li>
                    <li className="nav_tabs_list">
                        <Link to="/contact" className="nav_tabs_link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
