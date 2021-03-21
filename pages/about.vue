<template>
  <div class="about">
    <div class="about-me"><el-divider>关于我</el-divider></div>
    <div class="clearfix about-me-detail">
      <div class="about-me-left">
        <img :src="config.avatar" :alt="config.name">
        <h5>{{config.name}}</h5>
      </div>
      <ul class="about-me-right">
        <li>前端开发经验：2019年～今日</li>
        <li>具备扎实的 Javascript 基础，熟练使用 ES6+ 语法</li>
        <li>熟悉 React 框架及其用法，熟悉 Vue 框架及其用法</li>
        <li>熟练使用 Webpack 打包工具，熟悉常用工程化和模块化方案</li>
        <li>熟悉 Typescript和Vue3.0</li>
        <li>熟悉 Koa、express、Mysql、Mongodb，针对需求可以做到简单的数据库设计、接口的开发与设计</li>
        <li>熟悉nest.js+ Typescript 进行接口的开发</li>
      </ul>
    </div>
    <div class="about-site"><el-divider>关于本站</el-divider></div>
    <div class="site-box">
      <div>
        本站所用技术栈：
      </div>
      <div class="site-tech">
        <div>前端：Nuxt.js</div>
        <div>后端：Vue-Admin-Element</div>
        <div>服务端：Nest.js</div>
        <div>数据库：Mysql</div>
        <div>本站源码：<a href="https://github.com/fang-kang/nuxt-blog" target="_blank">Blog System</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    head() {
      return {
        title: '关于',
      }
    },
    computed:{
      linkList(){
        return this.$store.state.link.list
      },
      config(){
          return this.$store.state.config.config
      }
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .about{
    background-color: #fff;
    padding: 15px 0;
    box-sizing: border-box;
    .about-me,
    .contact-me,
    .about-site{
      text-align: center;
      font-size: 18px;
      line-height: 60px;
      color: #333;
    }
    .about-me-detail{
      max-width: 800px;
      margin: 0 auto;
      padding: 15px;
      .about-me-left{
        padding-bottom: 10px;
        img{
          display: block;
          width: 80px;
          height: 80px;
          margin: 0 auto;
          border-radius: 50%;
        }
        h5{
          padding: 8px 0 0;
        }
      }
      .about-me-right{
        font-size: 13px;
        li{
          list-style: none;
          line-height: 20px;
        }
      }
    }
    .friends-list-wrap{
      max-width: 800px;
      margin: 0 auto;
      padding: 15px;
      li{
        float: left;
        background-color: #eee;
        list-style: none;
        border-radius: 4px;
        margin-bottom: 7px;
        margin-right: 7px;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          line-height: 38px;
          padding: 0px 10px;
        }
      }
    }
    .site-box{
      padding: 15px;
      font-size: 13px;
      line-height: 24px;
      box-sizing: border-box;
      a{
        color: #409EFF;
      }
      .site-descript{
        text-indent: 2em;
        padding-bottom: 15px;
      }
      .site-tech{
        padding: 8px 0 8px 2em;
        box-sizing: border-box;
      }
    }
    @media screen and (min-width: 769px) {
      .about-me-left,.about-me-right{
        float: left;
      }
      .about-me-left{
        width: 100px;
        margin: 0 auto;
        text-align: center;
      }
      .about-me-right{
        max-width: 600px;
        margin-left: 20px;
        li{
          padding-bottom: 15px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .about-me-left{
        width: 100%;
        margin: 0 auto;
        text-align: center;
      }
      .about-me-right{
        padding-bottom: 15px;
      }
    }
  }
</style>
