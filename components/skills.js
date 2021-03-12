import React from 'react';
import {
    Container,
    SectionContainer,
    Header,
    Title,
    Link,
    Article,
    LogoContainer,
    Logo,
    Heading,
    Text, 
} from '../stylesComponents/skills';

export default function Skills({ children, restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}


Skills.SectionContainer = function SkillsSectionContainer({ children, restProps }) {
    return <SectionContainer {...restProps}>{children}</SectionContainer>
}

Skills.Header = function SkillsHeader({ children, restProps }) {
    return <Header {...restProps}>{children}</Header>
}

Skills.Title = function SkillsTitle({ children, restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Skills.Link = function SkillsLink({href, children, restProps }) {
    return <Link href={href} {...restProps}>{children}</Link>
}

Skills.Article = function SkillsArticle({ children, restProps }) {
    return <Article {...restProps}>{children}</Article>
}

Skills.LogoContainer = function SkillsLogoContainer({ children, restProps }) {
    return <LogoContainer {...restProps}>{children}</LogoContainer>
}

Skills.Logo = function SkillsLogo({ src, restProps }) {
    return <Logo src={src} {...restProps} /> 
}
Skills.Heading = function SkillsHeading({ children, restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}
Skills.Text = function SkillsText({ children, restProps }) {
    return <Text {...restProps}>{children}</Text>
}
 