import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (id === 'undefined')
        return res.status(404).json([])

    const userData = await prisma.users.findMany({
        where: {
            id: Number(id)
        }
    })
    
    if (userData.length > 0)
        return res.status(200).json(userData)

    res.status(404).json([])
}