<template>
  <div id="main">
    <MainContent />
    <Notice />
    <HbNotice />
    <DepNotice />
  </div>
</template>

<script>

import MainContent from '@/components/mainview/MainContent.vue'
import Notice from '@/components/mainview/Notice.vue'
import HbNotice from '@/components/mainview/HbNotice.vue'
import DepNotice from '@/components/mainview/DepNotice.vue'

export default {
  name: 'main',
  components: {
    MainContent,
    Notice,
    HbNotice,
    DepNotice,
  }
}
</script>

<style>
@import './assets/style/main.css';
</style>