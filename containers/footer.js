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
                            github
                        </Footer.Link>
                    </Footer.Logo> 
                    <Footer.Logo>
                        <Footer.Link href="https://onja.org">
                           See organisation
                        </Footer.Link>
                    </Footer.Logo> 
                </Footer.ContactGroup>
            </Footer.ContactContainer>
        </Footer>
    )
}
