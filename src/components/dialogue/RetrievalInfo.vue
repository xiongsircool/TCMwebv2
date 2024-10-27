<script setup lang="ts">
import type { RetrievalInfo } from '../../types/dialogue'

defineProps<{
  info: RetrievalInfo | null
}>()
</script>

<template>
  <div v-if="info" class="retrieval-info">
    <h3>Knowledge Graph Information</h3>
    
    <el-card class="info-card">
      <template #header>
        <div class="card-header">
          <span>Sources</span>
          <el-tag type="success">{{ info.relevance * 100 }}% Relevance</el-tag>
        </div>
      </template>
      
      <ul class="sources-list">
        <li v-for="source in info.sources" :key="source">
          {{ source }}
        </li>
      </ul>

      <div class="context-section">
        <h4>Context</h4>
        <p>{{ info.context }}</p>
      </div>
    </el-card>
  </div>
  <div v-else class="retrieval-info empty">
    <el-empty description="No retrieval information available" />
  </div>
</template>

<style scoped lang="scss">
.retrieval-info {
  height: 100%;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 20px;
    color: #333;
  }

  .info-card {
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .sources-list {
      list-style: none;
      padding: 0;
      margin: 0 0 20px 0;

      li {
        padding: 8px 0;
        border-bottom: 1px solid #eee;
        
        &:last-child {
          border-bottom: none;
        }
      }
    }

    .context-section {
      h4 {
        margin-bottom: 10px;
        color: #666;
      }

      p {
        color: #333;
        line-height: 1.6;
      }
    }
  }

  &.empty {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>