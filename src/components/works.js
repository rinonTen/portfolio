import React from 'react'
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
  Button,
  Tech,
} from '../stylesComponents/works'

export default function Works({ className, children, restProps }) {
  return (
    <Container className={className} {...restProps}>
      {children}
    </Container>
  )
}

Works.Group = function WorksGroup({ children, restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Works.Section = function WorksSection({ children, restProps }) {
  return <Section {...restProps}>{children}</Section>
}
Works.SectionContainer = function WorksSectionContainer({
  className,
  children,
  restProps,
}) {
  return (
    <SectionContainer className={className} {...restProps}>
      {children}
    </SectionContainer>
  )
}
Works.SectionHeader = function WorksSectionHeader({ children, restProps }) {
  return <SectionHeader {...restProps}>{children}</SectionHeader>
}
Works.Title = function WorksTitle({ className, children, restProps }) {
  return (
    <Title className={className} {...restProps}>
      {children}
    </Title>
  )
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
Works.DescriptionContainer = function WorksDescriptionContainer({
  children,
  restProps,
}) {
  return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>
}

Works.WorkDescription = function WorksWorkDescription({ children, restProps }) {
  return <WorkDescription {...restProps}>{children}</WorkDescription>
}
Works.WorkTitle = function WorksWorkTitle({ children, restProps }) {
  return <WorkTitle {...restProps}>{children}</WorkTitle>
}

Works.Link = function WorksLink({ href, children, restProps }) {
  return (
    <Link href={href} target='_blank' {...restProps}>
      {children}
    </Link>
  )
}

Works.ButtonContainer = function WorksButtonContainer({ children, restProps }) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Works.Button = function WorksButton({ children, restProps }) {
  return <Button {...restProps}>{children}</Button>
}

Works.Tech = function WorksTech({ children, restProps }) {
  return <Tech {...restProps}>{children}</Tech>
}
