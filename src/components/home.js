import React from 'react';
import {
    Container,
    Article,
    SectionContainer,
    ImageContainer,
    ImgShadow,
    Profile,
    Header,
    Heading,
    Text,
    ResumeButton
} from '../stylesComponents/home';

export default function Home({ children, restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.SectionContainer = function HomeSectionContainer({ children, restProps }) {
    return <SectionContainer {...restProps}>{children}</SectionContainer>
}

Home.Article = function HomeArticle({ children, restProps }) {
    return <Article {...restProps}>{children}</Article>
}
Home.Header = function HomeHeader({ children, restProps }) {
    return <Header {...restProps}>{children}</Header>
}
Home.Heading = function HomeHeading({ children, restProps }) {
    return <Heading {...restProps}>{children}</Heading>
}
Home.Text = function HomeText({ children, restProps }) {
    return <Text {...restProps}>{children}</Text>
}
Home.ResumeButton = function HomeResumeButton({ children, restProps }) {
    return <ResumeButton {...restProps}>{children}</ResumeButton>
}

Home.ImageContainer = function HomeImageContainer({ children, restProps }) {
    return <ImageContainer {...restProps}>{children}</ImageContainer>
}

Home.ImgShadow = function HomeImgShadow({ children, restProps }) {
    return <ImgShadow {...restProps}>{children}</ImgShadow>
}

Home.Profile = function HomeProfile({ src, restProps }) {
    return <Profile src={src} {...restProps} />  
}