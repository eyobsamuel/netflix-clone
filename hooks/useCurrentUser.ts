/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: useCurrentUser.ts                                                     *
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

const useCurrentUser = () => {
    const {data, error, isLoading, mutate } = useSwR('api/current',fetchers)

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser