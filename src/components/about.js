import React from 'react';
import {Heading, Container, Article, SubHeading, Text} from '../stylesComponents/about';

export default function About({children, restProps}) {
    return <Container {...restProps}>{children}</Container>
}

About.Article = function AboutArticle({children, restProps}) {
    return <Article {...restProps}>{children}</Article>
}
About.Heading = function AboutHeading({children, restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}
About.SubHeading = function AboutSubHeading({children, restProps}) {
    return <SubHeading {...restProps}>{children}</SubHeading>
}
About.Text = function AboutText({children, restProps}) {
    return <Text {...restProps}>{children}</Text>
}