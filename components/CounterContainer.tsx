import React, { useState } from "react";
import Buttons from "./Buttons";
import Counter from "./Counter";

export default function CounterContainer() {
    const [count, setCount] = useState(0)

    const decrement = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = (e.target as HTMLButtonElement).value
        setCount(count => count - Number(value))
    }

    const increment = (e: React.MouseEvent<HTMLButtonElement>) => {
        const value = (e.target as HTMLButtonElement).value
        setCount(count => count + Number(value))
    }

    return (
        <div className='container'>
            <Counter count={count} />
            <Buttons decrement={decrement} increment={increment} />
        </div>
    )
}