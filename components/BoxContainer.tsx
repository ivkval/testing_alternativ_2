import ContextBox from "./ContextBox"
import StatusBox from "./StatusBox"

export default function BoxContainer() {
    return (
        <section className="form-boxses">
            <ContextBox />
            <StatusBox />
        </section>
    )
}