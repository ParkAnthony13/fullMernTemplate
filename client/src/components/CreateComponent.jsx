import React, { useState } from "react"
import axios from "axios"

const CreateComponent = props => {

    const [formState, setFormState] = useState({
        name: "",
        age: 0,
        breed: ""
    })

    const [validations,setValidations] = useState("")

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/cats", formState) // we need to send to a defined (create) url from cat.routes
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.response.data)
                const {errors} = err.response.data
                for(let [key, value] of Object.entries(errors)){
                    console.log(key,value.message)
                }
            })
    }


    return(
        <div>
            <h1>Create</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input tpye="text" name="name" id="" onChange={changeHandler}/>
                </p>
                <p>
                    Age:
                    <input tpye="text" name="age" id="" onChange={changeHandler}/>
                </p>
                <p>
                    Breed:
                    <input tpye="text" name="breed" id="" onChange={changeHandler}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default CreateComponent