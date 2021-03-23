import { FC } from 'react';
import { Stretch } from 'juiu-design';
import './index.scss';

const StretchView: FC = (props) => {
  const code = `  import { Stretch } from 'juiu-design';

  <Stretch defaultWith='300' defaultHeight='200px' style={{ margin: 'auto' }} >
  <div style={{ width: '100%', height: '100%', background: '#f0f0f0', }}></div>
  </Stretch>`
  return (
    <div className="stretch-view">
      <Stretch defaultWith='300' defaultHeight='200px' stretchXDisabled style={{ margin: 'auto' }} >
        <div style={{ width: '100%', height: '100%', background: '#f0f0f0', }}></div>
      </Stretch>

      <pre className="stretch-code">
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
            <td>defaultWith</td>
            <td>Stretch初始宽度</td>
            <td>string</td>
            <td>'500','50%','500px'</td>
          </tr>
          <tr>
            <td>defaultHeight</td>
            <td>Stretch初始高度</td>
            <td>string</td>
            <td>'500','50%','500px'</td>
          </tr>
          <tr>
            <td>fullWidth</td>
            <td>宽度充满父元素相当于defaultWith="100%", 横向不可延伸</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>fullHeight</td>
            <td>高度充满父元素相当于defaultHeight="100%", 纵向向不可延伸</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>stretchXDisabled</td>
            <td>禁用横向延伸</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
          <tr>
            <td>stretchYDisabled</td>
            <td>禁用纵向延伸</td>
            <td>boolean</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StretchView