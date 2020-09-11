<template>
  <el-button @click="ExitFun" type="info">退出登录</el-button>
</template>

<script>
export default {
  methods: {
    ExitFun () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
