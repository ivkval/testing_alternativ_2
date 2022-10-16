import { useState } from "react";
import Buttons from "./Buttons";
import Display from "./Display";

export default function Counter() {
    const [count, setCount] = useState(0)

    const decrement = (e: any) => {
        setCount(count => count - Number(e.target.value))
    }

    const increment = (e: any) => {
        setCount(count => count + Number(e.target.value))
    }

    return (
        <div className='container'>
            <Display count={count} />
            <Buttons decrement={decrement} increment={increment} />
        </div>
    )
}