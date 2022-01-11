<!--
 * @Descripttion: b-aspect 组件可用于保持内容的最小响应纵横比。当内容长于可用高度时，组件将垂直扩展以适应所有内容。如果内容短于计算的纵横比，组件将确保保持最小高度。
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 20:31:39
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 21:00:14
-->
<template>
  <div>
    <h2>b-aspect组件可用于保持内容的最小响应纵横比</h2>
    <h3>属性</h3>

    <table border>
      <thead>
        <tr>
          <th>属性</th>
          <th>类型</th>
          <th>默认值</th>
          <th>描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>aspect</td>
          <td>Number or string</td>
          <td>’1:1‘</td>
          <td>
            纵横比为宽高数字比率（例如 `1.5`）或 `width:height` 字符串（例如
            '16:9'）
          </td>
        </tr>
        <tr>
          <td>tag</td>
          <td>String</td>
          <td>'div'</td>
          <td>指定要呈现的 HTML 标记而不是默认标记</td>
        </tr>
      </tbody>
    </table>

    <h3>插槽</h3>
    <table border="1" class="m-auto">
        <thead>
            <th>
                <td>Name</td>
                <td>描述</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td>default</td>
                <td>b-aspect标签里的内容</td>
            </tr>
        </tbody>
    </table>

    <b-form-group
      label="Aspect ratio"
      label-for="ratio"
      label-cols-md="auto"
      class="mb-3"
    >
      <b-form-select
        id="ratio"
        v-model="aspect"
        :options="aspects"
      ></b-form-select>
    </b-form-group>
    <b-card>
      <b-aspect :aspect="aspect">
        This will always be an aspect of "{{ aspect }}", except when the content
        is too tall.
      </b-aspect>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aspect: "16:9",
      aspects: [
        { text: "4:3 (SD)", value: "4:3" },
        { text: "1:1 (Square)", value: "1:1" },
        { text: "16:9 (HD)", value: "16:9" },
        { text: "1.85:1 (Widescreen)", value: "1.85:1" },
        { text: "2:1 (Univisium/Superscope)", value: "2:1" },
        { text: "21:9 (Anamorphic)", value: "21:9" },
        { text: "1.43:1 (IMAX)", value: "1.43:1" },
        { text: "3:2 (35mm Film)", value: "3:2" },
        { text: "3:1 (APS-P)", value: "3:1" },
        { text: "4/3 (Same as 4:3)", value: 4 / 3 },
        { text: "16/9 (Same as 16:9)", value: 16 / 9 },
        { text: "3 (Same as 3:1)", value: 3 },
        { text: "2 (Same as 2:1)", value: 2 },
        { text: "1.85 (Same as 1.85:1)", value: 1.85 },
        { text: "1.5", value: 1.5 },
        { text: "1 (Same as 1:1)", value: 1 },
      ],
    };
  },
};
</script>