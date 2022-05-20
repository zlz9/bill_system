<template>
  <div class="RecordMoney">
    <el-row :gutter="20">
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="80px" class="form">
            <el-form-item label="消费金额">
              <el-input v-model="form.money"></el-input>
            </el-form-item>
            <el-form-item label="花费时间">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  v-model="form.dataTime"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
              <el-col class="line" :span="2"></el-col>
            </el-form-item>
            <el-form-item label="花费性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食" name="type"></el-checkbox>
                <el-checkbox label="出行" name="type"></el-checkbox>
                <el-checkbox label="房租" name="type"></el-checkbox>
                <el-checkbox label="衣服" name="type"></el-checkbox>
                <el-checkbox label="请客" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="form.comment"
                @keyup="onSubmit"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div></el-col
      >
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <img id="img" src="./img/savemoney.jpg" alt="" srcset="" /></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "RecordMoney",
  data() {
    return {
      form: {
        money: "",
        dataTime: "",
        type: [],
        comment: "",
      },
    };
  },

  methods: {
    /**
     * 整理参数发请求
     */
    onSubmit() {
      let { money, dataTime, comment } = this.form;
      if (money && dataTime && comment) {
        this.$http
          .post("publishrecord", { money, dataTime, comment })
          .then(() => {
            this.open2();
            setTimeout(() => {
              this.$router.push("/index");
            }, 1000);
          })
          .catch(() => {
            this.open4();
          });
      }
      console.log("submit!");
    },
    open2() {
      this.$message({
        message: "发布成功",
        type: "success",
      });
    },
    open4() {
      this.$message.error("出现错误，联系管理员");
    },
  },
  updated() {
    console.log(this.form.dataTime);
  },
};
</script>

<style lang="less" scoped>
.form {
  position: relative;
  width: 800px;
}
#img {
  position: relative;
  width: 100%;
  height: 10%;
  right: 250px;
}
</style>
