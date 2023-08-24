import React from 'react'
import { Button, Col, Layout } from 'antd';
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoPieChart } from 'react-icons/io5';
import { BiSolidContact } from 'react-icons/bi';
import { CiLogout } from 'react-icons/ci';
const { Sider } = Layout;

export const SiderApp = (props) => {

    const { collapsed, bg, img, color, setState, state, userLogout } = props

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
            style={{
                height: '100vh', backgroundColor: `${bg}80`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.45s ease-in-out'
            }}
        >

            <img src={img} style={{
                transition: 'all 0.65s ease-in-out',
                height: '18vh', marginTop: '4vh', display: `${collapsed ? 'none' : ''}`
            }} />

            <hr style={{
                width: '90%', border: `1.5px solid ${color}`, marginTop: '3vh',
                display: `${collapsed ? 'none' : ''}`
            }} />

            <Col style={{
                width: `${collapsed ? '60px' : '150px'}`, display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                flexDirection: 'column', height: `${collapsed ? '100%' : '30%'}`
            }}>
                <Button
                    className='box'
                    onClick={() => setState('table')}
                    icon={collapsed ? <BsFillPeopleFill size={20} style={{ color: state === 'table' ? bg : `${color}90` }} /> : <></>}
                    style={{
                        transition: 'all 0.35s ease-in-out',
                        width: '100%', margin: '1.5vh 0 1vh 0',
                        backgroundColor: state === 'table' ? `${color}90` : bg, border: `1px solid ${bg}`,
                        color: state === 'table' ? bg : color, fontSize: '1.1em', fontWeight: 500, borderRadius: '3vh'
                    }}>
                    {`${collapsed ? '' : 'Mi campo'}`}
                </Button>

                <Button
                    className='box'
                    onClick={() => setState('metrics')}
                    icon={collapsed ? <IoPieChart size={20} style={{ color: state === 'metrics' ? bg : `${color}90` }} /> : <></>}
                    style={{
                        transition: 'all 0.35s ease-in-out',
                        width: '100%', margin: '1vh 0 1vh 0',
                        backgroundColor: state === 'metrics' ? `${color}90` : bg, border: `1px solid ${bg}`,
                        color: state === 'metrics' ? bg : color, fontSize: '1.1em', fontWeight: 500, borderRadius: '3vh'
                    }}>
                    {`${collapsed ? '' : 'Métricos'}`}
                </Button>

                <Button
                    className='box'
                    icon={collapsed ? <BiSolidContact size={20} style={{ color: `${color}90` }} /> : <></>}
                    style={{
                        transition: 'all 0.35s ease-in-out',
                        width: '100%', margin: '1vh 0 1vh 0',
                        backgroundColor: bg, border: `1px solid ${bg}`,
                        color: color, fontSize: '1.1em', fontWeight: 500, borderRadius: '3vh'
                    }}>
                    {`${collapsed ? '' : 'Contacto'}`}
                </Button>

                <Button
                    className='box'
                    onClick={userLogout}
                    icon={collapsed ? <CiLogout size={20} style={{ color: `${color}90` }} /> : <></>}
                    style={{
                        transition: 'all 0.35s ease-in-out',
                        width: '100%', margin: '1vh 0 1vh 0',
                        backgroundColor: bg, border: `1px solid ${bg}`,
                        color: color, fontSize: '1.1em', fontWeight: 500, borderRadius: '3vh'

                    }}>
                    {`${collapsed ? '' : 'Logout'}`}
                </Button>
            </Col>

        </Sider>
    )
}
