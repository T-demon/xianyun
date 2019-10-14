<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <!-- 账号 -->
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机号" type="text" v-model="form.username"></el-input>
    </el-form-item>

    <!-- 验证码 -->
    <el-form-item class="form-item" prop="captcha">
      <el-input v-model="form.captcha" placeholder="验证码">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <!-- 你的名字 -->
    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" type="text" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="checkpassword">
      <el-input type="password" v-model="form.checkpassword" autocomplete="off"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click.native="handleregisterSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    // 验证码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        // new Error js原生的错误对象
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        // 验证通过
        callback();
      }
    };

    return {
      form: {
        username: "",
        nickname: "",
        captcha: "",
        password: "",
        checkpassword: ""
      },

      // 表单规则
      rules: {
        username: [ { required: true, message: "请输入用户名", trigger: "blur" }],
        nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        captcha: [{ required: true, message: "请输入密码", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkpassword: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSendCaptcha() {
      this.$axios({
        method: "POST",
        url: "/captchas",
        data: {
          tel: this.form.username // 手机号码
        }
      }).then(res => {
        if (res.status == 200) {
          const data = res.data;
          this.$message.success(`手机验证码为${data.code}`);
        }
      });
    },
    handleregisterSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
        const {checkpassword,...datas} =this.form
          this.$axios({
            url:"/accounts/register",
            method: "POST",
            data:datas
          }).then(res=>{
             if(res.status==200){
                this.$message.success("注册成功")
                const data = res.data
                 this.$store.commit("user/setUserInfo",data)
                this.$router.push('/')
             }
            
          })
        }
        
      });
    }
  }
};
</script>


<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
