import React from 'react'
import { Button, Layout, Row, Select } from 'antd';
import { AiFillEdit, AiFillFilter, AiOutlineFilter } from 'react-icons/ai';
import { TeamsTable } from './TeamsTable';
import { Stadistics } from './Stadistics';
const { Content } = Layout;
const { Option } = Select
export const ContentApp = (props) => {

    const { bg, colorBgContainer, state, color, people, handleFilterData, data, resetSearch, filtering, onEdit, team, smallData, handleColumns, celula_, sacramento, curso, setNewUser } = props

    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                backgroundColor: `${bg}40`,
                background: colorBgContainer,
            }}
        >
            <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                height: 'auto', width: '100%', flexDirection: 'column', position: 'relative',
                paddingBottom: '4%'
            }}>


                <Row style={{
                    width: '100%',
                    display: `${state !== 'table' ? 'none' : 'flex'}`, alignItems: 'center', justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    <Button
                        onClick={() => setNewUser(true)}
                        style={{
                            backgroundColor: bg,
                            color: color, fontWeight: '500',
                            border: `1.5px solid ${bg}`, borderRadius: '3vh',
                            margin: '0 0.5vh 0 0.5vh', display: `${state !== 'table' ? 'none' : ''}`
                        }}>
                        {`+ ${people.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`}
                    </Button>

                    <Row>
                        <Select style={{ width: '20vw' }} onChange={handleFilterData}>
                            {
                                data.map((celula) => (
                                    <Option key={celula._id} value={celula.name}
                                        placeholder='Buscar por nombre'>
                                        {celula.name}
                                    </Option>
                                ))
                            }
                        </Select>

                        <Button onClick={resetSearch} icon={filtering ? <AiFillFilter size={15} /> : <AiOutlineFilter size={15} />} style={{
                            marginLeft: '1vh', backgroundColor: bg,
                            color: color, fontWeight: '500',
                            border: `1.5px solid ${bg}`, borderRadius: '1vh',
                        }} />


                        <Button onClick={onEdit} icon={<AiFillEdit size={15} />} style={{
                            marginLeft: '0.5vh', backgroundColor: bg,
                            color: color, fontWeight: '500',
                            border: `1.5px solid ${bg}`, borderRadius: '1vh',
                        }} />
                    </Row>


                </Row>
                {
                    state === 'table' ? <TeamsTable team={team} data={smallData} handleColumns={handleColumns} />
                        : <Stadistics team={team} data={data} celula={celula_} sacramentos={sacramento} cursos={curso} color={color} bg={bg} />
                }



            </div>
        </Content>
    )
}
