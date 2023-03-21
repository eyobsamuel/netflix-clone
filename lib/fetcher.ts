/*
 * Created Date: Mo Mar 2023                                                   *
 * Author: Phieule                                                             *
 * File: fetcher.ts                                                            *
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

import axios from 'axios'

const fetchers = (url: string) => axios.get(url).then((res) => res.data)

export default fetchers
