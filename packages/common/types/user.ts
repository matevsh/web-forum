import {thread} from '../../frontend/types/threadLoaderData';

export type user = {
    id: number
    login: string
    email: string
    idAvatar: number
    created: Date
}

export interface userProfileData extends user {
    Thread: thread[]
}