type Props = {
    text: string | null
}

export default function StatusBox({ text }: Props) {
    return (
        <fieldset>
            <legend>Status</legend>
            
                {text === "Fornavn" ? <p>Fyll inn feltet med fornavnet ditt.</p>: null}
            
        </fieldset>
    )
}