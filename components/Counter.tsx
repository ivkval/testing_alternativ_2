type CounterProps = {
    count: number
}

export default function Counter({ count }: CounterProps) {
    return <h2 className="counter">{count}</h2>
}