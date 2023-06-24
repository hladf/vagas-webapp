import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    gap: 20px;
    background: ${({ theme }) => theme.colors.primaryLight};
`;

export const ProfileImg = styled.img`
    cursor: pointer;
    margin: 0 15px;
    width: ${(props) => props.width};

    @media (max-width: 540px) {
        width: ${(props) => props.width};
    }
`;

export const UserArea = styled.div`
    display: flex;
    align-items: center;
    cursor: default;

    div:first-child {
        flex-direction: column;
        margin-right: 15px;
    }

    span {
        display: flex;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;

    @media (max-width: 540px) {
        margin: 0;
    }
`;

export const Name = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 5px;

    @media (max-width: 540px) {
        display: none;
    }
`;
export const Email = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #d7d9d7;

    @media (max-width: 540px) {
        display: none;
    }
`;

export const OpenMenuBtn = styled.img`
    cursor: pointer;
    @media (max-width: 540px) {
        width: 15px;
        height: 15px;
    }
`;

export const HeaderLogo = styled.img`
    padding-left: 20px;

    @media (max-width: 540px) {
        width: 140px;
        height: 60px;
    }
`;
