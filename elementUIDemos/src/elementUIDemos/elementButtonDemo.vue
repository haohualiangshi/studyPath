<template>
  <div>
    <h3>Button</h3>
    <h4>基础用法</h4>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">danger</el-button>
    </el-row>
    <h4>添加plain属性</h4>
    <el-row>
      <el-button plain>plain属性</el-button>
      <el-button type="primary" plain>primary</el-button>
      <el-button type="success" plain>success</el-button>
      <el-button type="info" plain>info</el-button>
      <el-button type="danger" plain>danger</el-button>
      <el-button type="warning" plain>warning</el-button>
    </el-row>
    <h4>圆角按钮 round属性</h4>
    <el-row>
      <el-button round>默认</el-button>
      <el-button round type="pirmary">primary</el-button>
      <el-button round type="success">success</el-button>
      <el-button round type="info">info</el-button>
      <el-button round type="warning">warning</el-button>
      <el-button round type="danger">danger</el-button>
    </el-row>
    <h4>icon 功能性icon按钮 circle属性渲染圆</h4>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-edit" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
     
    </el-row>
    <h4>禁用按钮disabled</h4>
    <el-button type="success" :disabled="true">disabled</el-button>
    <h4>文字按钮</h4>
    <el-row>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>disabled model</el-button>
    </el-row>
    <h4>图标按钮</h4>
    <el-row>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-search">search</el-button>
      <el-button type="primary">upload <i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>
    <h4>按钮组
    </h4>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">preview</el-button>
        <el-button type="primary">next <i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </el-row>
    <h4>loading属性</h4>
    <el-row>
      <el-button type="primary" :loading="true">loading</el-button>
    </el-row>

    <h4>通过size属性设置不同的按钮大小</h4>
    <el-row>
      <el-button type="primary" size="medium">medium</el-button>
      <el-button type="primary" size="small">small</el-button>
      <el-button type="primary" size="mini">mini</el-button>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-row{
  margin-top:20px;
}
</style>