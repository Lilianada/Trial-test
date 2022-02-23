import React, { useState } from "react"
import styled from "styled-components"
import Button from "./Button"
const Bar = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    //align-items: ;
    justify-content: flex-start;
`

const Head = styled.h3`
    margin-bottom: .75rem;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const InputForms = styled.div`
    padding: .75rem 2rem;
`
const Input= styled.input`
    position: relative;
    display: inline-flex;
    padding: .75rem;
    width: 17rem;
    border-radius: 10px;
    transition: .4s ease-in-out;
    outline: none;
    border: 1px solid var(--grey-color);
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
    width: 17rem;
    justify-content: space-between;
    margin: 1rem 2rem;
`
const TextBox = styled.div`
    width: 300px;
    margin: 2rem;
    padding: 1.5rem;
    font-size: 18px;
    border: 1px solid var(--grey-color);
    border-radius: 10px;
`
export default function SideBar () {
    
    //Post Request
    const [postData, setPostData] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetch(url, {
            method: 'post',
            data: {
              origin: inputValue,
              destination: inputValueTwo,
            }
        })
        .then(response => response.json())
        .then(data =>  data)
        .catch(err => (err))
        if (result !== undefined) {
            setPostData("In progress...")
            fetchReq(result.token) 
        } else{setPostData(result)}
    };
    
    //Fetch API
    //const [fetchData, setFetchData] = useState([]);
    const url = "https://mock-api.dev.lalamove.com/route/"

    const fetchReq = async (id) => {
        const result = await fetch(url + id)
        .then(response => response.json())
        .then(data => (data))
        .catch(err => (err))
        console.log(result)
        if (result !== undefined) {
            if (result.status !== undefined){
                setPostData(result.error)
            } else {setPostData("Location Gotten")}
        } else {setPostData (result.toString())}
    }

    
    //Handling the forms
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
            <Form onSubmit={handleSubmit}>
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
            </Form>

            <Buttons>
                <Button 
                    type="submit"
                    value={'submit'}
                    onClick={handleSubmit}
                >Submit</Button>
                <Button onClick={resetInputField}>Reset</Button>
            </Buttons>
            
            <TextBox>
                {postData}
            </TextBox>
        </Bar>
    )
}