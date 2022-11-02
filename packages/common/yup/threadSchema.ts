import * as yup from 'yup';

// Frontend validator

export const threadSchema = yup.object().shape({
    title: yup
        .string()
        .min(10, 'Tytuł musi mieć przynajmniej 10 znaków')
        .max(30, 'Tytuł może mieć maksymalnie 30 znaków'),
    desc: yup
        .string()
        .min(30, 'Opis musi mieć przynajmniej 30 znaków')
        .max(300, 'Opis może mieć maksymalnie 300 znaków')
});