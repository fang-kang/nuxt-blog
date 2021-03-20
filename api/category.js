import {
  post,
  get
} from '@/utils/http'
// 添加分类
export const addCategory = query => post('/category/addCategory', query)
// 查询分类
export const getAllCategory = query => get('/category/getAll', query)
// 查询所有分类(有数量)
export const getCategoryList2 = query => get('/category/getCategoryList2', query)
// 查询分类（分页）
export const getCategoryList = query => post('/category/getCategoryList', query)
// 删除分类
export const delCategory = query => post('/category/deleteCategory', query)
// 编辑分类
export const updateCategory = query => post('/category/updateCategory', query)
