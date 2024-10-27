<script setup lang="ts">
const teamMembers = [
  {
    name: 'Dr. Zhang Wei',
    role: 'Chief TCM Consultant',
    description: 'Expert in traditional Chinese medicine with over 20 years of clinical experience.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Research Director',
    description: 'Leading our research initiatives in TCM knowledge digitization.'
  },
  {
    name: 'Li Mei',
    role: 'Content Manager',
    description: 'Responsible for curating and maintaining our TCM knowledge base.'
  }
]
</script>

<template>
  <div class="about">
    <el-row class="hero-section">
      <el-col :span="24">
        <h1>About TCM Knowledge Base</h1>
        <p class="subtitle">Bridging Ancient Wisdom with Modern Technology</p>
      </el-col>
    </el-row>

    <el-row class="mission-section">
      <el-col :span="24">
        <el-card>
          <template #header>
            <h2>Our Mission</h2>
          </template>
          <p>
            TCM Knowledge Base is dedicated to preserving and promoting the rich heritage of Traditional Chinese Medicine
            through modern digital technology. We aim to make TCM knowledge accessible, searchable, and comprehensible
            to practitioners, students, and enthusiasts worldwide.
          </p>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="team-section" :gutter="20">
      <el-col :span="24">
        <h2>Our Team</h2>
      </el-col>
      <el-col v-for="member in teamMembers" :key="member.name" :span="8">
        <el-card class="team-member">
          <h3>{{ member.name }}</h3>
          <h4>{{ member.role }}</h4>
          <p>{{ member.description }}</p>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="contact-section">
      <el-col :span="24">
        <el-card>
          <template #header>
            <h2>Contact Us</h2>
          </template>
          <el-form label-position="top">
            <el-form-item label="Name">
              <el-input placeholder="Your name" />
            </el-form-item>
            <el-form-item label="Email">
              <el-input placeholder="Your email" />
            </el-form-item>
            <el-form-item label="Message">
              <el-input type="textarea" :rows="4" placeholder="Your message" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary">Send Message</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.about {
  padding: 20px;

  .hero-section {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      font-size: 2.5em;
      color: #333;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 1.2em;
      color: #666;
    }
  }

  .mission-section {
    margin-bottom: 40px;

    .el-card {
      text-align: center;
    }
  }

  .team-section {
    margin-bottom: 40px;

    h2 {
      text-align: center;
      margin-bottom: 30px;
    }

    .team-member {
      height: 100%;
      text-align: center;

      h3 {
        color: #333;
        margin-bottom: 8px;
      }

      h4 {
        color: #666;
        margin-bottom: 16px;
      }

      p {
        color: #555;
      }
    }
  }

  .contact-section {
    max-width: 600px;
    margin: 0 auto;

    .el-card__header {
      text-align: center;
    }
  }
}
</style>