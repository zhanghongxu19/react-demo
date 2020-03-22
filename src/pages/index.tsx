import React from 'react'
// import styles from './index.less'
import PCIndex from "../components/pc_index"
import MobileIndex from "../components/mobile_index"
import MediaQuery from 'react-responsive'

export default () => {
  return (
    <header>
      <MediaQuery query='(min-device-width:1224px)'>
      <PCIndex/>
      </MediaQuery>
      <MediaQuery query='(max-device-width:1224px)'>
      <MobileIndex/>
      </MediaQuery>
    </header>
  );
}
