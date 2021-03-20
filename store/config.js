/*
 *@Description: 
 *@Email:1793980864@qq.com
 *@Author: fk
 *@Date: 2021-03-20 23:23:58
*/
export const state = () => ({

  // 网站配置
  config: {},


})

export const mutations = {
  // 获取网站配置
  GET_CONFIG_SUCCESS(state, data) {
    state.config = data
  },
}
