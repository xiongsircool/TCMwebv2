<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'send', message: string): void
}>()

const inputMessage = ref('')

const handleSend = () => {
  if (inputMessage.value.trim()) {
    emit('send', inputMessage.value)
    inputMessage.value = ''
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSend()
  }
}
</script>

<template>
  <div class="chat-input">
    <el-input
      v-model="inputMessage"
      type="textarea"
      :rows="3"
      placeholder="请输入您的问题..."
      @keydown="handleKeydown"
    />
    <el-button
      type="primary"
      :disabled="!inputMessage.trim()"
      @click="handleSend"
    >
      发送
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.chat-input {
  padding: 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: white;

  :deep(.el-textarea) {
    flex-grow: 1;
  }

  .el-button {
    margin-top: 8px;
  }
}
</style>