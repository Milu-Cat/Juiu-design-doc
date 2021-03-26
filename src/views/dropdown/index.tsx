import React, { FC } from 'react';
import { Dropdown } from 'juiu-design';
import { } from 'juiu-design/dist/components/Button/button';
import './index.scss';

const DropdownView: FC = (props) => {
  const code =
  `  import { Dropdown } from 'juiu-design';

  <Dropdown overlay={overlay} >Hover it</Dropdown>
  <Dropdown overlay={overlay} trigger="click" >Click it</Dropdown>`

  const overlay = (
    <ul className="handle-list">
      <li onClick={ ()=> { window.open("https://github.com/Milu-Cat/Juiu-design-doc") }}>Github</li>
      <li onClick={() => { window.open("https://www.npmjs.com/package/juiu-design") }}>Npm</li>
    </ul>
  )

  return (
    <div className="dropdown-view">
      <Dropdown overlay={overlay} >Hover it</Dropdown>
      <span style={{marginLeft: '50px'}}></span>
      <Dropdown overlay={overlay} trigger="click" >Click it</Dropdown>
      <pre className="dropdown-code">
      <code>
          {code}
      </code>
      </pre>
      <table className="doc">
        <thead className="doc-header">
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody className="doc-body">
          <tr>
            <td>overlay</td>
            <td>下拉框内容</td>
            <td>FunctionComponent | JSX.Element | string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>trigger?</td>
            <td>触发类型</td>
            <td>string</td>
            <td>hover,click</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DropdownView