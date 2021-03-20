import {
  post,
  get
} from '@/utils/http'
// 添加标签
export const addTag = query => post('/tag/addTag', query)
// 查询标签（有数量）
export const getTagList = query => get('/tag/getTagList', query)
// 查询所有标签
export const getAll = query => get('/tag/getAll', query)
// 查询标签（分页）
export const geTagListByPage = query => post('/tag/geTagListByPage', query)
// 删除标签
export const delTag = query => post('/tag/delTag', query)
// 编辑标签
export const editTag = query => post('/tag/editTag', query)
