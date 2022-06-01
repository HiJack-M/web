import React from 'react'
import ReactDOM from 'react-dom'
import badGuy from './images/bad_flute.jpeg'
import './search.less'

class Search extends React.Component {
  render() {
    return <div className='search-text'>
      Search Page 搜索页面
      <img src={badGuy} />
    </div>
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))