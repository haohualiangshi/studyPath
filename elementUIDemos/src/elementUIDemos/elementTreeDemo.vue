<template>
  <div>
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>

    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree2"
      show-checkbox
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>

        <!-- <span>{{data}}</span> -->
        <span v-if="!!data.children&&data.children.length>0&&data.children[0].type=='1'">
          <el-checkbox v-for="item in data.children" :key="item.id" :label="item.id">{{item.label}}</el-checkbox>
        </span>
        <!-- <span>
          <el-button type="text" size="mini" @click="() => append(data)">Append</el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
        </span>-->
      </span>
    </el-tree>
    <!-- {{filterTextComputed}} -->
    <el-checkbox :checked="checked" :label="checked"></el-checkbox>
    <el-button @click="changeChecked()" type="primary">{{checked}}</el-button>
  </div>
</template>


<script>
export default {

  methods: {
    //不会返回匹配的node的子节点
    filterNode(value, data) {
      console.log(value, data);
      if (!value) return true;
      return data.type == "0";
    },
    changeChecked() {
      console.log(this.checked);
      this.checked = !this.checked;
    }
  },

  data() {
    return {
      filterText: "1",
      data2: [
        {
          id: 1,
          label: "一级 1",
          type: "0",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              type: "0",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                  type: "1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                  type: "1"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          type: "0",
          children: [
            {
              id: 5,
              label: "二级 2-1",
              type: "1"
            },
            {
              id: 6,
              label: "二级 2-2",
              type: "1"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          type: "0",
          children: [
            {
              id: 7,
              label: "二级 3-1",
              type: "1"
            },
            {
              id: 8,
              label: "二级 3-2",
              type: "1"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        type: "type"
      },
      checked: true
    };
  },
  mounted: function() {
    this.$refs.tree2.filter("0");
  }
};
</script>