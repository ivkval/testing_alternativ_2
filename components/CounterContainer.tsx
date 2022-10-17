import React, { useState } from "react";
import Buttons from "./Buttons";
import Counter from "./Counter";

export default function CounterContainer() {
    const [count, setCount] = useState(0)

    const decrement = (e: any) => {
        setCount(count => count - Number(e.target.value))
    }

    const increment = (e: any) => {
        setCount(count => count + Number(e.target.value))
    }

    return (
        <div className='container'>
            <Counter count={count} />
            <Buttons decrement={decrement} increment={increment} />
        </div>
    )
}