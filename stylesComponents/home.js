import styled from 'styled-components';

const Container = styled.main``;

const SectionContainer = styled.section`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    padding-bottom: 58px;
    & div { 
        width: fit-content;
        height: 215px;
        background-image: url("../images/ellipse-mobile.png");
        background-repeat: no-repeat;
        background-position-y: 85%;
        background-position-x: 39%;
        text-align: center;
            img {  
                display: initial; 
                border-radius: 50%;
                margin-top: 20px;  
            }
             @media(min-width: 1114px) { 
                width: unset;
                height: unset;
                background-image: url("../images/ellipse-desktop.png");
                background-repeat: no-repeat;
                background-position-y: 31%;
                background-position-x: 78%;
                padding-left: 10px;
                 text-align: left;
                }
    }

  @media(min-width: 1114px) { 
         display: flex; 
         flex-direction: row;
         column-gap: 100px;
         padding-top: 100px;
         padding-bottom: 71px;

         & div {
        display: none;
    }
    } 
`;
const ImgShadow = styled.div`
    width: 284px; 
`;
const Article = styled.article`
    text-align: center;
    @media(min-width: 1114px) {
        max-width: 58%;
        text-align: unset;
    }

    & ~ div {
        display: none;

        @media(min-width: 1114px) {
            display: block;
        }
    }
`;

const ImageContainer = styled.div`
    @media(min-width: 1114px) {
        text-align: left;
    }
`;
const Profile = styled.img` 
    width: 174px;
    height: 180px;

    @media(min-width: 1114px) {
        width: 243px;
        height: 243px;
        display: initial;
        max-width: 100%;
        border-radius: 50%;
    }
`;
const Header = styled.header``;
const Heading = styled.h2`
    max-width: 95%;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px; 
    text-align: center; 
    margin-left: auto;
    margin-right: auto;
    color: #21243D;

    @media(min-width: 1114px) { 
        max-width: 415px;
        font-size: 44px;
        line-height: 60px;  
        text-align: unset;
        margin-left: unset;
        margin-right: unset;
    } 
`;
const Text = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    text-align: center; 
    margin-bottom: 27px;
    color: #21243D;

    @media(min-width: 1114px) { 
        text-align: unset; 
        margin-bottom: 38px;
    }
`;
const ResumeButton = styled.button`
    background-color: #FF6464;
    font-family: Heebo;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #FFFFFF;
    padding: 16px;
    padding-left: 32px;
    padding-right: 32px;
    border: transparent;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    transition: all ease .3s;

    &:hover {
        background-color: lightpink;
        transform: scale(1.075);
        box-shadow: inset 0 0 0 2px #4b6cc1;
    }
`;

export {
    Container,
    SectionContainer,
    Article,
    ImageContainer,
    Profile,
    Header,
    ImgShadow,
    Heading,
    Text,
    ResumeButton
}