<script setup lang="ts">
import { ref } from 'vue'

const featuredArticles = ref([
  {
    title: 'Introduction to TCM Principles',
    description: 'Learn about the fundamental principles of Traditional Chinese Medicine.',
    image: '/images/tcm-principles.jpg'
  },
  {
    title: 'Understanding Acupuncture',
    description: 'Explore the ancient practice of acupuncture and its benefits.',
    image: '/images/acupuncture.jpg'
  },
  {
    title: 'Herbal Medicine Guide',
    description: 'Comprehensive guide to traditional Chinese herbal medicine.',
    image: '/images/herbal-medicine.jpg'
  }
])
</script>

<template>
  <div class="home">
    <!-- Welcome Section -->
    <el-row class="welcome-section">
      <el-col :span="24">
        <h1>Welcome to TCM Knowledge Base</h1>
        <p>Discover the wisdom of Traditional Chinese Medicine through our comprehensive knowledge platform.</p>
        
        <div class="quick-access">
          <el-button type="primary" size="large" @click="$router.push('/dialogue')">
            Start Interactive Dialogue
          </el-button>
          <el-button type="success" size="large" @click="$router.push('/knowledge-graph')">
            Explore Knowledge Graph
          </el-button>
          <el-button type="info" size="large" @click="$router.push('/about')">
            Learn More About Us
          </el-button>
        </div>
      </el-col>
    </el-row>

    <!-- Featured Content -->
    <el-row class="featured-content">
      <el-col :span="24">
        <h2>Featured Content</h2>
        <el-row :gutter="20">
          <el-col v-for="article in featuredArticles" :key="article.title" :span="8">
            <el-card class="article-card">
              <img :src="article.image" class="article-image" />
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
              <el-button type="text">Read More</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- News and Updates -->
    <el-row class="news-section">
      <el-col :span="24">
        <h2>Latest News & Updates</h2>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in 4"
            :key="index"
            :timestamp="'2024-03-0' + (index + 1)"
          >
            News Item {{ index + 1 }}
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.home {
  .welcome-section {
    text-align: center;
    padding: 60px 0;
    background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
    color: white;
    border-radius: 8px;
    margin-bottom: 40px;

    h1 {
      font-size: 2.5em;
      margin-bottom: 20px;
    }

    .quick-access {
      margin-top: 30px;
      display: flex;
      gap: 20px;
      justify-content: center;
    }
  }

  .featured-content {
    margin-bottom: 40px;

    h2 {
      margin-bottom: 30px;
      color: #333;
    }

    .article-card {
      height: 100%;
      
      .article-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
      }

      h3 {
        margin: 16px 0;
        color: #333;
      }
    }
  }

  .news-section {
    h2 {
      margin-bottom: 30px;
      color: #333;
    }
  }
}
</style>