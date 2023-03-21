/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: useInfoModalStore.ts                                                  *
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

import { create } from 'zustand'

export interface ModalStoreInterface {
  movieId?: string
  isOpen: boolean
  openModal: (movieId: string) => void
  closeModal: () => void
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({ isOpen: true, movieId }),
  closeModal: () => set({ isOpen: false, movieId: undefined })
}))

export default useInfoModalStore
