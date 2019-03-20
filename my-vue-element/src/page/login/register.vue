<template lang="html">
    <div :class="$style.register">
        <div :class="$style.formContainer">
            <h1>米修在线后台管理系统</h1>
            <el-form :model="registerUser" status-icon :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input type="text" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerUser.password" ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input type="password" v-model="registerUser.password2" ></el-input>
                </el-form-item>
                <el-form-item label="选择身份">
                    <el-select v-model="registerUser.identity" placeholder="选择身份">
                        <el-option label="管理员" value="manage"></el-option>
                        <el-option label="普通员工" value="employee"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')" :class="$style.submit_btn">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerUser: {
        name: '',
        email: '',
        password: '',
        password2: '',
        identity: ''
      },
      rules: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {
            min: 2, max: 30, message: '长度在2到30个字符之间', trigger: 'blur' }
        ],
        email: [
          {required: true, type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          {
            min: 2, max: 30, message: '长度在6到30个字符之间', trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/api/register', this.registerUser)
            .then(res => {
              console.log(res)
              this.$message({
                message: '账号注册成功',
                type: 'success'
              })
              this.$router.push('/login')
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
.register{
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
