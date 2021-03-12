import React from 'react';
import {
    Container,
    Group,
    Section,
    SectionContainer,
    SectionHeader,
    Title,
    Article,
    ImageContainer,
    Image,
    DescriptionContainer,
    WorkTitle,
    WorkDescription,
    Link,
    ButtonContainer,
    Button
} from '../stylesComponents/works';

export default function Works({ children, restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Works.Group = function WorksGroup({ children, restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Works.Section = function WorksSection({ children, restProps }) {
    return <Section {...restProps}>{children}</Section>
}
Works.SectionContainer = function WorksSectionContainer({ children, restProps }) {
    return <SectionContainer {...restProps}>{children}</SectionContainer>
}
Works.SectionHeader = function WorksSectionHeader({ children, restProps }) {
    return <SectionHeader {...restProps}>{children}</SectionHeader>
}
Works.Title = function WorksTitle({ children, restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Works.Article = function WorksArticle({ children, restProps }) {
    return <Article {...restProps}>{children}</Article>
}
Works.ImageContainer = function WorksImageContainer({ children, restProps }) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>
}
Works.Image = function WorksImage({ src, restProps }) {
    return <Image src={src} {...restProps} />
}
Works.Group = function WorksGroup({ children, restProps }) {
    return <Group {...restProps}>{children}</Group>
}
Works.DescriptionContainer = function WorksDescriptionContainer({ children, restProps }) {
    return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>
}

Works.WorkDescription = function WorksWorkDescription({ children, restProps }) {
    return <WorkDescription {...restProps}>{children}</WorkDescription>
}
Works.WorkTitle = function WorksWorkTitle({ children, restProps }) {
    return <WorkTitle {...restProps}>{children}</WorkTitle>
}

Works.Link = function WorksLink({href, children, restProps }) {
    return <Link href={href} {...restProps}>{children}</Link>
}

Works.ButtonContainer = function WorksButtonContainer({ children, restProps }) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Works.Button = function WorksButton({ children, restProps }) {
    return <Button {...restProps}>{children}</Button>
}