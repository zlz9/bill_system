<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h1>用户登录</h1>
      <el-form-item label="用户名" prop="nickName">
        <el-input
          type="text"
          v-model="ruleForm.nickName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')" class="btn">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        nickName: "",
        password: "",
      },
      rules: {
        nickName: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.$router.push("/index");
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      /**
       * 整理参数发请求
       */
      let { nickName, password } = this.ruleForm;
      this.$http
        .post("/login", { nickName, password })
        .then((result) => {
          console.log(result);
          if (result.data.code == 200) {
            this.$router.push("/index");
            this.open1();
          } else {
            this.open4();
          }
        })
        .catch((err) => {
          this.open4();
          console.log(err);
        });
    },
    open1() {
      this.$message({
        message: "登录成功",
        type: "success",
      });
    },
    open4() {
      this.$message.error("登录失败,请检查");
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  background-image: url(../login/img/bj.jpg);
  background-size: 100%;
  height: 800px;
}
.demo-ruleForm {
  margin: 0 auto;
  position: relative;
  width: 600px;
  height: 600px;
  top: 200px;
  h1 {
    text-align: center;
    color: rgb(218, 178, 178);
  }
  .el-input {
    width: 400px;
  }
  .btn {
    position: relative;
    left: 50%;
  }
}
</style>
