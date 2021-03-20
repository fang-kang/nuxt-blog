import {
  post,
  get
} from '@/utils/http'
// 添加网站配置
export const addConfig = query => post('/site-config/addConfig', query)
// 获取公共配置
export const getConfig = query => get('/site-config/getConfig', query)
// 编辑网站配置
export const editConfig = query => post('/site-config/editConfig', query)
// 删除网站配置
export const delConfig = query => post('/site-config/delConfig', query)
