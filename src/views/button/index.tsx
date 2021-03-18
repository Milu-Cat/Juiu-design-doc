import React, { FC } from 'react';
import { Button } from 'juiu-design';
import { ButtonType, ButtonSize } from 'juiu-design/dist/components/Button/button';
import './index.scss';

const ButtonView: FC = (props) => {
  const code =
  `  import { Button } from 'juiu-design';
  import { ButtonType, ButtonSize } from 'juiu-design/dist/components/Button/button';

  <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={e => { e.preventDefault();alert('Alert')}}
  >Large Primary</Button>
  <Button btnType={ButtonType.Success}>Default Success</Button>
  <Button btnType={ButtonType.Warning}>Default Warning</Button>
  <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
  <Button onClick={e => { e.preventDefault(); alert('Alert')}}>Default</Button>
  <Button disabled>Disabled</Button>
  <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Link</Button>
  <Button btnType={ButtonType.Link} disabled >Disabled Link</Button>`
  return (
    <div className="button-view">
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={e => { e.preventDefault(); alert('Alert')}}>Large Primary</Button>&nbsp;&nbsp;
        <Button btnType={ButtonType.Success}>Default Success</Button>&nbsp;&nbsp;
        <Button btnType={ButtonType.Warning}>Default Warning</Button>&nbsp;&nbsp;
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>&nbsp;&nbsp;
        <Button onClick={e => { e.preventDefault(); alert('Alert')}}>Default</Button>&nbsp;&nbsp;
        <Button disabled>Disabled</Button>&nbsp;&nbsp;
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Link</Button>&nbsp;&nbsp;
      <Button btnType={ButtonType.Link} disabled >Disabled Link</Button>
      <pre className="button-code">
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
            <td>size</td>
            <td>button的规格</td>
            <td>ButtonSize：string</td>
            <td>Large = 'lg',
              Small = 'sm'</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>true,false</td>
          </tr>
          <tr>
            <td>btnType</td>
            <td>button的类型</td>
            <td>ButtonType：string</td>
            <td>Primary = 'primary',Default = 'default',Danger = 'danger',Warning = 'warning',Success = 'success',Link = 'link'</td>
          </tr>
          <tr>
            <td>children</td>
            <td>Button标签中的子节点</td>
            <td>React.ReactNode</td>
            <td>-</td>
          </tr>
          <tr>
            <td>href</td>
            <td>跳转链接，只能用于btnType='link'</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
interface BaseButtonProps {
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string
}
export default ButtonView