import axios from 'axios'

import config from '~/other-config'

export const fetchAxios = (rootState, params, authentication = true) => {
  let { url } = params
  if (!url.startsWith('http:') && !url.startsWith('https:')) {
    if (url.startsWith('/api/'))
      url = `${config.baseURL}${url}`
  }
  if (authentication && !rootState.userToken) {
    console.error('token missing?', rootState)
    throw new Error('Token not set yet')
  }
  const auth = `Bearer ${rootState.userToken}`
  console.log('axios.onRequest', auth, params.method, params.url)
  const p = authentication ? Object.assign({ headers: { Authorization: auth } }, params, { url }) : params
  // console.log('fetch', p.url, p.headers);
  console.log('fetch', p)
  return axios(p)
}
