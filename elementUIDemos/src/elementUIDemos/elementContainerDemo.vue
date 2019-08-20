<template>
  <div>
    <h3>布局容器</h3>
    <h4>demo1</h4>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
    <h4>demo2</h4>
    <el-container>
      <el-header>el-header</el-header>
      <el-main>el-main</el-main>
      <el-footer>el-footer</el-footer>
    </el-container>
    <h4>demo3</h4>
    <el-container>
      <el-aside width="200px">el-aside</el-aside>
      <el-main>el-main</el-main>
    </el-container>

    <h4>demo4</h4>
    <el-container>
      <el-header>el-header</el-header>
      <el-container>
        <el-aside>el-aside</el-aside>

        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <h4>demo5</h4>
    <el-container>
      <el-aside>aside</el-aside>
      <el-container>
        <el-header>el-header</el-header>
        <el-main>el-main</el-main>
        <el-footer>el-footer</el-footer>
      </el-container>
    </el-container>
    <h4>demo6</h4>
    <el-container style="height:500px;border:1px solid #eee;">
      <el-aside style="width:200px;background:rgba(238,241,246)">
        <el-menu :default-openeds="['1','3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-meaage"></i>
              导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-2">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="group 2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align:right;font-size:12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right:15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>wangxiaohu</span>
        </el-header>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="data" label="date" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      data: "2016-05-02",
      name: "wangxioahu",
      address: "beijing"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>