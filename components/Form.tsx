import React, { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({ id: 0, title: '', text: '' });

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputName = e.target.name;
      const inputValue = e.target.value;
      const oldForm = { ...formData };
      const updateForm = { ...oldForm, ...{ [inputName]: inputValue } };
      setFormData(updateForm);
    };
  
    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (formData.title === '' || formData.text === '') {
        return;
      }
      formData.id = new Date().getTime();
      //setData([...data, { ...formData }]);
      const newFormData = { ...formData, ...{ id: 0, title: '', text: '' } };
      setFormData(newFormData);
    };
  
    return (
      <form
        className="form-fields"
        //onSubmit={handleSubmit}
        method="post"
        action="#"
      >
        <label htmlFor="Firstname">
            Fornavn
        </label>
        <input
            name="Firstname"
            id="Firstname"
            type="text"
            placeholder="Fornavn..."
            //value={formData.title}
            //onChange={formHandler}
        />

        <label htmlFor="Lastname">
            Etternavn
        </label>
        <input
            name="Lastname"
            id="Lastname"
            type="text"
            placeholder="Etternavn..."
            //value={formData.title}
            //onChange={formHandler}
        />

        <label htmlFor="age">
            Alder
        </label>
        <input
            name="age"
            id="age"
            type="number"
            placeholder="Alder..."
            //value={formData.title}
            //onChange={formHandler}
        />

        <label htmlFor="email">
            E-postadresse
        </label>
        <input
            name="email"
            id="email"
            type="email"
            placeholder="E-postadresse..."
            //value={formData.title}
            //onChange={formHandler}
        />
        <button id="button" type="submit">
          Send
        </button>
      </form>
    );
}