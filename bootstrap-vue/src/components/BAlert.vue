<!--
 * @Descripttion: b-alert组件说明
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 16:07:54
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-10 20:30:14
-->
<template>
  <div>
    <h2>b-alert说明</h2>
    <div class="tag-desc">
      给用户提示信息标签；可用于任何长度的文本；可可选的关闭或自动关闭
      <br />
      <h3>属性说明</h3>
      <table border>
        <tbody>
          <tr>
            <td>属性</td>
            <td>属性值类型</td>
            <td>属性值默认值</td>
            <td>属性描述</td>
          </tr>
          <tr>
            <td>show</td>
            <td>Boolean or Number</td>
            <td>false</td>
            <td>
              使用 show 属性控制警报的可见性状态。默认情况下不显示警报。设置
              prop show 以显式显示它们。 show 属性接受布尔值 true 或 false
              来分别显示和隐藏警报。它也可以设置为一个正整数（代表秒）来创建一个自我解除警报。
            </td>
          </tr>
          <tr>
            <td>dismiss-label</td>
            <td>String</td>
            <td>'Close'</td>
            <td>关闭按钮上的“aria-label”属性的值</td>
          </tr>
          <tr>
            <td>dismissiable</td>
            <td>Boolean</td>
            <td>false</td>
            <td>设置后，启用关闭关闭按钮</td>
          </tr>
          <tr>
            <td>fade</td>
            <td>Boolean</td>
            <td>false</td>
            <td>当设置为 `true` 时，启用组件上的淡入淡出动画/过渡</td>
          </tr>
          <tr>
            <td>v-model</td>
            <td>Boolean</td>
            <td>无</td>
            <td>
              您可以使用 v-model 指令在 show
              属性上创建双向数据绑定，要获取关闭状态时很有用，因为当用户关闭警报时，您的变量将被更新。使用
              v-model 时不要使用 show 属性。
            </td>
          </tr>
          <tr>
            <td>variant</td>
            <td>String</td>
            <td>'info'</td>
            <td>将 Bootstrap 主题颜色变体之一应用于组件</td>
          </tr>
        </tbody>
      </table>
      <h3>插槽说明</h3>
      <table border class="m-auto">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>描述</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>dismiss</td>
                  <td>关闭按钮的内容</td>
              </tr>
              <tr>
                  <td>default</td>
                  <td>放置在警报中的内容</td>
              </tr>
          </tbody>
      </table>
      <h3>事件</h3>
      <table border class="m-auto">
          <thead>
              <tr>
                  <th>事件名称</th>
                  <th>参数</th>
                  <th>描述</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>dismiss-count-down</td>
                  <td>dismissCountDown-弹框消失的剩余事件</td>
                  <td>当 prop show 为数字时，此事件在倒计时时每秒发出一次</td>
              </tr>
              <tr>
                  <td>dismissed</td>
                  <td>无</td>
                  <td>通过关闭关闭按钮或关闭倒计时结束时解除警报</td>
              </tr>
              <tr>
                  <td>input</td>
                  <td>show:警报状态，Boolean值或当前倒计时值的数字</td>
                  <td>用于更新 v-model 显示值</td>
              </tr>
          </tbody>
      </table>
    </div>
    <b-alert show>default alert</b-alert>
    <b-alert show variant="success">variant="success"</b-alert>
    <b-alert variant="warning" show>variant="warning"</b-alert>
    <b-alert variant="info" show>variant="info"</b-alert>
    <b-alert variant="danger" show> variant="danger"</b-alert>
    <b-alert v-model="showDismissiableAlert" variant="danger" dismissible
      >Show alert with count-down timer</b-alert
    >
    <b-button @click="showDismissiableAlert = true" variant="info" class="m-1">
      show dismissible alert ({{
        showDismissiableAlert ? "visible" : "hidden"
      }})
    </b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDismissiableAlert: false,
    };
  },
};
</script>