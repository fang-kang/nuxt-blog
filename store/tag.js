/*
 *@Description: 
 *@Email:1793980864@qq.com
 *@Author: fk
 *@Date: 2021-03-20 23:24:15
*/
export const state = () => ({

  // 标签列表
  list: {},


})

export const mutations = {
  // 获取文章列表
  GET_TAG_SUCCESS(state, data) {
    state.list = data
  },
}