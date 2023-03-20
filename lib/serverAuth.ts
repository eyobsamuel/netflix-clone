/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: serverAuth.ts                                                         *
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

import { NextApiRequest } from "next"
import { getSession } from "next-auth/react"

import prismadb from '@/lib/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req })

    if (!session?.user?.email) {
        throw new Error("Not signed in");

    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    })
    if (!currentUser) {
        throw new Error("Not signed in")
    }
    return { currentUser }
}

export default serverAuth