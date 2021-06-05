import React from 'react';
import {
    FooterEl,
    Container,  
    ContactGroup,
    ContactContainer,
    Link,
    Logo, 
    Icon
} from '../stylesComponents/footer';

export default function Footer({children, ...restProps}) {
    return (
        <FooterEl>
            <Container {...restProps}>{children}</Container>
        </FooterEl>
    )
}

Footer.ContactGroup = function FooterContactGroup({children, restProps}) {
    return <ContactGroup {...restProps}>{children}</ContactGroup>
}

Footer.ContactContainer = function FooterContactContainer({children, restProps}) {
    return <ContactContainer {...restProps}>{children}</ContactContainer>
}
Footer.Link = function FooterLink({href, children, restProps}) {
    return <Link href={href} {...restProps}>{children}</Link>
}

Footer.Logo = function FooterLogo({children, restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}
 
Footer.Icon = function FooterIcon({src, restProps}) {
    return <Icon {...restProps} src={src}/>
}