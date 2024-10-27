<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Message } from '../../types/dialogue'

const props = defineProps<{
  message: Message
}>()

const showRetrieval = ref(false)

const messageClass = computed(() => {
  return {
    'message-system': props.message.type === 'system',
    'message-user': props.message.type === 'user',
    'message-assistant': props.message.type === 'assistant'
  }
})
</script>

<template>
  <div class="message" :class="messageClass">
    <div class="message-content">
      <p>{{ message.content }}</p>
      <div v-if="message.retrievalInfo" class="retrieval-bar">
        <el-button 
          link 
          type="primary" 
          @click="showRetrieval = !showRetrieval"
        >
          {{ showRetrieval ? '收起检索信息' : '查看检索信息' }}
        </el-button>
      </div>
      <div v-if="showRetrieval && message.retrievalInfo" class="retrieval-info">
        <div class="info-header">
          <span>相关度: {{ message.retrievalInfo.relevance * 100 }}%</span>
        </div>
        <div class="sources">
          <h4>参考来源:</h4>
          <ul>
            <li v-for="source in message.retrievalInfo.sources" :key="source">
              {{ source }}
            </li>
          </ul>
        </div>
        <div class="context">
          <h4>上下文:</h4>
          <p>{{ message.retrievalInfo.context }}</p>
        </div>
      </div>
      <span class="timestamp">{{ message.timestamp.toLocaleTimeString() }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message {
  margin-bottom: 16px;
  max-width: 85%;

  .message-content {
    padding: 12px 16px;
    border-radius: 8px;
    position: relative;

    p {
      margin: 0;
      white-space: pre-wrap;
      line-height: 1.5;
    }

    .retrieval-bar {
      margin-top: 8px;
      text-align: right;
    }

    .retrieval-info {
      margin-top: 8px;
      padding: 8px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 4px;
      color: #333;

      .info-header {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 8px;
      }

      .sources {
        margin-bottom: 8px;

        h4 {
          margin: 0 0 4px 0;
          font-size: 0.9em;
        }

        ul {
          margin: 0;
          padding-left: 20px;
          font-size: 0.9em;
        }
      }

      .context {
        h4 {
          margin: 0 0 4px 0;
          font-size: 0.9em;
        }

        p {
          margin: 0;
          font-size: 0.9em;
        }
      }
    }

    .timestamp {
      font-size: 0.75rem;
      color: #999;
      position: absolute;
      bottom: -20px;
      right: 0;
    }
  }

  &.message-system {
    margin: 0 auto;
    text-align: center;
    
    .message-content {
      background-color: #f5f7fa;
      display: inline-block;
    }
  }

  &.message-user {
    margin-left: auto;
    
    .message-content {
      background-color: #409EFF;
      color: white;
    }
  }

  &.message-assistant {
    margin-right: auto;
    
    .message-content {
      background-color: #67C23A;
      color: white;

      .retrieval-info {
        color: #333;
      }
    }
  }
}
</style>