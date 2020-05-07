<!--
 * @Author: xwen
 * @Date: 2020-04-28 13:47:36
 * @LastEditTime: 2020-04-28 14:20:25
 * @LastEditors: xwen
 * @Description: bottomNavbar
 -->
<template>
  <v-card flat height="56px" class="d-flex bottomNavBtn border-radius-none">
    <v-bottom-navigation :value="true" v-model="bottomNav" color="transparent" class="box-shadow-none">
      <v-btn
        text
        :value="item.name"
        color="primary"
        v-for="(item, index) in tabList"
        :key="index"
        :to="item.to"
        :class="{ 'd-flex': true, 'pa-0': true, 'ma-0': true }">
        <span class="body-1">{{ item.title }}</span>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
export default {
  name: 'BottomNavbar',
  data() {
    return {
      bottomNav: 'name',
      tabList: {
        home: {
          name: 'home',
          title: '首页',
          icon: 'iconfont icon-nav-home',
          to: '/'
        },
        custom: {
          name: 'custom',
          title: '定制',
          icon: 'iconfont',
          to: '/custom'
        },
        styles: {
          name: 'styles',
          title: '样式和动画',
          icon: 'iconfont',
          to: '/styles'
        },
        UI: {
          name: 'UI',
          title: 'UI',
          icon: 'iconfont',
          to: '/UI'
        },
        directives: {
          name: 'directives',
          title: '指令',
          icon: 'iconfont',
          to: '/directives'
        }
      }
    }
  }
}
</script>

<style>
#app .bottomNavBtn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
}
#app .bottomNavBtn .v-btn {
  height: 56px;
  border-radius: 1px;
  width: 100%;
  min-width: 0;
}
#app .bottomNavBtn .v-btn__content {
  height: 100%;
}
</style>