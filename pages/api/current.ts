/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: current.ts                                                            *
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
import serverAuth from '@/lib/serverAuth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    const { currentUser } = await serverAuth(req)
    return res.status(200).json(currentUser)
  } catch (error) {
    return res.status(400).end()
  }
}
