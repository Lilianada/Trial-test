import styled from "styled-components";

const Button = styled.button`
    background: var(--button-color);
    border: none;
    border-radius: 10px;
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--fontTwo);
    //margin-right: 1.5rem;
    padding: .9rem;
    cursor: pointer;
    width: 8rem;
    height: 3rem;

    :hover{
        background: var(--hover-color); 
        color: ${props => props.hover ? "#2f3032" : "#A6A6A6"};
    }

`
export default Button;



