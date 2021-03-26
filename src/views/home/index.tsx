import React, {FC} from 'react';
import './style.scss'

const Home:FC = () => {
  return (
    <div className="home">
      <h5>组件一览</h5><span>组件文档中参数后面如果有"?",说明该参数可选,例如Button中的参数：size?</span>
      <table className="doc">
        <thead className="doc-header">
          <tr>
            <th>组件</th>
            <th>说明</th>
            {/* <th>类型</th>
            <th>值</th> */}
          </tr>
        </thead>
        <tbody className="doc-body">
          <tr>
            <td>Button</td>
            <td>按钮组件</td>
          </tr>
          <tr>
            <td>Alert</td>
            <td>提示语组件</td>
          </tr>
          <tr>
            <td>Stretch</td>
            <td>边缘可拖拽尺寸动态组件</td>
          </tr>
          <tr>
            <td>Dropdown</td>
            <td>下拉菜单组件</td>
          </tr>
          <tr>
            <td>Menu</td>
            <td>导航菜单组件</td>
          </tr>
          <tr>
            <td>Input</td>
            <td>输入框组件</td>
          </tr>
          <tr>
            <td>Icon</td>
            <td>图标组件</td>
          </tr>
          <tr>
            <td>Upload</td>
            <td>上传组件</td>
          </tr>
          <tr>
            <td>AutoComplete</td>
            <td>自动补全组件</td>
          </tr>
          <tr>
            <td>Progress</td>
            <td>进度组件</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home