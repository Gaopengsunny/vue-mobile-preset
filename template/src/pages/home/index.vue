<template>
  <div class="page">
    <van-button>click me</van-button>
    <div class="button"></div>
    <test />
  </div>
</template>

<script>
import test from '@/components/test'
export default {
  components: { test }
}
</script>

<style lang="scss" scoped>
.button {
  width: 375px;
  height: 44px;
  background-color: aqua;
}
</style>
