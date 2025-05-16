import { useState, type ChangeEvent } from "react";

const useInputState = (initialVal: string): [string, (e: ChangeEvent<HTMLInputElement>) => void, () => void] => {
    const [value, setValue] = useState(initialVal);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handleChange, reset];
}

export default useInputState;
