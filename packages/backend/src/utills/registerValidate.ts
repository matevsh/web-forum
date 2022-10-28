import {Prisma} from '@prisma/client';
import {prisma} from '../shared/prisma';

const validate = async (user: Prisma.UserCreateInput) => {
    const errors: Error[] = [];

    const findByLogin = await prisma.user.findUnique({
        where: { login: user.login},
    });
    if(findByLogin) errors.push(new Error('This login already exist'));
    const findByEmail = await prisma.user.findUnique({
        where: { email: user.email},
    });
    if(findByEmail) errors.push(new Error('This email is already registered'));

    if(errors.length) throw errors;
};

export default validate;