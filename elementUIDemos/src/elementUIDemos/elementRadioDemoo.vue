<template>
  <div>
    <h3>Radio单选框</h3>
    <h4>基础用法</h4>
    <el-row>
      <el-radio v-model="demo1Radio" label="1">man</el-radio>
      <el-radio v-model="demo1Radio" label="2">woman</el-radio>
      <p>{{demo1Radio}}</p>
    </el-row>
    <h3>单选框组</h3>
    <el-row>
      <el-radio-group v-model="demo2Radio">
        <el-radio :label="3">first</el-radio>
        <el-radio :label="4">second</el-radio>
        <el-radio :label="5">third</el-radio>
      </el-radio-group>
    </el-row>
    <h3>按钮样式的单选组合 可以通过size属性使用定义好的按钮</h3>
    <el-row>
      <el-radio-group v-model="radioButton1">
        <el-radio-button label="shanghai"></el-radio-button>
        <el-radio-button label="beijing"></el-radio-button>
        <el-radio-button label="guangzhou"></el-radio-button>
        <el-radio-button label="shenzhen"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group size="medium" v-model="radioButton2" fill="red">
        <el-radio-button label="shanghai"></el-radio-button>
        <el-radio-button label="beijing"></el-radio-button>
        <el-radio-button label="guangzhou"></el-radio-button>
        <el-radio-button label="shenzhen"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radioButton3" size="small">
        <el-radio-button label="shanghai"></el-radio-button>
        <el-radio-button label="beijing"></el-radio-button>
        <el-radio-button label="guangzhou"></el-radio-button>
        <el-radio-button label="shenzhen"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <el-radio-group v-model="radioButton4" size="mini">
        <el-radio-button label="shanghai"></el-radio-button>
        <el-radio-button label="beijing"></el-radio-button>
        <el-radio-button label="guangzhou"></el-radio-button>
        <el-radio-button label="shenzhen"></el-radio-button>
      </el-radio-group>
    </el-row>
    <h3>带有边框的单选按钮</h3>
    <el-row>
      <el-radio v-model="radioBorder1" :label="1" border>选项一</el-radio>
      <el-radio v-model="radioBorder1" :label="2" border>选项二</el-radio>
      <p>
          {{
              radioBorder1
          }}
      </p>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo1Radio: "1",
      demo2Radio: 4,
      radioButton1: "beijing",
      radioButton2: "shanghai",
      radioButton3: "guangzhou",
      radioButton4: "shenzhen",
      radioBorder1: 1
    };
  }
};
</script>

<style lang="scss" scoped>
</style>