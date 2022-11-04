export type thread = {
    id: number
    title: string
    views: number
    published: string
}

export interface threadLoaderData extends thread{
    user: {
        id: number
        idAvatar: number
        login: string
    }
}

export type threads = Array<threadLoaderData>
