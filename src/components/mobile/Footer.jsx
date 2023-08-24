import React from 'react'
import { Button, Layout, Row } from 'antd';
import { PiUsersFill, PiChartDonutFill, PiBookFill, PiAddressBookFill, PiArrowSquareLeftFill, PiSignOutFill } from "react-icons/pi";
const { Footer } = Layout;
export const FooterMobile = (props) => {

    const { bg, color, userLogout, setState } = props

    return (
        <Footer style={{
            position: 'fixed', zIndex: 1, width: '100%', bottom: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height:'10vh',
            backgroundColor: `${bg}70`
        }}>
            <Row style={{
                width: '80%',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <Button
                    onClick={() => setState('table')}
                    className='box' icon={<PiUsersFill size={30} style={{ color: color }} />} type='ghost' style={{ height: 'auto', }} />
                <Button
                    onClick={() => setState('metrics')}
                    className='box' icon={<PiChartDonutFill size={30} style={{ color: color }} />} type='ghost' style={{ height: 'auto' }} />
                <Button className='box' icon={<PiAddressBookFill size={30} style={{ color: color }} />} type='ghost' style={{ height: 'auto' }} />
                <Button
                    onClick={userLogout}
                    className='box' icon={<PiSignOutFill size={30} style={{ color: color }} />} type='ghost' style={{ height: 'auto' }} />
            </Row>
        </Footer>
    )
}
