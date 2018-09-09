import http from '@/utils/httpRequest'
import config from '@/utils/config'

const isDev = process.env.NODE_ENV === 'development'

export const getCaptchaPath = url => {
  return (isDev ? '/proxyApi' : config.productHost) + url
}
export const login = params => http.post('/sys/login', params)
export const loginOut = params => http.post('/sys/loginout', params)
export const getUserInfoApi = params => http.get('/sys/user/info', params)
export const getMenuNav = params => http.get('/sys/menu/nav', params)
