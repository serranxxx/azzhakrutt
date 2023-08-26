import React, { useState } from 'react'
import { ArrowDownOutlined, ArrowUpOutlined, } from '@ant-design/icons';
import { AiFillCaretUp } from "react-icons/ai";
import { Card, Col, Progress, Radio, Row, Statistic } from 'antd';
import { handleCursos, handleSacramentos } from '../../helpers/handleCurso';

export const StadisticsMobile = (props) => {

    const {data} = props
    
    const [specific, setsSpecific] = useState(false)


    const getTotalCampo = () => {
        if (data) return data.length
        else return 0
    }

    const getActives = () => {
        const filterArray = data.filter((item) => item.Active === true);
        return filterArray.length
    }

    const getInactives = () => {
        const filterArray = data.filter((item) => item.Active === false);
        return filterArray.length
    }


    const getTotalCursos = (fieldName) => {
        const filterArray = data.filter((item) => item.Active === true);
        const array = filterArray.filter((item) => item.cursos[handleCursos(fieldName)] === true);
        return array.length;
    }

    const getTotalSacramentos = (fieldName) => {
        const filterArray = data.filter((item) => item.Active === true);
        const array = filterArray.filter((item) => item.Sacramentos[handleSacramentos(fieldName)] === true);
        return array.length;
    }

    const customFormatSmall = (sacramento) => (
        <Col style={{}}>
            <p style={{ fontWeight: 650, margin: '0', fontSize: '1em' }}>{`${sacramento.substring(0, 4).toUpperCase()}`}</p>
            <p style={{ fontWeight: 500, fontSize:'1.3em', margin:0 }}>{`${getTotalSacramentos(sacramento)}`}</p>
        </Col>
    )
    
    return (
        <div className='layout-small' style={{
            alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
            flexWrap: 'wrap', width: '90%', marginTop: '0vh',
        }}>
            <div style={{
                width: '100%', alignItems: 'center', justifyContent: 'center',
                margin: '-2vh 0 1.5vh 0', display: `${props.team === 'bite' ? 'none' : 'flex'}`,
                flexWrap: 'wrap'
            }}>
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Col style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <div style={{
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row', flexWrap: 'wrap'
                    }}>

                        <Card bordered={false} style={{ margin: '0.5vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                            <Statistic
                                title="Total"
                                value={getTotalCampo()}
                                precision={0}
                                valueStyle={{
                                    color: props.color,
                                }}
                                // prefix={<ArrowUpOutlined />}
                                suffix=""
                            />
                        </Card>

                        <Card bordered={false} style={{ margin: '.5vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                            <Statistic
                                title="Activo"
                                value={getActives()}
                                precision={0}
                                valueStyle={{
                                    color: props.color,
                                }}
                                // prefix={<ArrowUpOutlined />}
                                suffix=""
                            />
                        </Card>

                        <Card bordered={false} style={{ margin: '.5vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                            <Statistic
                                title="Inactivo"
                                value={getInactives()}
                                precision={0}
                                valueStyle={{
                                    color: props.color,
                                }}
                                // prefix={<ArrowUpOutlined />}
                                suffix=""
                            />
                        </Card>

                    </div>
                    <hr style={{ width: '80%', border: `1.3px solid ${props.color}`, margin: '3vh 0 3vh 0' }} />
                    <div style={{
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'row', flexWrap: 'wrap'
                    }}>

                        {
                            props.cursos.map((curso) => (

                                <Row style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                    flexDirection: 'row', width: '100%'
                                }}>
                                    <p style={{ margin: '0vh', fontWeight: 400, marginBottom: '0vh' }}>{`${curso} | ${getTotalCursos(curso)} cursos`}</p>
                                    <Progress label={curso} key={curso} status="active"
                                        percent={(getTotalCursos(curso) * 100) / getTotalCampo()} showInfo={false}
                                        strokeColor={{
                                            from: props.bg,
                                            to: props.bg,
                                        }} style={{ margin: 0 }}
                                    />

                                </Row>


                            ))
                        }
                    </div>
                </Col>


                <hr style={{ width: '80%', border: `1.3px solid ${props.color}`, margin: '3vh 0 3vh 0' }} />
                <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    {
                        props.sacramentos.map((sacramento) => (


                            <Progress type='dashboard' label={sacramento} key={sacramento} status="active" size={100}
                                percent={(getTotalSacramentos(sacramento) * 100) / getTotalCampo()} showInfo={true}
                                strokeColor={{
                                    '0%': props.color,
                                    '100%': props.bg,
                                }} style={{
                                    margin: '1vh',
                                }}
                                format={() => customFormatSmall(sacramento)}
                            />

                        ))
                    }
                </Row>
            </div>





        </div >
    )
}
