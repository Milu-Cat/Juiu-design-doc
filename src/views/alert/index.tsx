import React, { FC } from 'react';
import { Alert } from 'juiu-design';
import { AlertType } from 'juiu-design/dist/components/Alert/alert';
import './index.scss'

const AlertView: FC = (props) => {
  const code =
  `  import { Alert } from 'juiu-design';
  import { AlertType } from 'juiu-design/dist/components/Alert/alert';

  <Alert message="橘九是只猫" description="橘九是只猫,除了睡觉就是捣乱。"></Alert>
  <Alert message="橘九是只猫" type={AlertType.Success}></Alert>
  <Alert message="橘九是只猫" type={AlertType.Warning} closable></Alert>
  <Alert message="橘九是只猫" type={AlertType.Danger} description="橘九是只猫,除了睡觉就是捣乱。" closable></Alert>`
  return (
    <div className="alert-view">
      <Alert message="橘九是只猫" description="橘九是只猫,除了睡觉就是捣乱。"></Alert>
      <div style={{ height: '10px' }}></div>
      <Alert message="橘九是只猫" type={AlertType.Success}></Alert>
      <div style={{ height: '10px' }}></div>
      <Alert message="橘九是只猫" type={AlertType.Warning} closable></Alert>
      <div style={{ height: '10px' }}></div>
      <Alert message="橘九是只猫" type={AlertType.Danger} description="橘九是只猫,除了睡觉就是捣乱。" closable></Alert>
      <pre className="alert-code">
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
            <td>type?</td>
            <td>Alert的类型</td>
            <td>AlertType：string</td>
            <td>Danger = 'danger',
              Warning = 'warning',
              Success = 'success',
              Info = 'info'</td>
          </tr>
          <tr>
            <td>message?</td>
            <td>提示信息</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>description?</td>
            <td>描述</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>closable?</td>
            <td>是否显示关闭按钮</td>
            <td>boolean</td>
            <td>true, false</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AlertView