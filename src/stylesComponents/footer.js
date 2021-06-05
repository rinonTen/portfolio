import styled from 'styled-components';
const FooterEl = styled.footer``;

const Container = styled.div``;
const ContactContainer = styled.nav`
   padding-top: 50px;
   padding-bottom: 100px;
`;
  
const ContactGroup = styled.ul`
    display: flex;  
    justify-content: center;
    column-gap: 35px;
    padding: 0;
     
`;

const Logo = styled.li``; 

const Link = styled.a`
     color: #21243D;

     &:hover {
         color: #FF6464;
     }
`;

const Icon = styled.img``;
 export {
    FooterEl,
    Container,  
    ContactGroup,
    ContactContainer,
    Link,
    Logo, 
    Icon
}