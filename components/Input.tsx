type Props = {
    label: string,
    id: string,
    type: string,
    name: string,
    placeholder: string
}

export default function Input({label, id, type, name, placeholder}: Props) {
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
                //onFocus={}
                //value={formData.title}
                //onChange={formHandler}
            />
        </>
    )
}