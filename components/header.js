import React from 'react'
import {
    Container,
    HeadingContainer,
    Group,
    Avatar,
    Heading,
    Nav,
    DisplayMenuButton,
    Lists,
    Item
} from '../stylesComponents/header';

export default function Header({children, restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Header.HeadingContainer = function HeaderHeadingContainer({children, restProps}) {
    return <HeadingContainer {...restProps}>{children}</HeadingContainer>
}

Header.Heading = function HeaderHeading({children, restProps}) {
    return <Heading {...restProps}>{children}</Heading>
}

Header.Group = function HeaderGroup({children, restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.Avatar = function HeaderAvatar({src, restProps}) {
    return <Avatar src={src} {...restProps} />
}

Header.Nav = function HeaderNav({children, restProps}) {
    return <Nav {...restProps}>{children}</Nav>
}

Header.DisplayMenuButton = function HeaderDisplayMenuButton({onClick, children, restProps}) {
    return <DisplayMenuButton onClick={onClick} {...restProps}>{children}</DisplayMenuButton>
}

Header.Lists = function HeaderLists({children, restProps}) {
    return <Lists {...restProps}>{children}</Lists>
}

Header.Item = function HeaderItem({children, restProps}) {
    return <Item {...restProps}>{children}</Item>
}

  