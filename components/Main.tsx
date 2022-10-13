type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export default function Main({ children }: Props) {
    return <main className='main-container'>{children}</main>
}