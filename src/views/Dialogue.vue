<script setup lang="ts">
import { ref } from 'vue'
import ChatMessage from '../components/dialogue/ChatMessage.vue'
import ChatInput from '../components/dialogue/ChatInput.vue'
import { Message } from '../types/dialogue'

const messages = ref<Message[]>([
  {
    id: 1,
    type: 'system',
    content: '欢迎使用中医知识库智能对话系统，我可以帮您解答关于中医药的问题。',
    timestamp: new Date(),
    retrievalInfo: {
      sources: ['黄帝内经', '中医基础理论'],
      relevance: 1,
      context: '系统初始化欢迎信息'
    }
  }
])

const handleSendMessage = (content: string) => {
  const userMessage: Message = {
    id: messages.value.length + 1,
    type: 'user',
    content,
    timestamp: new Date(),
    retrievalInfo: null
  }
  messages.value.push(userMessage)

  // 模拟AI响应
  setTimeout(() => {
    const aiMessage: Message = {
      id: messages.value.length + 1,
      type: 'assistant',
      content: '这是一个模拟回复。实际AI集成将在此处实现。',
      timestamp: new Date(),
      retrievalInfo: {
        sources: ['中医经典文献', '现代研究论文'],
        relevance: 0.95,
        context: '来自知识图谱的示例上下文'
      }
    }
    messages.value.push(aiMessage)
  }, 1000)
}
</script>

<template>
  <div class="dialogue-container">
    <div class="chat-section">
      <div class="messages-container">
        <ChatMessage
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <ChatInput @send="handleSendMessage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialogue-container {
  height: calc(100vh - 120px);
  padding: 0;
  background: white;

  .chat-section {
    display: flex;
    flex-direction: column;
    height: 100%;

    .messages-container {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px;
      background: #f5f7fa;
    }
  }
}
</style>