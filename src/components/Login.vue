<template>
  <div class="container">
    <div class="login_box">
      <div class="box">
        <img src="../assets/logo.png"
             alt />
      </div>
      <el-form :model="fromLogin"
               :rules="fromRules"
               ref="fromRef"
               class="form_box"
               label-width="0px">
        <el-form-item prop="username">
          <el-input v-model="fromLogin.username"
                    prefix-icon="iconfont icon-user"
                    placeholder="填写用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="fromLogin.password"
                    prefix-icon="iconfont icon-3702mima"
                    placeholder="填写密码"></el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click.native="loginFun()">登录</el-button>
          <el-button type="info" @click.native="resetFun()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fromLogin: {
        username: 'admin',
        password: '123456'
      },
      fromRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          {
            min: 3,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          {
            min: 6,
            max: 20,
            message: '长度在 3 到 20 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    loginFun () {
      this.$refs.fromRef.validate(async valid => {
        if (!valid) {
          return
        }
        const { data: res } = await this.$http.post('login', this.fromLogin)
        if (res.meta.status === 200) {
          window.sessionStorage.setItem('token', res.data.token)
          this.message({
            message: '恭喜你，登录成功',
            type: 'success'
          })
          this.$router.push('/exit')
        } else {
          this.message.error('登录失败')
        }
      })
    },
    resetFun () {
      this.$refs.fromRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
  .login_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: aliceblue;
    .box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      // background-color: pink;
      img {
        border-radius: 50%;
      }
    }
    .form_box {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
