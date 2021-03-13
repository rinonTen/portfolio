import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Article>
                <Footer.Title>
                    Let's work together
                </Footer.Title>
                <Footer.Text>Have a project you'd like to discuss?</Footer.Text>
                <Footer.ButtonContainer>
                    <Footer.Button>
                        Get in Touch
                    </Footer.Button>
                </Footer.ButtonContainer>
            </Footer.Article>
            <Footer.ContactContainer>
                <Footer.ContactGroup>
                    <Footer.Logo>
                        <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M-2-4h24v24H-2z"/><path d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z" fill="#FFF"/></g></svg>
                    </Footer.Logo>
                    <Link to="facebook">
                        <Footer.Span>
                            Email
                        </Footer.Span>
                    </Link>
                </Footer.ContactGroup>
                <Footer.ContactGroup>
                    <Footer.Logo>
                        
                    </Footer.Logo>
                    <Link to="twitter">
                        <Footer.Span>
                            On Twitter
                        </Footer.Span>
                    </Link>
                </Footer.ContactGroup>
                <Footer.ContactGroup>
                    <Footer.Logo>
                        Inst
                    </Footer.Logo>
                    <Link to="instagram">
                        <Footer.Span>
                            On instagram
                        </Footer.Span>
                    </Link>
                </Footer.ContactGroup>
            </Footer.ContactContainer>
        </Footer>
    )
}
