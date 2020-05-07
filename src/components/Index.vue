<!--
 * @Author: xwen
 * @Date: 2020-04-28 13:40:56
 * @LastEditTime: 2020-04-28 13:51:46
 * @LastEditors: xwen
 * @Description: loyout页面
 -->
<template>
  <v-content class="app-index" style="width: 100%;height: 100%;">
    <keep-alive>
      <router-view />
    </keep-alive>
    <component :is="switchBottomNavbar()"></component>
  </v-content>
</template>

<script>
export default {
  name: 'Index',
  components: {
    BottomNavbar001: () => import('@/components/widgets/BottomNavbar')
  },
  methods: {
    switchBottomNavbar() {
      let obj = {
        '001': 'BottomNavbar001'
      }
      return obj['001']
    }
  }
}
</script>
