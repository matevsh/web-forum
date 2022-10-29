export type threadProps = {
    title: string
    views: number
}

export type threadErrors = {
    title?: string
    desc?: string
}


export type thread = {
    id: number
    title: string
    views: number
}

export type threads = Array<thread>
