<template>
  <div class="MoneyRecord">
    <el-table
      :data="tableData"
      min-height="650"
      style="width: 90%; margin: 0 auto"
    >
      <el-table-column prop="" label="索引" width="100" type="index">
      </el-table-column>
      <el-table-column prop="money" label="消费金额(￥)" width="300">
      </el-table-column>
      <el-table-column prop="dataTime" label="日期" width="300">
      </el-table-column>
      <el-table-column prop="comment" label="备注"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :hide-on-single-page="value"
      @current-change="changePage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "MoneyRecord",
  data() {
    return {
      tableData: [],
      total: 0,
      value: false,
      pageParams: {
        page: 1,
        pageSize: 8,
      },
    };
  },
  mounted() {
    this.getRecord();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      /**
       * 整理参数发请求
       */
      let { id } = row;
      console.log(row, "id");
      if (id) {
        this.$http
          .delete(`/delRecrod?id=${id}`)
          .then((result) => {
            this.open2();
            setTimeout(() => {
              this.getRecord();
            }, 1000);
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getRecord() {
      let { page, pageSize } = this.pageParams;
      this.$http
        .get("/record", { params: { page, pageSize } })
        .then((result) => {
          this.tableData = result.data.data.data;
          this.total = result.data.data.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    open2() {
      this.$message({
        message: "删除成功",
        type: "success",
      });
    },
    changePage(page) {
      console.log(page);
      this.pageParams.page = page;
      console.log(this.page);
      this.getRecord();
    },
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  top: 50px;
  position: relative;
  left: 35%;
  width: 300px;
}
</style>
