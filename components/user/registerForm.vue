<template>
  <div>
    <el-form :model="form" ref="form" :rules="rules" class="form">
      <!-- 账号 -->
      <el-form-item class="form-item" prop="username">
        <el-input placeholder="用户名/手机号" type="text" v-model="form.username"></el-input>
      </el-form-item>

      <!-- 验证码 -->
      <el-form-item class="form-item">
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

      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>

      <!--确认密码 -->
      <el-form-item class="form-item">
        <el-input v-model="form.checkPassword" placeholder="确认密码" type="password"></el-input>
      </el-form-item>

      <el-button class="submit" type="primary" @click="handleregisterSubmit">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
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
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleregisterSubmit() {},
    handleSendCaptcha() {}
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
