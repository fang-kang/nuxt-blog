/*
 *@Description: 
 *@Email:1793980864@qq.com
 *@Author: fk
 *@Date: 2021-03-20 23:24:27
*/
export const state = () => ({

  // 评论列表
  list: {},


})

export const mutations = {
  // 获取评论列表
  GET_COMMENT_SUCCESS(state, data) {
    state.list = data
  },
}
