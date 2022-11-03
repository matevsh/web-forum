export type thread = {
    id: number
    title: string
    views: number
    published: string
    user: {
        id: number
        idAvatar: number
        login: string
    }
}

export type threads = Array<thread>
