import { Col, Row } from 'antd'
import React from 'react'
import { IconHandler } from './IconHandler'

export const PeopleCard = (props) => {
    const { bg, color } = props
    return (
        <>
            {
                props.data.map((data) => (
                    <div
                        key={data._id}
                        style={{
                            width: '85%', height: 'auto', borderRadius: '2vh',
                            margin: '0 0 2vh 0', backgroundColor: `${bg}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                            padding: '2%'
                        }}>
                        <div style={{ width: '60%', height: 'auto' }}>
                            <Col style={{ width: '100%', }}>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    fontWeight: 600, color: color, 
                                }} >{data.name}</p>
                                <hr style={{width:'100%', border:`1.5px solid ${color}`}}/>
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
                                    color: color, fontWeight:600
                                }} >{data.Contacto.num_emergencia}</p>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    color: color
                                }} >{data.DoB}</p>
                                
                                
                            </Col>
                        </div>

                        <div style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Col style={{
                                width: '100%', flexDirection:'column',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70%'
                            }}>
                                <Col style={{width:'80%'}}>
                                    <p style={{
                                        width: '100%', textAlign: 'left', margin: 0,
                                        color: color
                                    }} >Cursos</p>
                                    <Row style={{ width: '100%' }}>
                                        <IconHandler data={Object.values(data.cursos)} color={color} />
                                    </Row>
                                </Col>
                                <Col style={{ marginTop: '1vh', width:'80%' }}>
                                    <p style={{
                                        width: '100%', textAlign: 'left', margin: 0,
                                        color: color
                                    }} >Sacramentos</p>
                                    <Row>
                                        <IconHandler data={Object.values(data.Sacramentos)} color={color} />
                                    </Row>
                                </Col>
                            </Col>
                        </div>



                    </div>
                ))
            }


        </>

    )
}
