import styled from 'styled-components';

const Container = styled.section` 
    margin-top: 32px;
    background-color: #EDF7FA;
    &.works_section {
    background-color: unset;
    }
    @media(min-width: 1114px) {
        margin-top: 0;

        .showAllWorks {
            article:not(:nth-of-type(1)) {
                padding-top: 43px;
                padding-bottom: 43px;
            }

            article:nth-of-type(1) {
                padding-bottom: 47px;
            }

            article:last-of-type { 
                padding-top: 35px;
                padding-bottom: 53px;
            }

        }
    }
`;
const Group = styled.div``;
const Section = styled.div`
    padding-bottom: 0;
    @media(min-width: 1114px) {
        padding-bottom: 58px;
    }
`;
const SectionContainer = styled.div`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px; 
    .workspage_heading {
        font-weight: bold;
        font-size: 30px;
        line-height: 60px; 
        color: #21243D;
        text-align: start;
        margin-bottom: 12px;
    }

    @media(min-width: 1114px) {
        padding-left: 0;
        padding-right: 0;

        .workspage_heading {
            font-weight: 900;
            font-size: 44px;
            line-height: 60px;
        }
    }
`;
const SectionHeader = styled.header``;
const Title = styled.h2`
    font-weight: normal;
    font-size: 18px;
    line-height: 60px; 
    color: #21243D;
    margin-top: 0;
    padding-top: 16px;
    text-align: center;

    @media(min-width: 1114px) {
        font-size: 22px;
        margin-bottom: 0;
        padding-top: 32px;
        text-align: unset;
    }
`;
const Article = styled.article`
    padding-bottom: 10px; 
    border-bottom: 1px solid #E0E0E0;

    &:not(:nth-of-type(1)) {
        padding-top: 22px;
    }
    
    @media(min-width: 1114px) {
        display: grid;
        grid-template-columns: 36% auto; 
        column-gap: 18px;
        padding-top: 31px;
         
    }
`;
const ImageContainer = styled.div`
`;
const Image = styled.img`
    margin-right: 16px; 
    width: 100%;
    border-radius: 5px; 
    @media(min-width: 1114px) {
        height: 100%;
        margin-right: 0;
        &:hover {
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 15px 1px; 
        transition: transform 0.2s ease-out; 
        transform: scale(1.02);
    }
    }
`;
const DescriptionContainer = styled.div`
    position: relative;

    p:nth-of-type(2) { 
            margin-top: 16px;
            margin-bottom: 16px;
    }
    
  
`;
const WorkTitle = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 30px; 
    color: #21243D;
    margin-top: 15px;
    margin-bottom: 16px;

    @media(min-width: 1114px) {
        font-weight: bold;
        font-size: 30px;
        line-height: 44px;
        line-height: unset; 
        color: #21243D;
        margin: 0;
        margin-bottom: 16px;
    }
`;
 
const Link = styled.a``
const WorkDescription = styled.p`  
    font-weight: normal;
    font-size: 16px;
    line-height: 23px; 
    color: #21243D;
    margin: 0;
    &:last-of-type {
        margin-bottom: 16px;
    }
`;
const ButtonContainer = styled.div`
    width: 90%;
    display: flex; 
    margin-bottom: 23px;
    a:nth-of-type(2) button {
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        color: #8695A4;
        background-color: transparent;
        padding-top: 2px;

        @media(min-width: 1114px) {
            font-size: 20px; 
            line-height: 29px; 
            padding-top: 0;
        }
    }

    @media(min-width: 1114px) {
        width: 50%; 
        margin-bottom: 17px;
    }
`;
const Button = styled.button`
    background-color: #142850;
    font-weight: 900;
    font-size: 16px; 
    color: #FFFFFF;
    border-radius: 16px; 
    padding: 3px;
    margin-right: 12px;
    padding-left: 13px;
    padding-right: 13px;
    border: transparent;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
 
    &:hover {
        opacity: 0.5;
        color: red;
    }

`;
const Tech = styled.span` 
    margin-right: 16px;

`;
export {
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
    Tech
}
