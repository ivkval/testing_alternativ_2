import Async from "../components/Async"


it('should validate promise value'), async () => {
    const promise: number = Async()

    const verdi: number = await promise

    expect(verdi).toBe(2)
}

