import React from 'react'
import { Button, Layout, Row, Select } from 'antd';
import { PiUserCirclePlusBold, PiArrowsClockwiseBold } from "react-icons/pi";
import { AiFillFilter, AiOutlineFilter } from 'react-icons/ai';

const { Header } = Layout;
const { Option } = Select
export const HeaderMobile = (props) => {
    const { team, bg, color, refresh, setNewUser, data, filtering, resetSearch, celula, handleFilterEslabon } = props
    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            // backgroundColor: `${bg}`, 
            background: `radial-gradient(at 100% 10%, rgba(255, 255, 255, 20%), ${bg})`,
            boxShadow:'10px 0px 10px #00000030',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <Row style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                width: '100%', 
            }}>
                <Select className='cel-select' style={{ width: '45%', height: '4.5vh', display:`${team === 'bite' ? 'none' : ''}` }} onChange={handleFilterEslabon}>
                    {
                        celula.map((celula) => (
                            <Option key={celula} value={celula}
                                placeholder='Buscar por nombre'>
                                {celula}
                            </Option>
                        ))
                    }
                </Select>

                <Row style={{ width: `${team === 'bite'? '100%' : '50%'}`, display:'flex', alignItems:'center', justifyContent:'flex-end', flexDirection:'row' }}>
                    <Button onClick={resetSearch} icon={filtering ? <AiFillFilter size={20} style={{ color: color }} /> : <AiOutlineFilter size={20} style={{ color: color }} />}
                        type='ghost' style={{
                            color: color, marginRight: '1vh',
                            display:`${team === 'bite' ? 'none' : ''}`
                        }} />
                    <Button icon={<PiUserCirclePlusBold size={20} style={{ color: color }} />} type='ghost'
                        onClick={() => setNewUser(true)}
                    />
                    <Button
                        onClick={refresh}
                        icon={<PiArrowsClockwiseBold size={20} style={{ color: color }} />} type='ghost' style={{ marginLeft: '1vh' }} />
                </Row>
            </Row>
        </Header>
    )
}
