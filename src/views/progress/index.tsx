import { FC, useState } from "react";
import { Progress } from "juiu-design";
import './index.scss';

const InputView: FC = () => {
  const [value, setValue] = useState("jujiu design");
  const change = (e: string) => { };
  const code =
  `  import { Progress } from "juiu-design";

  <Progress percent={10} showText theme="success" styles={styles}></Progress>  
  <Progress percent={20} showText theme="primary" styles={styles}></Progress>
  <Progress percent={30} showText theme="secondary" styles={styles}></Progress>
  <Progress percent={40} showText theme="info" styles={styles}></Progress>
  <Progress percent={50} showText theme="warning" styles={styles}></Progress>
  <Progress percent={60} showText theme="danger" styles={styles}></Progress>
  <Progress percent={70} showText theme="light" styles={styles}></Progress>
  <Progress percent={80} showText theme="dark" styles={styles}></Progress>`

  const styles = {
    marginBottom: "10px"
  }
  return (
    <div className="progress-view">
      <div className="progress-container">
        <Progress percent={10} showText theme="success" styles={styles}></Progress>  
        <Progress percent={20} showText theme="primary" styles={styles}></Progress>
        <Progress percent={30} showText theme="secondary" styles={styles}></Progress>
        <Progress percent={40} showText theme="info" styles={styles}></Progress>
        <Progress percent={50} showText theme="warning" styles={styles}></Progress>
        <Progress percent={60} showText theme="danger" styles={styles}></Progress>
        <Progress percent={70} showText theme="light" styles={styles}></Progress>
        <Progress percent={80} showText theme="dark" styles={styles}></Progress>
      </div>

      <pre className="progress-code">
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
            <td>percent</td>
            <td>百分比数字</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>showText?</td>
            <td>是否显示百分比文本</td>
            <td>boolean</td>
            <td>true,false</td>
          </tr>
          <tr>
            <td>strokeHeight?</td>
            <td>Progress的高度单位为px</td>
            <td>number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>styles?</td>
            <td>Progress的样式</td>
            <td>React.CSSProperties</td>
            <td>-</td>
          </tr>
          <tr>
            <td>theme?</td>
            <td>Progress的主题</td>
            <td>string</td>
            <td>"primary"，"secondary"，
              "success"，"info"，"warning"，
              "danger"，"light"，"dark"</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InputView;
