<template lang="html">
    <div :class="$style.login">
        <div :class="$style.formContainer">
            <h1>米修在线后台管理系统</h1>
            <el-form :model="loginUser" status-icon :rules="rules" ref="loginForm" label-width="80px" class="loginForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="loginUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginUser.password" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" :class="$style.submit_btn">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginUser: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {
            min: 2, max: 30, message: '长度在2到30个字符之间', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {
            min: 2, max: 30, message: '长度在6到30个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.get('/api/login', this.loginUser)
            .then(res => {
              console.log(res)
              this.$message({
                message: '登陆成功',
                type: 'success'
              })
              const token = res.data.token
              localStorage.setItem('eleToken', token)
              this.$router.push('index')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
    .login{
        height: 100%;
        background: url("http://pic1.win4000.com/wallpaper/2017-12-01/5a20c24775274.jpg") no-repeat;
        display: flex;
        flex-flow: row nowrap;
        justify-items: center;
        align-items: center;
        .formContainer{
            h1{
                line-height: 100px;
            }
            width: 350px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 6px;
            .submit_btn{
                width: 100%;
            }
        }
    }
</style>
