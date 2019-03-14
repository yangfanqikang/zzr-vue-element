<template lang="html">
    <div :class="$style.loginRoot">
        <div :class="$style.loginBg">
            <h4>登陆</h4>
            <a-form
                    id="components-form-demo-normal-login"
                    :form="form"
                    class="login-form"
                    @submit="handleSubmit"
            >
                <a-form-item>
                    <a-input
                            v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                            placeholder="Username"
                    >
                        <a-icon
                                slot="prefix"
                                type="user"
                                style="color: rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                            type="password"
                            placeholder="Password"
                    >
                        <a-icon
                                slot="prefix"
                                type="lock"
                                style="color: rgba(0,0,0,.25)"
                        />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox v-decorator="[ 'remember',{
                            valuePropName: 'checked',
                            initialValue: true,
                          }]"
                    >
                        Remember me
                    </a-checkbox>
                    <a class="login-form-forgot" href="">
                        Forgot password
                    </a>
                </a-form-item>
                <a-form-item>
                    <a-button
                            type="primary"
                            html-type="submit"
                            class="login-form-button"
                    >
                        Log in
                    </a-button>
                </a-form-item>
                <a-form-item>
                    Or <a href="">
                    register now!
                </a>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>

export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
    .loginRoot{
        padding-top: 100px;
        height: 100%;
        background: url("http://attach.bbs.miui.com/forum/201812/17/212119wrssrn7rabrclr6f.jpg") no-repeat;
    }
    .loginBg{
        border-radius: 5px;
        box-shadow: 0 0 35px rgba(0,0,0,0.5);
        width: 450px;
        margin: 0 auto;
        background-color: #fff;
        padding: 50px;
        >h4{
            line-height: 50px;
            font-size: 25px;
        }
    }
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
        float: right;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
    .ant-btn-primary{
        width: 100%;}
</style>
