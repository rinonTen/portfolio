import React from 'react';
import {
    FooterEl,
    Container,
    Article,
    Title,
    Text,
    ButtonContainer,
    Button,
    ContactGroup,
    ContactContainer,
    Logo,
    Span
} from '../stylesComponents/footer';

export default function Footer({children, ...restProps}) {
    return (
        <FooterEl>
            <Container {...restProps}>{children}</Container>
        </FooterEl>
    )
}

Footer.Article = function FooterArticle({children, restProps}) {
    return <Article {...restProps}>{children}</Article>
}

Footer.Title = function FooterTitle({children, restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({children, restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Footer.ButtonContainer = function FooterButtonContainer({children, restProps}) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Footer.Button = function FooterButton({children, restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Footer.ContactGroup = function FooterContactGroup({children, restProps}) {
    return <ContactGroup {...restProps}>{children}</ContactGroup>
}

Footer.ContactContainer = function FooterContactContainer({children, restProps}) {
    return <ContactContainer {...restProps}>{children}</ContactContainer>
}

Footer.Logo = function FooterLogo({children, restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}

Footer.Span = function FooterSpan({children, restProps}) {
    return <Span {...restProps}>{children}</Span>
}