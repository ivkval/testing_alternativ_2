type CounterProps = {
    count: number
}

export default function Counter({ count }: CounterProps) {
    return <h2 data-testid={"counter"} className="counter">{count}</h2>
}