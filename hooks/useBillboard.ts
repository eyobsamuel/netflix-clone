/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: useBillboard.ts                                                       *
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

import useSwR from 'swr'

import fetchers from '@/lib/fetcher'

const useBillboard = () => {
    const {data, error, isLoading } = useSwR('api/random',fetchers,{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return {
        data,
        error,
        isLoading,
    }
}

export default useBillboard
