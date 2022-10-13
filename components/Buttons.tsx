import Button from "./Button";

type ButtonsProps = {
    decrement: Function
    increment: Function
}

export default function Buttons({ decrement, increment }: ButtonsProps) {
    return (
        <div className='buttons'>
            <Button 
                style="button red"
                text="-5"
                onClick={decrement}
                value={5}
            />
            <Button
                style="button red"
                text="-1"
                onClick={decrement}
                value={1}
            />
            <Button
                style="button green"
                text="+1"
                onClick={increment}
                value={1}
            />
            <Button
                style="button green"
                text="+5"
                onClick={increment}
                value={5}
            />
        </div>
    )
}