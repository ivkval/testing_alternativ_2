type Title = {
    title: string
}

export default function Title(props: Title) {
    return <h1>{ props.title }</h1>
}