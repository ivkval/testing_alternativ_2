type ButtonProps = {
    style: string
    text: string
    onClick: any
    value: number
}

export default function Button({ style, text, onClick, value }: ButtonProps) {
    return <button 
                className={style}
                onClick={onClick}
                value={value}
            >
            {text}
            </button>
}