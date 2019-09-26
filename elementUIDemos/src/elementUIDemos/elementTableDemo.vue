<template>
  <div>
    <h3>table表格</h3>
    <h4>基础表格</h4>
    <el-table :data="tableData" style="width:100%;">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <h4>带斑马纹表格</h4>
    <el-table :data="tableData" :stripe="true">
      <el-table-column prop="date" label="date"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="address" label="address"></el-table-column>
    </el-table>
    <h4>带边框表格</h4>
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="date"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="address" label="address"></el-table-column>
    </el-table>
    <h4>固定表头</h4>
    <el-table :data="tableData" height="250" border>
      <el-table-column prop="date" label="date"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="address" label="address"></el-table-column>
    </el-table>

    <h4>固定列</h4>
    <el-table :data="fixedColumnData" border>
      <el-table-column fixed prop="date" label="date"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      fixedColumnData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style>
</style>