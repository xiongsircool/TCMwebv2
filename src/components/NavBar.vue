<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('1')

const handleSelect = (key: string) => {
  switch (key) {
    case '1':
      router.push('/')
      break
    case '2':
      router.push('/dialogue')
      break
    case '3':
      router.push('/knowledge-graph')
      break
    case '4':
      router.push('/about')
      break
  }
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="nav-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">智能对话</el-menu-item>
    <el-menu-item index="3">知识图谱</el-menu-item>
    <el-menu-item index="4">关于我们</el-menu-item>
    
    <div class="nav-right">
      <el-input
        placeholder="搜索中医知识..."
        prefix-icon="Search"
        class="search-input"
      />
      <el-button type="primary">登录</el-button>
      <el-button>注册</el-button>
    </div>
  </el-menu>
</template>

<style scoped lang="scss">
.nav-menu {
  padding: 0 20px;
  
  .nav-right {
    float: right;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
    
    .search-input {
      width: 300px;
    }
  }
}
</style>