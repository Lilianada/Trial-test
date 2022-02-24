import React, { useState } from "react";
import Button from "../Button.styles";
import { Bar, Head, Form, Input, InputForms, Buttons, TextBox, AutoWrapper } from "./SideBar.styles";
import Autocomplete from "react-google-autocomplete";

export default function SideBar () {
    
    //Post Request
    const [postData, setPostData] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        handle()
    };

    const handle = async () => {
        if (inputValue  === "" || inputValueTwo === ""){
            return alert("Invalid input! Please input your locations.");
        }
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
    }
    
    //Fetch API
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
                if (result.error !== undefined){
                    setPostData(result.error)
                } else if (result.status === "success") {
                   const str = JSON.stringify(result.path)
                    setPostData(str)
                }else {handle()}
            } else {setPostData("Please try again!")}
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

            <AutoWrapper>
                <Head>Input Value</Head>
                <Autocomplete
                    apiKey={'AIzaSyCXeKPM_fnbfUJ1P6YTkP9hIakolhrKNv8'}
                    onPlaceSelected={(place) => console.log(place)}
                    style={{width: "300px"}}
                />
            </AutoWrapper>
        </Bar>
    )
}