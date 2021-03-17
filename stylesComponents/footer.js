import styled from 'styled-components';
const FooterEl = styled.footer``;

const Container = styled.div``;
const ContactContainer = styled.nav`
   padding-top: 50px;
   padding-bottom: 100px;
`;
  
const ContactGroup = styled.ul`
    display: flex;
    justify-content: space-between;
    max-width: 60%;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    @media(min-width: 1114px) {
        max-width: 18%;
    } 
`;

const Logo = styled.li``; 

const Link = styled.a`
    color: "#21243D";
`;

 export {
    FooterEl,
    Container,  
    ContactGroup,
    ContactContainer,
    Link,
    Logo, 
}