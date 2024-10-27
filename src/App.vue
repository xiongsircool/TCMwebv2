<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <el-container class="app-container">
    <el-header>
      <NavBar />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
    <el-footer>
      <p>&copy; 2024 TCM Knowledge Base. All rights reserved.</p>
    </el-footer>
  </el-container>
</template>

<style lang="scss">
.app-container {
  min-height: 100vh;
  
  .el-header {
    padding: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .el-main {
    padding: 20px;
    background-color: #f5f7fa;
  }

  .el-footer {
    text-align: center;
    padding: 20px;
    background-color: #545c64;
    color: #fff;
  }
}
</style>