import { FC, useState } from "react";
import { Input } from "juiu-design";
import './index.scss';

const InputView: FC = () => {
  const [value, setValue] = useState("jujiu design");
  const change = (e: string) => { };
  const code =
  `  import { Input } from "juiu-design";

  <Input placeholder="default input" />
  <Input disabled placeholder="disabled input" />
  <Input
    icon="search"
    value={value}
    onChange={(e) => change(e.target.value)}
    placeholder="input with icon"
  />
  <Input placeholder="large size" size="lg" />
  <Input placeholder="small size" size="sm" />
  <Input defaultValue="prepend text" prepend="https://" />
  <Input append=".com" defaultValue="google" />`

  return (
    <div className="input-view">
      <div className="input-container">
        <Input placeholder="default input" />
        <Input disabled placeholder="disabled input" />
        <Input
          icon="search"
          value={value}
          onChange={(e) => change(e.target.value)}
          placeholder="input with icon"
        />
        <Input placeholder="large size" size="lg" />
        <Input placeholder="small size" size="sm" />
        <Input defaultValue="prepend text" prepend="https://" />
        <Input append=".com" defaultValue="google" />
      </div>

      <pre className="input-code">
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
            <td>size?</td>
            <td>input的规格</td>
            <td>InputSize：string</td>
            <td>'lg' | 'sm'</td>
          </tr>
          <tr>
            <td>disabled?</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>true,false</td>
          </tr>
          {/* <tr>
            <td>icon</td>
            <td>button的类型</td>
            <td>ButtonType：string</td>
            <td>Primary = 'primary',Default = 'default',Danger = 'danger',Warning = 'warning',Success = 'success',Link = 'link'</td>
          </tr> */}
          <tr>
            <td>prepend?</td>
            <td>input的前缀</td>
            <td>string | ReactElement</td>
            <td>-</td>
          </tr>
          <tr>
            <td>append?</td>
            <td>input的后缀</td>
            <td>string | ReactElement</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange?</td>
            <td>修改内容后触发</td>
            <td>{`(e: ChangeEvent<HTMLInputElement>) => void`}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputView;
