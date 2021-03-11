import { FC } from 'react';
import './style.scss'

const Loading: FC = () => {
  return (
    <div className="loading">
      <div id="loading-center-absolute">
        <div className="object" id="object_one"></div> 
        <div className="object" id="object_two" style={{ left: '15px' }}></div>
          <div className="object" id="object_three" style={{left: '30px'}}></div>
          <div className="object" id="object_four" style={{left: '45px'}}></div>
          <div className="object" id="object_five" style={{left: '60px'}}></div>
        </div>
    </div>
  )
}

export default Loading