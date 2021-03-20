import {
  post,
  get
} from '@/utils/http'

export default {

  // 删除分类
  delCategory: query => post('/category/deleteCategory', query),
  // 编辑分类
  updateCategory: query => post('/category/updateCategory', query),
  // 添加详情
  addDetail: query => post('/detail/add', query),
  // 查询详情列表
  getAllDetail: query => get('/detail/getDetailList', query),
  // 查询详情列表(分页)
  getAllDetailByPage: query => post('/detail/getListByPage', query),
  // 删除详情
  delDetail: query => post('/detail/delDetail', query),
  // 编辑详情
  updateDetail: query => post('/detail/updateDetail', query),
  // 根据分类获取列表(分页)
  getListPageByCategory: query => post('/detail/getListPageByCategory', query),
  // 根据关键词和分类获取列表(分页)
  searchByKeyword: query => post('/detail/searchByKeyword', query),
  // 根据关键词获取列表(分页)
  searchByKeyword2: query => post('/detail/searchByKeyword2', query)
}
