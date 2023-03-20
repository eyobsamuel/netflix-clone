/*
 * Created Date: Tu Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: useMovieList.ts                                                       *
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
import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

const useMovies = () => {
  const { data, error, isLoading } = useSwr('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMovies;


