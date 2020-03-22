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

export default class PCHeader extends React.Component {
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
        <header>
          <Row>
            <Col span={2}></Col>
            <Col span={4}>
              <a href="/" class="logo">
                <img src={logo} alt="logo"></img>
                <span>ReaactNews</span>
              </a>
            </Col>
            <Col span={16}>
              <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Menu.Item key="top"><MailOutlined/>头条</Menu.Item>
                <Menu.Item key="news"><AppstoreOutlined/>新闻</Menu.Item>
                <Menu.Item key="yule"><SettingOutlined/>娱乐</Menu.Item>
              </Menu>
            </Col>
            <Col span={2}></Col>
          </Row>
        </header>
      )
  }
}
