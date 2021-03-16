import styled from 'styled-components';

const Container = styled.main``;
const SectionContainer = styled.section`
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    padding: 16px;
    padding-bottom: 58px;
    & div { 
        text-align: center;
            img { 
                display: initial;
                max-width: 40%;
                border-radius: 50%;
                margin-top: 40px; 
                max-width: 40%;
                border-radius: 50%; 
            }
    }

  @media(min-width: 1114px) { 
         display: flex;
         justify-content: space-between;
         padding-top: 100px;
         padding-bottom: 71px;

         & div {
        display: none;
    }
    } 
`;
const Article = styled.article`
    text-align: center;
    @media(min-width: 1114px) {
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
    /* background: #EDF7FA;
    border-radius: 50%;
    width: fit-content; */
    @media(min-width: 1114px) {
        text-align: center;
    }
`;
const Profile = styled.img`
    /* display: none; */
    
    @media(min-width: 1114px) {
        display: initial;
        max-width: 40%;
        border-radius: 50%;
        margin-top: 40px;
        margin-left: 70px;
    }
`;
const Header = styled.header``;
const Heading = styled.h2`
    font-family: Heebo;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px; 
    text-align: center; 
    color: #21243D;

    @media(min-width: 1114px) { 
        width: 350px;
        font-size: 44px;
        line-height: 60px;  
        text-align: unset;
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
        width: 497px;
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
    Heading,
    Text,
    ResumeButton
}