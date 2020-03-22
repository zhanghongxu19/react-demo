import React from 'react'
import { Row, Col } from 'antd'
import {Menu} from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import logo from '../images/logo.png'

require('../css/pc.css')

export default class MobileHeader extends React.Component {
  state =  {
    current: 'top',
  }

  handleClick = e => {
    console.log('click', e);
    this.setState({
      current:e.key
    })
  }

  render(){
      return(
        <div id="mobileheader">
          <header>
            <img src="" alt="logo"></img>
          </header>
        </div>
      )
  }
}
