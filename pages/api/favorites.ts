/*
 * Created Date: Tu Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: favorites.ts                                                          *
 * Project: netflix-clone                                                      *
 * -----                                                                       *
 * Last Modified: Tue Mar 21 2023                                              *
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
  try {
    if (req.method !== 'GET') {
      return res.status(405).end()
    }

    const { currentUser } = await serverAuth(req)

    const favoritedMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds
        }
      }
    })

    return res.status(200).json(favoritedMovies)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: `Something went wrong: ${error}` })
  }
}
