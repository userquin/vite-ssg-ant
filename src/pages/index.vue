<script setup lang="ts">
import { useHead } from '@vueuse/head'
const router = useRouter()

const error = ref('test')
useHead({
  // Can be static or computed
  title: 'Welcome to our home',
  meta: [
    {
      name: 'description',
      content: 'bla bla',
    },
  ],
})

</script>

<template>
  <div>
    <a-alert :message="error" type="error" v-if="error"/>
    aaa
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 200px;
  line-height: 200px;
  background: rgba(0, 0, 0, 0.2);
  /* background: #364d79; */
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

</style>
