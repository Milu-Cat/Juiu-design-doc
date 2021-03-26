import React, { FC } from 'react';
import { Upload, Icon } from 'juiu-design';
// import { ButtonType, ButtonSize } from 'juiu-design/dist/components/Button/button';
import './index.scss';

const UploadView: FC = (props) => {
  const code =
  `  import { Upload, Icon } from 'juiu-design';

  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    drag
    multiple
    name="fileName"
    onChange={function noRefCheck(){}}
    onRemove={function noRefCheck(){}}>
    <Icon type="icon064upload02" style={{fontSize: "40px"}}></Icon>
    <p>
      点击或者拖动到此区域进行上传
    </p>
  </Upload>`
  return (
    <div className="upload-view">
      <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            drag
            multiple
            name="fileName"
            onChange={function noRefCheck(){}}
            onRemove={function noRefCheck(){}}
          >
            <Icon type="icon064upload02" style={{fontSize: "40px"}}></Icon>
            <p>
              点击或者拖动到此区域进行上传
            </p>
          </Upload>
      <pre className="upload-code">
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
            <td>action</td>
            <td>上传的地址</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>headers?</td>
            <td>设置上传的请求头部</td>
            <td>{ `{[key: string]: any }`}</td>
            <td>-</td>
          </tr>
          <tr>
            <td>name?</td>
            <td>发到后台的文件参数名</td>
            <td>string</td>
            <td></td>
          </tr>
          <tr>
            <td>defaultFileList?</td>
            <td>默认已经上传的文件列表</td>
            <td>UploadFile[]</td>
            <td>{ `{
              uid: string;
              size: number;
              name: string;
              status?: UploadFileStatus;
              percent?: number;
              raw?: File;
              response?: any;
              error?: any;
            }`}</td>
          </tr>
          <tr>
            <td>data?</td>
            <td>上传所需额外参数或返回上传额外参数的方法</td>
            <td>{ `{[key: string]: any }` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>accept?</td>
            <td>接受上传的文件类型<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">input accept Attribute</a></td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>multiple?</td>
            <td>是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件</td>
            <td>boolean</td>
            <td>true,false</td>
          </tr>
          <tr>
            <td>drag?</td>
            <td>是否支持拖拽上传</td>
            <td>boolean</td>
            <td>true,false</td>
          </tr>
          <tr>
            <td>beforeUpload?</td>
            <td>上传前调用</td>
            <td>{ `(file: File) => boolean | Promise<File>` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onProgress?</td>
            <td>上传过程中调用</td>
            <td>{ `(percentage: number, file: File) => void` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onSuccess?</td>
            <td>上传成功后调用</td>
            <td>{ `(data: any, file: File) => void` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onError?</td>
            <td>上传失败调用</td>
            <td>{ `(err: any, file: File) => void` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onChange?</td>
            <td>上传文件改变时调用</td>
            <td>{ `(file: File) => void` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onRemove?</td>
            <td>点击移除文件时的回调</td>
            <td>{ `(file: UploadFile) => void` }</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UploadView