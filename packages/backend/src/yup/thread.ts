import * as yup from 'yup';
import {prisma} from '../shared/prisma';

export const threadExist = yup.object().shape({
    title: yup
        .string()
        .required()
        .test('exist', 'Mamy już temat o tej nazwie', async (value) => {
            const response = await prisma.thread.findFirst({
                where: {title: value?.trim()}
            });
            console.log(response);
            return response === null;
        }),
    desc: yup
        .string()
});