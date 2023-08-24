import React from 'react'
import { Button, Layout, Row, Select } from 'antd';
import { PiUserCirclePlusBold, PiArrowsClockwiseBold } from "react-icons/pi";
import { AiFillFilter, AiOutlineFilter } from 'react-icons/ai';

const { Header } = Layout;
const { Option } = Select
export const HeaderMobile = (props) => {
    const { bg, color, refresh, setNewUser, data, filtering, resetSearch, celula, handleFilterEslabon } = props
    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%',
            backgroundColor: `${bg}90`,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <Row style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                width: '90%'
            }}>
                <Select style={{ width: '50%', height: '4.5vh' }} onChange={handleFilterEslabon}>
                    {
                        celula.map((celula) => (
                            <Option key={celula} value={celula}
                                placeholder='Buscar por nombre'>
                                {celula}
                            </Option>
                        ))
                    }
                </Select>

                <Row style={{ width: '30%' }}>
                    <Button onClick={resetSearch} icon={filtering ? <AiFillFilter size={25} style={{ color: color }} /> : <AiOutlineFilter size={25} style={{ color: color }} />}
                        type='ghost' style={{
                            color: color, marginRight: '1vh'
                        }} />
                    <Button icon={<PiUserCirclePlusBold size={25} style={{ color: color }} />} type='ghost'
                        onClick={() => setNewUser(true)}
                    />
                    <Button
                        onClick={refresh}
                        icon={<PiArrowsClockwiseBold size={25} style={{ color: color }} />} type='ghost' style={{ marginLeft: '1vh' }} />
                </Row>
            </Row>
        </Header>
    )
}
