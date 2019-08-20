<template>
  <div>
      <h3>link文字链接</h3>
      <h4>基础用法</h4>
      <el-row>
          <el-link>默认样式</el-link>
          <el-link type="success">success</el-link>
          <el-link type="info">info</el-link>
          <el-link type="primary">primary</el-link>
          <el-link type="warning">warning</el-link>
          <el-link type="danger">danger</el-link>
      </el-row>
      <h4>添加disabled禁用</h4>
      <el-row>
          <el-link type="success" disabled>disabled</el-link>
      </el-row>
      <h4>下划线 :underline属性</h4>
      <el-row>
          <el-link :underline="false">underline  false</el-link>
          <el-link>默认有</el-link>
      </el-row>
      <h4>带图标的文字链接</h4>
      <el-row>
          <el-link icon="el-icon-edit">dfoas</el-link>
          <el-link>view <i class="el-icon-view el-icon--right"></i></el-link>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>