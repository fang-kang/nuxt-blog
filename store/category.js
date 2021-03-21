/*
 *@Description: 
 *@Email:1793980864@qq.com
 *@Author: fk
 *@Date: 2021-03-20 23:24:34
*/
export const state = () => ({

  // 分类列表
  list: [],


})

export const mutations = {
  // 获取分类
  GET_CATEGORY_SUCCESS(state, data) {
    let category = data.filter(i => Number(i.total) > 0)
    state.list = category
  },
}
