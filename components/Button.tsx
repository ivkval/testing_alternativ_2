type ButtonProps = {
    id: number
    style: string
    text: string
    onClick: any
    value: number
}

export default function Button({id, style, text, onClick, value }: ButtonProps) {
    return <button 
                data-testid={`button-${id}`}
                className={style}
                onClick={onClick}
                value={value}
            >
            {text}
            </button>
}