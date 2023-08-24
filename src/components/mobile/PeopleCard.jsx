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
                            width: '85%', height: '15vh', borderRadius: '2vh',
                            margin: '0 0 2vh 0', backgroundColor: `${bg}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                            padding: '0 2% 0 2%'
                        }}>
                        <div style={{ width: '33%', height: '70%' }}>
                            <Col style={{ width: '100%', }}>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    fontWeight: 500, color: color
                                }} >{data.name}</p>
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
                                    color: color
                                }} >{data.DoB}</p>
                            </Col>
                        </div>
                        <div style={{ width: '0.5%', height: '50%', backgroundColor: color, borderRadius: '2vh' }} />
                        <div style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <div style={{ width: '0.5%', height: '50%', backgroundColor: color, borderRadius: '2vh' }} />
                        <div style={{
                            width: '33%', display: 'flex',
                            alignItems: 'flex-start', justifyContent: 'center', height: '70%'
                        }}>
                            <Col style={{ width: '100%', marginLeft: '1vh', marginTop: '1vh' }}>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    lineHeight: '0.9em', color: color
                                }} >{data.Contacto.emergencia}</p>
                                <p style={{
                                    width: '100%', textAlign: 'left', margin: 0,
                                    marginTop: '1vh', color: color
                                }} >{data.Contacto.num_emergencia}</p>
                            </Col>
                        </div>


                    </div>
                ))
            }


        </>

    )
}
