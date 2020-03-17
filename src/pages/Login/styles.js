import styled from "styled-components";

export const Container = styled.form`
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    label {
        font-size: 18px;
        margin-bottom: 5px;
    }

    input {
        border-radius: 4px;
        margin-bottom: 20px;
        width: 100%;
        height: 30px;
        font-size: 16px;
    }

    button {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        background-color: #FA423B;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
    }
`;

