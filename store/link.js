/*
 *@Description: 
 *@Email:1793980864@qq.com
 *@Author: fk
 *@Date: 2021-03-20 23:23:24
*/
export const state = () => ({

  // 友链列表
  list: {},


})

export const mutations = {
  // 获取友链列表
  GET_LINK_SUCCESS(state, data) {
    state.list = data
  },
}
