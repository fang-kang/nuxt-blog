import {
  post,
  get
} from '@/utils/http'
// 添加文章
export const addArtile = query => post('/article/addArtile', query)
// 查询文章详情
export const getDetail = query => get('/article/getDetail', query)
// 查询文章详情(加阅读量)
export const getArticleDetail = query => get('/article​/getArticleDetail​', query)
// 查询文章数量
export const getArticleCount = query => get('/article/getArticleCount', query)
// 查询文章列表（分页）
export const getArticleList = query => post('/article/getArticleList', query)
// 删除文章
export const delArticle = query => post('/article/delArticle', query)
// 编辑文章
export const editArtile = query => post('/article/editArtile', query)
// 获取热门文章
export const getArtclleHot = query => get('/article​/getArticleHot', query)
// 文章归档
export const getArchive = query => post('/article​/getArchive', query)
// 根据关键词获取文章列表
export const getArtByKeyword = query => post('/article/getArtByKeyword', query)
// 根据分类获取文章列表
export const getArtByCategory = query => post('/article​/getArtByCategory', query)
// 根据标签获取文章列表
export const getArticleListByTag = query => post('/article​/getArticleListByTag', query)
