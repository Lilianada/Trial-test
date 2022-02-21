import { useState } from "react"
import styled from "styled-components"
import Button from "./Button"
const Bar = styled.div`
    
`

const Head = styled.h3`
    margin-bottom: .75rem;
`
const InputForms = styled.form`
    padding: .75rem 2rem;
`
const Input= styled.input`
    position: relative;
    display: inline-flex;
    padding: .75rem;
    width: 18rem;
    border-radius: 10px;
    transition: .4s ease-in-out;
    outline: none;
    border: 1px solid gray;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 1rem;

    ::placeholder{
        color: #0000;

    }

    :focus{
        border-color: blue;
    }

`
const Buttons = styled.div`
    display: flex;
    margin: 1rem 2rem;
`
  
export default function SideBar () {
    const [inputValue, setInputValue] = useState("")
    const [inputValueTwo, setInputValueTwo] = useState("")

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleUserInputTwo = (e) => {
        setInputValueTwo(e.target.value);
    };

    const resetInputField = () => {
        setInputValue("");
        setInputValueTwo("");
    };
    

    return(
        <Bar>
            <InputForms>
                <Head>Pick Up Location</Head>
                <Input
                    id="location"
                    type="text"
                    value={inputValue}
                    label="Location"
                    placeholder="Location"
                    onChange={handleUserInput}
                    required
                />
            </InputForms>

            <InputForms>
                <Head>Drop Off Location</Head>
                <Input
                    id="location"
                    type="text"
                    value={inputValueTwo}
                    label="Location"
                    placeholder="Location"
                    onChange={handleUserInputTwo}
                    required
                />
            </InputForms>

            <Buttons>
                <Button >Submit</Button>
                <Button onClick={resetInputField}>Reset</Button>
            </Buttons>
            
        </Bar>
    )
}