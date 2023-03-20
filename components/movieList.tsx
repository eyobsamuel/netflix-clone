/*
 * Created Date: Mo Mar 2023
 * Author: Phieule
 * File: movieList.tsx
 * Project: netflix-clone
 * -----
 * Last Modified: Mon Mar 20 2023
 * Modified By: Phieule
 * -----
 * Copyright (c) 2023 Voices of Sales Consultancy
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'

import { MovieInterface } from '@/types'
import MovieCard from '@/components/movieCard'
import { isEmpty } from 'lodash'

interface MovieListProps {
  data: MovieInterface[]
  title: string
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null
  }

  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>{title}</p>
        <div className='grid grid-cols-4 gap-2'>
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
