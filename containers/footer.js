import React from 'react';
import { Footer } from '../components';

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.ContactContainer>
                <Footer.ContactGroup> 
                    <Footer.Logo>
                        <Footer.Link href="mailto:rinon.ten@onja.org">
                            Email me
                        </Footer.Link>
                    </Footer.Logo>
                    <Footer.Logo>
                        <Footer.Link href="https://github.com/ganamavo">
                           Github
                        </Footer.Link>
                    </Footer.Logo> 
                </Footer.ContactGroup>
            </Footer.ContactContainer>
        </Footer>
    )
}
