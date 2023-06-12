import styled from "styled-components";

export const Container = styled.div`
    display:flex;
   
`
export const Border = styled.span`
    border: 1px solid #C5C7C5;
    width: 90%;
`

export const PopUp = styled.div`
    background: #046AD0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    position: absolute;
    z-index: 1;
    right: 5px;

    @media (max-width: 480px) {
        width: 100%;
    }
`

export const MenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    color: #FFFFFF;
    font-size: 18px;
    padding-top: 10px;
    

    li {
        margin-right: auto;
        display: flex;
        padding: 15px;
        cursor: pointer;
        &:hover {
            background-color: #0009;
        }
    }

    a {
        display: flex;
    }

    .jobs {
        width: 100%;
    }
    
    span {
        margin-right: 10px;
    }

    img {
        margin-right: 10px;
    }
`