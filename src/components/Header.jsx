import React from 'react'
import { Button, Layout, Row } from 'antd';
import { BiRefresh } from 'react-icons/bi';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  
  } from '@ant-design/icons';
const { Header } = Layout;

export const HeaderApp = (props) => {

    const { bg, collapsed, setCollapsed, color, name, refresh } = props

    return (
        <Header
            style={{
                padding: 0, backgroundColor: `${bg}60`, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
            }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />

            <Row style={{
                width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                flexDirection: 'row', margin: '-2vh'
            }}>

                <p style={{
                    fontSize: '2.5em', fontWeight: 650, fontStyle: 'italic',
                    wordBreak: 'break-word', width: '70%', lineHeight: '0.9em',
                    marginLeft: '2vh', color: color
                }}>{name}</p>

            </Row>

            <Button
                onClick={refresh}
                icon={<BiRefresh size={20} style={{ color: color }} />} style={{
                    margin: '0', backgroundColor: bg, position: 'absolute',
                    right: '20px',
                    border: `1.5px solid ${bg}`
                }} />


        </Header>
    )
}
