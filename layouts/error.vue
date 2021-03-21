<template>
  <div class="con">
    <h2 v-if="error.statusCode == 404">404页面不存在</h2>
    <h2 v-else>500 服务器错误</h2>
    <br />
    <h2>
      <nuxt-link :to="{ name: '/' }">回到首页</nuxt-link>
    </h2>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
<style lang="scss">
.con {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>