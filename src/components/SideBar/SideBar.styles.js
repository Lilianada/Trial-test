import styled from "styled-components"

export const Bar = styled.div`
    background: #fffbef;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 2rem;
    width: fit-content;
    @media screen and (min-width: 992px) {
        margin-bottom: none;
        margin-left: 1rem;
    }
`

export const Head = styled.p`
    margin-bottom: .75rem;
    font-weight: 500;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: var(--font-sixteen);
`

export const InputForms = styled.div`
    margin: .75rem 1.75rem;
`
export const Input= styled.input`
    position: relative;
    display: inline-flex;
    padding: .75rem;
    width: 17rem;
    border-radius: 10px;
    transition: .4s ease-in-out;
    outline: none;
    border: 1px solid var(--grey-color);
    font-size: var(--font-fourteen);
    font-weight: 400;
    margin-bottom: 1rem;

    ::placeholder{
        color: #0000;

    }

    :focus{
        border-color: blue;
    }

`
export const Buttons = styled.div`
    display: flex;
    width: 17rem;
    justify-content: space-between;
    margin: 1rem 2rem;
`
export const TextBox = styled.div`
    width: 272px;
    height: 100px;
    margin: 1.75rem;
    padding: 1.5rem;
    font-size: 14px;
    border: 1px solid var(--grey-color);
    border-radius: 10px;
    background-color: #fff;
`
export const AutoWrapper = styled.div`
    margin: 1rem 2rem;
`