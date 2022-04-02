import { useState } from 'react';

const useInputsearch = () => {
    const [ name, setName ] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }
    return {
        name,
        handleChange
    }
}

export default useInputsearch;
