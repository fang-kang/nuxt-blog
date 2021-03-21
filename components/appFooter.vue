<template>
  <footer class="app-footer">
    <p>
      Powered By
      <a href="https://zh.nuxtjs.org/" rel="nofollow" target="_blank">Nuxt.js</a
      >，Designed By FK
    </p>
    <p class="copyright">
      Copyright© 2021-{{ currentYear }}
      <a href="https://github.com/fang-kang" target="_blank"> 凌烟FK</a>
    </p>
    <div class="site">
      <a
        target="_blank"
        rel="nofollow"
        :href="siteConfig.psr"
        style="
          display: inline-block;
          text-decoration: none;
          height: 20px;
          line-height: 20px;
        "
      >
        <img
          src="@/assets/images/beian.png"
          style="float: left; margin-right: 3px"
        />
        <p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            color: #939393;
          "
        >
          {{ siteConfig.icp }}
        </p></a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "appFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  computed: {
    siteConfig() {
      return this.$store.state.config.config;
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.site {
  height: 17px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  margin-top: 6px;
}
.app-footer {
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  padding: 10px 0;
  min-width: 320px;
  line-height: 24px;
  color: #939393;
  a {
    color: #939393;
  }
  .copyright {
    a {
      font-style: italic;
    }
  }
}
</style>
