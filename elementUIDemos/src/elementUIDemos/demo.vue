<template>
  <div>
    <h3>Layout布局</h3>
    <h4>基础布局 :span</h4>
    <div id="base-layout">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">:span=24</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">:span=12</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">:span=12</div>
        </el-col>
      </el-row>
    </div>
    <h4>分栏间隔 :gutter</h4>
    <el-row :gutter="20" id="gutter">
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <h4>分栏偏移 :offset</h4>
    <el-row>
      <el-col :span="6">
        <div class="gride-content bg-purple"></div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row tag="ol" :gutter="20">
      <el-col tag="li">first</el-col>
      <el-col tag="li">second</el-col>
      <el-col tag="li">third</el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>