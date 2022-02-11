<!--
 * @Descripttion: 
 * @version: 
 * @Author: ahao
 * @Date: 2022-01-10 20:47:41
 * @LastEditors: ahao
 * @LastEditTime: 2022-01-11 16:31:22
-->
<template>
  <div>
    <h2>Avatar</h2>
    <div class="tag-desc">
      Avatars 是 BootstrapVue
      自定义组件，通常用于将用户配置文件显示为图片、图标或短文本。 b-avatar
      提供了几个属性来自定义其外观，例如颜色变化和圆度，并且可以选择支持充当按钮、链接或路由器链接。
    </div>
    <h3>属性</h3>
    <table border="1">
      <thead>
        <tr>
          <th>属性名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>属性描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>active-class</td>
          <td>String</td>
          <td></td>
          <td>
            router-link 属性：配置当链路处于活动状态时应用的活动 CSS
            类。通常，您需要将其设置为类名“active”
          </td>
        </tr>
        <tr>
          <td>alt</td>
          <td>String</td>
          <td>'avatar'</td>
          <td>放置在图像和图标头像的“alt”属性中的值</td>
        </tr>
        <tr>
          <td>append</td>
          <td>Boolean</td>
          <td>false</td>
          <td>router-link属性设置 append 属性总是将相对路径附加到当前路径</td>
        </tr>
        <tr>
          <td>badge</td>
          <td>Boolean or String</td>
          <td>false</td>
          <td>
            当 `true` 在头像上显示一个空的徽章时，或者设置为徽章中内容的字符串
          </td>
        </tr>
        <tr>
          <td>badge-left</td>
          <td>Boolean</td>
          <td>false</td>
          <td>当 `true` 将徽章放在左侧而不是右侧</td>
        </tr>
        <tr>
          <td>badge-top</td>
          <td>Boolean</td>
          <td>false</td>
          <td>当 `true` 将徽章放在顶部而不是底部</td>
        </tr>
        <tr>
          <td>button</td>
          <td>Boolean</td>
          <td>false</td>
          <td>设置为 `true` 时，将头像呈现为按钮</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>当设置为 `true` 时，禁用组件的功能并将其置于禁用状态</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td></td>
          <td>
            用于头像的图标名称。必须全部小写。如果未提供 `text` 或 `src`
            道具，则默认为 `person-fill`
          </td>
        </tr>
        <tr>
          <td>rounded</td>
          <td>Boolean or String</td>
          <td>false</td>
          <td>指定要应用于头像的舍入类型。 `square` 属性优先。</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Number or String</td>
          <td></td>
          <td>头像的大小</td>
        </tr>
        <tr>
          <td>square</td>
          <td>Boolean</td>
          <td>false</td>
          <td>使用方形图片</td>
        </tr>
        <tr>
          <td>src</td>
          <td>String</td>
          <td></td>
          <td>用于头像的图像 URL</td>
        </tr>
        <tr>
          <td>text</td>
          <td>String</td>
          <td></td>
          <td>放置在头像中的文字</td>
        </tr>
        <!-- <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> -->
      </tbody>
    </table>
    <h3>slot</h3>
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>badge</td>
                <td>放置在头像可选徽章中的内容。覆盖 `badge`属性</td>
            </tr>
            <tr>
                <td>default</td>
                <td>定义avatar中的内容</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
