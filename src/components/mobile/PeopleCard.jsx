import { Col, Row } from 'antd'
import React from 'react'
import { IconHandler } from './IconHandler'

export const PeopleCard = (props) => {
    const { bg, color, editDrawer } = props

    const handleClick = (name, celula, dob, cursos, sacramentos, activo, _id, num, contacto, num_e) => {
        editDrawer(false, name, celula, dob, cursos, sacramentos, activo, _id, num, contacto, num_e)
    }
    return (
        <>
            {
                props.data.map((data) => (

                    <div
                        onClick={() => handleClick(data.name, data.celula, data.DoB, Object.values(data.cursos), Object.values(data.Sacramentos), data.Active, data._id, data.Contacto.numero, data.Contacto.emergencia, data.Contacto.num_emergencia)}
                        key={data._id}
                        style={{
                            width: '85%', height: 'auto', borderRadius: '2vh',
                            margin: '0 0 2vh 0', 
                            // backgroundColor: `${bg}40`,
                            // background: `radial-gradient(at 50% 50%, rgba(255, 255, 255, 90%), ${bg}40)`,
                            background: `linear-gradient(to right, ${bg}40, ${bg}80)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                            padding: '2%', boxShadow:'0px 0px 8px #00000020',
                            // border:`2px solid ${color}60`
                        }}>
                        <div style={{ width: '60%', height: 'auto' }}>
                            <Col style={{ width: '100%', }}>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    fontWeight: 600, color: color,
                                }} >{data.name}</p>
                                <hr style={{ width: '100%', border: `1.5px solid ${color}` }} />
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    color: color
                                }} >{data.celula}</p>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    color: color
                                }} >{data.Contacto.numero}</p>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    color: color, fontWeight: 600
                                }} >{data.Contacto.num_emergencia}</p>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    color: color
                                }} >{data.DoB}</p>


                            </Col>
                        </div>


                        <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Col style={{
                                width: '100%', flexDirection: 'column',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70%'
                            }}>
                                {
                                    data.cursos ?
                                        <Col style={{ width: '80%' }}>
                                            <p style={{
                                                width: '100%', textAlign: 'left', margin: 0,
                                                color: color
                                            }} >Cursos</p>
                                            <Row style={{ width: '100%' }}>
                                                <IconHandler data={Object.values(data.cursos)} color={color} />
                                            </Row>
                                        </Col>
                                        : <></>
                                }

                                {
                                    data.Sacramentos ?
                                        <Col style={{ marginTop: '1vh', width: '80%' }}>
                                            <p style={{
                                                width: '100%', textAlign: 'left', margin: 0,
                                                color: color
                                            }} >Sacramentos</p>
                                            <Row>
                                                <IconHandler data={Object.values(data.Sacramentos)} color={color} />
                                            </Row>
                                        </Col>
                                        : <></>
                                }
                            </Col>
                        </div>



                    </div>
                ))
            }


        </>

    )
}
