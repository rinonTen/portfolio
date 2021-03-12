import styled from 'styled-components';

const Container = styled.section`
    background-color: #EDF7FA;
    padding-top: 16px;
    padding-bottom: 32px;
`;
const SectionContainer = styled.div`
    max-width: 1114px;
    margin-left: 16px;
    margin-right: 16px;

    @media(min-width: 1114px) {
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 16px;
        padding: 0;
    }
`;
const Header = styled.header`
    grid-column: 1/6;
`;
const Title = styled.h2``;
const Link = styled.a``;
const Article = styled.article`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #ffffff;
    margin-bottom: 32px;
    padding: 16px;
    border-radius: 5px;
    &:first-of-type {
        grid-column: 1/3;
        grid-row: 2;
    }

    &:nth-of-type(2) { 
        grid-row: 2;
    }

    &:nth-of-type(3) {
        grid-column: 1;
        grid-row: 3;
    }
    &:nth-of-type(4) {
        grid-column: 2;
        grid-row: 3;
    }
    &:nth-of-type(5) {
        grid-column: 3;
        grid-row: 3;
    } 
    
`;

const LogoContainer = styled.div``;
const Logo = styled.img`
    width: 70px;
`;
const Heading = styled.h3``;

const Text = styled.p``; 

export {
    SectionContainer,
    Container,
    Header,
    Title,
    Link,
    Article,
    LogoContainer,
    Logo,
    Heading,
    Text, 
}
