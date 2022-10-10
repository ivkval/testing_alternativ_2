type Props = {
    label: string,
    id: string,
    type: string,
    name: string,
    placeholder: string
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

export default function Input({label, id, type, name, placeholder, handleOnChange, value}: Props) {
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                name={name}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
            />
        </>
    )
}