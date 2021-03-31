import styled from 'styled-components';

const Heading = styled.h2`
    font-weight: bold;
    font-size: 30px;
    line-height: 60px;
    color: #21243D;
    margin: 0;
    margin-bottom: 18px;
    @media(min-width: 1114px) {
        font-size: 44px;
        line-height: 60px; 
        margin-bottom: 55px;
    }
`;
const Container = styled.div`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 18px;
    padding-right: 18px;

    @media(min-width: 1114px) {
        padding-left: 0;
        padding-right: 0;
    }
`;
const Article = styled.article`
    padding-bottom: 16px;
    border-bottom: 1px solid #E0E0E0;
`;
const SubHeading = styled.h3`
    font-weight: 500;
    font-size: 26px;
    line-height: 38px;
    color: #21243D;
    @media(min-width: 1114px) {
        font-size: 30px;
        line-height: 44px; 
    }
`;
const Text = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 23px; 
    color: #21243D;
`;

export {Heading, Container, Article, SubHeading, Text}