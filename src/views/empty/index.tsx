import { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Empty:FC = () => {
  return (
    <div className="empty">
    <div className="kenburns"></div>
    <div className="centered">
        <div className="item-title">
            <div id="message">
                Error 404 <br/>
                <span>Page not found!</span>
            </div>
          <div className="link-bottom">
            <Link to="/home">
              <i className="iconfont iconfanhui" style={{ fontSize: "57px"}}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Empty