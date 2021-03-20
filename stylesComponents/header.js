import styled from 'styled-components';

const Container = styled.header` 
    a {
        text-decoration: none;
    }
`;

const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px; 

    @media(min-width: 1114px) {
        padding-top: 27px;
        padding-bottom: 27px;
        padding-left: 48px;
        padding-right: 120px;
    }
`;
const Group = styled.div`
    display: flex;
`;
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 4px;
    margin-right: 10px;
`;

const Nav = styled.nav`
    position: absolute; 
    display: flex;
    justify-content: center;
    background-color: #3333;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 58px;
    
    &:last-of-type {
        display: none;
    }

    @media(min-width: 1114px) {
        display: block;
        position: unset;
        width: 26%;
        height: unset;
        background-color: unset;
        padding-top: 0;
        &:first-of-type {
            display: none;
        }

        &:last-of-type {
        display: block;
        }
    }
`;

const DisplayMenuButton = styled.button`
    font-size: 30px; 
    margin-top: 12px;
    margin-right: 16px;
    position: absolute;
    top: 12px;
    right: 2px;
    z-index: 1;
    background-color: unset;
    border: none;
    cursor: pointer;
    outline: none;
    color: #21243D;

    @media(min-width: 1114px) {
        display: none;
    }
`;

const OpenMenu = styled.img`
    width: 30px;
`;

const Lists = styled.ul`
    background-color: gray;
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;

    @media(min-width: 1114px) { 
        flex-direction: row;
        justify-content: space-between;
        margin-top: 12px;
        width: unset;
        height: unset;
        background-color: unset;
    }
`;
const Item = styled.li`
    a { 
        font-style: normal; 
        font-weight: 600;
        font-size: 20px;
        line-height: 29px;
        text-align: right;
        color: #000000;
        transition: color ease .3s;

        @media(min-width: 1114px) { 
            font-weight: 500;
        }
    }

    a:hover {
        color: #FF6464;
        text-decoration: underline;
    }

    a:focus {
        color: #FF6464;
    }
`;

export {
    Container,
    HeadingContainer,
    Group,
    Avatar, 
    OpenMenu,
    Nav,
    DisplayMenuButton,
    Lists,
    Item
}