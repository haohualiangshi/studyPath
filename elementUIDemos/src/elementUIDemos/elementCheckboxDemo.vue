<template>
  <div>
    <h3>checkbox多选框</h3>
    <h4>基础用法</h4>
    <el-row>
      <el-checkbox v-model="baseData">选项</el-checkbox>
    </el-row>
    <el-row>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox label="1">复选框A</el-checkbox>
        <el-checkbox label="2">复选框B</el-checkbox>
        <el-checkbox label="3">复选框C</el-checkbox>
        <el-checkbox label="4" disabled>禁用复选框</el-checkbox>
        <el-checkbox label="5" disabled>禁用且选中</el-checkbox>
      </el-checkbox-group>
    </el-row>
    <h4>indeterminate 状态用来全选</h4>
    <el-row>
      <el-checkbox
        :indeterminate="indeterminateState"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >checkAll</el-checkbox>
      <el-checkbox-group v-model="checkedCities">
        <el-checkbox v-for="city in cities" :key="city" :label="city" border>{{city}}</el-checkbox>
      </el-checkbox-group>
      <p>{{ checkedCities.length}}</p>
    </el-row>
    <h4>可选项目数量的限制，按钮样式</h4>
    <el-row>
      <el-checkbox-group :min="1" :max="2" v-model="checkedCities">
        <el-checkbox-button border v-for="city in cities" :key="city" :label="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
   
  </div>
</template>

<script>
const cityOptions = ["beijing", "shanghai", "guangzhou", "shenzhen"];
export default {
  data() {
    return {
      baseData: true,
      checkboxGroup1: ["1", "5"],
      indeterminateState: true,
      checkedCities: ["shanghai", "beijing"],
      cities: cityOptions,
      checkAll: false
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.indeterminateState = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount == this.cities.length;
      this.indeterminateState =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style>
</style>