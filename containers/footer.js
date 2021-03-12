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
                        fb
                    </Footer.Logo>
                    <Link to="facebook">
                        <Footer.Span>
                            On facebook
                        </Footer.Span>
                    </Link>
                </Footer.ContactGroup>
                <Footer.ContactGroup>
                    <Footer.Logo>
                        twt
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
