import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Loading: React.FC = () => {
  return (
    <div className="container">
      <div style={{ margin: '1rem auto auto auto', textAlign: 'center' }}>
        <Spin indicator={antIcon} />
      </div>
    </div>
  )
}

export default Loading
