import React, { useState } from "react";
import Input from "./Input";

export default function Form() {
    const [formData, setFormData] = useState({ firstname: "", lastname: "", age: "", email: "" });

    

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
      const {name, value} = e.currentTarget
      console.log(name, value)
      setFormData((formData) => ({...formData, [name]: value}) )
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const resetFormData = { ...formData, ...{ firstname: "", lastname: "", age: "", email: "" } }
      setFormData( (formData) => ( {...formData, ...resetFormData} ) )
      console.log(formData)
    }
  
    return (
      <form
        className="form-fields"
        //onSubmit={handleSubmit}
        method="post"
        action="#"
        onSubmit={handleSubmit}
      >
        <Input
            label="Fornavn"
            name="firstname"
            id="firstname"
            type="text"
            placeholder="Fornavn..."
            handleOnChange={handleOnChange}
            value={formData.firstname}
        />
        <Input
            label="Etternavn"
            name="lastname"
            id="lastname"
            type="text"
            placeholder="Etternavn..."
            handleOnChange={handleOnChange}
            value={formData.lastname}
        /> 
        <Input
            label="Alder"
            name="age"
            id="age"
            type="number"
            placeholder="Alder..."
            handleOnChange={handleOnChange}
            value={formData.age}
        />
        <Input
          label="E-post"
          name="email"
          id="email"
          type="email"
          placeholder="E-post..."
          handleOnChange={handleOnChange}
            value={formData.email}
        />
        <button id="button" type="submit">
          Send
        </button>
      </form>
    );
}