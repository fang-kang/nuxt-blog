import {
  post,
  get
} from "@/utils/http";
const articlePrefix = '/article'
const categoryPrefix = '/category'
const tagPrefix = '/tag'
const commentPrefix = '/comment'
const linkPrefix = '/link'
const configPrefix = '/site-config'
// 获取网站配置
export function getSiteConfig(params) {
  return get(configPrefix + '/getConfig', params).then(res => res)
}
// 获取首页文章列表
export function getArtAll(params) {
  return post(articlePrefix + '/getArticleList', params).then(res => res)
}
// 获取文章详情
export function getArtDetail(params) {
  return get(articlePrefix + '/getArticleDetail', params).then(res => res)
}
// 获取热门文章
export function getArticleHot() {
  return get(articlePrefix + '/getArticleHot').then(res => res)
}
// 获取标签
export function getFontTagList(params) {
  return get(tagPrefix + '/getTagList', params).then(res => res)
}
// 获取分类
export function getFontCategoryList(params) {
  return get(categoryPrefix + '/getCategoryList2', params).then(res => res)
}
// 按标签获取文章
export function getArticleListByTag(params) {
  return post(articlePrefix + '/getArticleListByTag', params).then(res => res)
}
// 按分类获取文章
export function getArtByCategory(params) {
  return post(articlePrefix + '/getArtByCategory', params).then(res => res)
}
// 按导航栏获取文章
export function getArtByType(params) {
  return post(articlePrefix + '/getArtByType', params).then(res => res)
}

// 按搜索获取文章
export function getArtByTitle(params) {
  return post(articlePrefix + '/getArtByKeyword', params).then(res => res)
}
// 按搜归档文章
export function getArchive(params) {
  return post(articlePrefix + '/getArchive', params).then(res => res)
}
// 添加评论
export function addComment(params) {
  return post(commentPrefix + '/addComment', params).then(res => res)
}
// 添加回复
export function addReplyComment(params) {
  return post(commentPrefix + '/addReplyComment', params).then(res => res)
}
// 获取评论
export function getComment(params) {
  return post(commentPrefix + '/getComment', params).then(res => res)
}
// 获取友链
export function getlinkList(params) {
  return get(linkPrefix + '/getLink', params).then(res => res)
}
