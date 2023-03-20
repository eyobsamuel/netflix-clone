/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: random.ts                                                             *
 * Project: netflix-clone                                                      *
 * -----                                                                       *
 * Last Modified: Mon Mar 20 2023                                              *
 * Modified By: Phieule                                                        *
 * -----                                                                       *
 * Copyright (c) 2023 Voices of Sales Consultancy                              *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */

import { NextApiRequest, NextApiResponse } from 'next'
import prismadb from '@/lib/prismadb'
import serverAuth from '@/lib/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    await serverAuth(req)

    const movieCount = await prismadb.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    })

    return res.status(200).json(randomMovies[0])
  } catch (err) {
    return res.status(400).json({ error: `Something went wrong: ${err}` })
  }
}
