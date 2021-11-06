import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    if (id === 'undefined')
        return res.status(200).json([])

    const codeData = await prisma.codeblocks.findMany({
        where: {
            base_id: id.toString()
        }
    })
    
    if (codeData.length > 0)
        return res.status(200).json(codeData)

    res.status(200).json({notFound: true})

    await prisma.$disconnect()
}