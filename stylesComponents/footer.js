import styled from 'styled-components';
const FooterEl = styled.footer`
    background-color: #191a1d;
    color: #5e5e5e;
`;

const Container = styled.div`
    padding: 16px;
    padding-top: 50px;
    padding-bottom: 50px;

    @media(min-width: 1114px) {
        max-width: 1114px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        padding-top: 100px;
        padding-bottom: 100px;
    }
`;
const Article = styled.article`
`;
const Title = styled.h2`
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    @media(min-width: 1114px) {
        font-size: 48px; 
        margin-bottom: 28px;
    }
`;
const Text = styled.p`
    font-size: 22px;
    color: rgba(255,255,255,.5);

    @media(min-width: 1114px) {
        font-size: 28px; 
        margin-bottom: 40px;
    }
`;
const ButtonContainer = styled.div`
    margin-top: 32px;
`;
const Button = styled.button`
    font-family: "Rubik",sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: #fff;
    padding: 20px 32px;
    display: inline-block;
    cursor: pointer;
    border: transparent;
    border-radius: 1000px;
    background: #4b6cc1;
    transform: scale(1.075);

    &:hover {
        transform: scale(1.075);
        box-shadow: inset 0 0 0 2px #4b6cc1;
        background: none;
    }
`;
const ContactGroup = styled.div`
    display: flex;
    flex-direction: row; 
    padding-top: 9px;
    padding-bottom: 9px;
    
    &:nth-of-type(1) {
        padding-top: 32px;
    }

    &:last-of-type {
        padding-bottom: 32px;
    }

    a {
        color: rgba(255,255,255,.5);
        text-decoration: none;
        text-transform: uppercase;
        transition: color ease .5s;
    }

    a:hover {
        color: #fff;
    }
`;
const ContactContainer = styled.div`
    @media(min-width: 1114px) {
        margin-top: 32px;
    }
`;
const Logo = styled.figure`
    margin: 0;
`;
const Span = styled.span`
    font-size: 16px;
    margin-left: 9px;
    @media(min-width: 1114px) {
        font-size: 24px; 
        font-weight: 500;
    }
`;


export {
    FooterEl,
    Container,
    Article,
    Title,
    Text,
    ButtonContainer,
    Button,
    ContactGroup,
    ContactContainer,
    Logo,
    Span
}