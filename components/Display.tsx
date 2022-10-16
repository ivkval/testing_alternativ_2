type CounterProps = {
    count: number
}

export default function Display({ count }: CounterProps) {
    return <h2 data-testid={"display"} className="display">{count}</h2>
}