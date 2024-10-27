<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref<HTMLElement>()
let chart: echarts.ECharts | null = null

const graphData = {
  nodes: [
    { name: 'Traditional Chinese Medicine', symbolSize: 50, category: 0 },
    { name: 'Acupuncture', symbolSize: 40, category: 1 },
    { name: 'Herbal Medicine', symbolSize: 40, category: 1 },
    { name: 'Meridians', symbolSize: 30, category: 2 },
    { name: 'Qi', symbolSize: 30, category: 2 },
    { name: 'Five Elements', symbolSize: 30, category: 2 },
    { name: 'Yin Yang', symbolSize: 30, category: 2 }
  ],
  links: [
    { source: 'Traditional Chinese Medicine', target: 'Acupuncture' },
    { source: 'Traditional Chinese Medicine', target: 'Herbal Medicine' },
    { source: 'Acupuncture', target: 'Meridians' },
    { source: 'Acupuncture', target: 'Qi' },
    { source: 'Herbal Medicine', target: 'Five Elements' },
    { source: 'Herbal Medicine', target: 'Yin Yang' }
  ]
}

const initChart = () => {
  if (!chartContainer.value) return

  chart = echarts.init(chartContainer.value)
  const option = {
    title: {
      text: 'TCM Knowledge Graph',
      subtext: 'Core Concepts and Relationships',
      top: 'top',
      left: 'center'
    },
    tooltip: {},
    legend: {
      data: ['Core Concept', 'Primary Branch', 'Secondary Concept'],
      bottom: 10
    },
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
      name: 'TCM Knowledge Graph',
      type: 'graph',
      layout: 'force',
      data: graphData.nodes,
      links: graphData.links,
      categories: [
        { name: 'Core Concept' },
        { name: 'Primary Branch' },
        { name: 'Secondary Concept' }
      ],
      roam: true,
      label: {
        show: true,
        position: 'right'
      },
      force: {
        repulsion: 200
      }
    }]
  }

  chart.setOption(option)
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => chart?.resize())
})
</script>

<template>
  <div class="knowledge-graph">
    <el-row class="controls">
      <el-col :span="24">
        <el-input
          placeholder="Search concepts..."
          prefix-icon="Search"
          class="search-input"
        />
        <el-button-group class="view-controls">
          <el-button>Zoom In</el-button>
          <el-button>Zoom Out</el-button>
          <el-button>Reset</el-button>
        </el-button-group>
      </el-col>
    </el-row>

    <div ref="chartContainer" class="chart-container"></div>

    <el-row class="legend">
      <el-col :span="24">
        <h3>Graph Legend</h3>
        <p>Explore the relationships between different TCM concepts by interacting with the graph above.</p>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.knowledge-graph {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .controls {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 16px;

    .search-input {
      width: 300px;
    }

    .view-controls {
      margin-left: 16px;
    }
  }

  .chart-container {
    flex-grow: 1;
    min-height: 600px;
  }

  .legend {
    margin-top: 20px;
    text-align: center;

    h3 {
      margin-bottom: 10px;
    }

    p {
      color: #666;
    }
  }
}
</style>