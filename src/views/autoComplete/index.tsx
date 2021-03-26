import React, { FC } from 'react';
import { AutoComplete } from 'juiu-design';
import { DataSourceType } from 'juiu-design/dist/components/AutoComplete/autoComplete';
import './index.scss';

const AutoCompleteView: FC = (props) => {
  const code =
  `  import { AutoComplete } from 'juiu-design';
  import { DataSourceType } from 'juiu-design/dist/components/AutoComplete/autoComplete';

  const getList = (val: string) => {
    //可以根据val来进行数据查询，最终返回一个object[]
    return [
      {
        value: val + 'juiu design'
      }
    ]
  }
  const getItemElement = (val: DataSourceType) => {
    // 根据不同的情况渲染不同的dom风格
    return (
      <div>{ val.value }</div>
    )
  }
  <AutoComplete fetchSuggestions={getList} renderOption={getItemElement}></AutoComplete>`
  const getList = (val: string) => {
    return [
      {
        value: val + 'juiu design'
      }
    ]
  }

  const getItemElement = (val: DataSourceType) => {
    return (
      <div>{ val.value }</div>
    )
  }
  return (
    <div className="auto-compete-view">
      <AutoComplete fetchSuggestions={getList} renderOption={getItemElement}></AutoComplete>
      <pre className="auto-compete-code">
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
            <td>fetchSuggestions</td>
            <td>接收一个参数(input.value)，根据参数查询自动补全的值</td>
            <td>{ `(str: string) => DataSourceType[] | Promise<DataSourceType[]>` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>renderOption?</td>
            <td>根据fetchSuggestions中的item.value来自定义dom风格</td>
            <td>{ `(item: DataSourceType) => ReactElement` }</td>
            <td>-</td>
          </tr>
          <tr>
            <td>onSelect?</td>
            <td>被选中时调用，参数为选中项的 value 值</td>
            <td>{`(item: DataSourceType) => void`}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AutoCompleteView