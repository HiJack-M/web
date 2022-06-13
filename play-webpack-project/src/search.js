import React from 'react'
import ReactDOM from 'react-dom'
// import badGuy from './images/bad_flute.jpeg'
import duckImg from './images/duck.png'
import './search.less'

class Search extends React.Component {
  render() {
    return <div className='search-text'>
      Search Page 搜索页面
      <img src={duckImg} />
    </div>
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))
