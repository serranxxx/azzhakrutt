import React, { useState } from 'react'
import { ArrowDownOutlined, ArrowUpOutlined, } from '@ant-design/icons';
import { AiFillCaretUp } from "react-icons/ai";
import { Card, Col, Progress, Radio, Row, Statistic } from 'antd';
import { handleCursos, handleSacramentos } from '../helpers/handleCurso';

export const Stadistics = (props) => {

    const [data, setData] = useState(props.data)
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

    const getTotalEslabon = (eslabon) => {
        const filterArray = data.filter((item) => item.celula === eslabon);
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

    const handleCell = (value) => {

        // console.log(value.target.value)
        if (value.target.value === 'todos') {
            setsSpecific(false)
            setData(props.data)
        } else {
            const filterArray = props.data.filter((item) => item.celula === value.target.value);
            setData(filterArray)
            setsSpecific(true)
        }

    }

    const customFormat = (sacramento) => (
        <Col style={{}}>
            <p style={{ fontWeight: 650, margin: '0 0 -1vh 0', fontSize: '1.2em' }}>{`${sacramento}`}</p>
            <p style={{ fontWeight: 500 }}>{`${getTotalSacramentos(sacramento)} miembros`}</p>
        </Col>
    )

    const customFormatSmall = (sacramento) => (
        <Col style={{}}>
            <p style={{ fontWeight: 650, margin: '0 0 -1vh 0', fontSize: '1em' }}>{`${sacramento}`}</p>
            <p style={{ fontWeight: 500 }}>{`${getTotalSacramentos(sacramento)} miembros`}</p>
        </Col>
    )
    return (
        <>
            <div className='layout-large' style={{
                alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
                flexWrap: 'wrap', width: '80%', marginTop: '2vh',
            }}>
                <hr style={{ width: '100%', border: `1.5px solid ${props.color}` }} />
                <div style={{
                    width: '100%', alignItems: 'center', justifyContent: 'center',
                    margin: '3vh 0 1.5vh 0', display: `${props.team === 'bite' ? 'none' : 'flex'}`,
                    flexWrap: 'wrap'
                }}>
                    <Radio.Group
                        onChange={handleCell}
                        // value={selectedRadiobutton}
                        border={true}
                        defaultValue='todos'
                        buttonStyle="dashed"
                        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Radio.Button value={'todos'} style={{
                            width: '8vw', textAlign: 'center', fontWeight: 500, margin: '0.5vh 0.5vh 0.5vh 0',
                            backgroundColor: props.bg, color: props.color, border: `0px solid ${props.color}`
                        }}>
                            Todos
                        </Radio.Button>
                        {

                            props.celula.map((celula) => (
                                <Radio.Button value={celula} style={{
                                    width: '8vw', textAlign: 'center', fontWeight: 500, margin: '0.5vh 0.5vh 0.5vh 0',
                                    backgroundColor: props.bg, color: props.color, border: `0px solid ${props.color}`
                                }}>
                                    {celula}
                                </Radio.Button>

                            ))
                        }
                    </Radio.Group>
                </div>
                <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Col style={{ width: '75%', }}>
                        <div style={{
                            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                            flexDirection: 'row', flexWrap: 'wrap'
                        }}>
                            {/* <p style={{
                            fontSize: '1.2em', fontStyle: 'italic', fontWeight: 500,
                            width: '100%', marginBottom: '0vh', color: props.color,
                        }}>Número de campo</p> */}

                            <Card bordered={false} style={{ margin: '1vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                                <Statistic
                                    title="Campo total"
                                    value={getTotalCampo()}
                                    precision={0}
                                    valueStyle={{
                                        color: props.color,
                                    }}
                                    // prefix={<ArrowUpOutlined />}
                                    suffix=""
                                />
                            </Card>

                            <Card bordered={false} style={{ margin: '1vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                                <Statistic
                                    title="Campo activo"
                                    value={getActives()}
                                    precision={0}
                                    valueStyle={{
                                        color: props.color,
                                    }}
                                    // prefix={<ArrowUpOutlined />}
                                    suffix=""
                                />
                            </Card>

                            <Card bordered={false} style={{ margin: '1vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                                <Statistic
                                    title="Campo inactivo"
                                    value={getInactives()}
                                    precision={0}
                                    valueStyle={{
                                        color: props.color,
                                    }}
                                    // prefix={<ArrowUpOutlined />}
                                    suffix=""
                                />
                            </Card>

                            {/* {
                    !specific ?
                        props.celula.map((celula) => (
                            <Card bordered={false} style={{ margin: '1vh' }}>
                                <Statistic
                                    title={`Campo ${celula}`}
                                    value={getTotalEslabon(celula)}
                                    // precision={2}
                                    valueStyle={{
                                        color: props.color,
                                    }}

                                // prefix={<ArrowUpOutlined />}
                                // suffix="%"
                                />
                            </Card>
                        ))

                        : <></>
                } */}
                        </div>
                        <hr style={{ width: '85%', border: `1.5px solid ${props.color}`, marginTop: '3vh' }} />
                        <div style={{
                            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                            flexDirection: 'row', flexWrap: 'wrap'
                        }}>
                            {/* <p style={{
                            fontSize: '1.2em', fontStyle: 'italic', fontWeight: 500,
                            width: '100%', marginBottom: '1vh', color: props.color,
                        }}>Cursos</p> */}
                            {
                                props.cursos.map((curso) => (

                                    <Row style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                                        flexDirection: 'row', width: '100%'
                                    }}>
                                        <p style={{ margin: '0.5vh', fontWeight: 400, marginBottom: '0vh' }}>{`${curso} | ${getTotalCursos(curso)} cursos`}</p>
                                        <Progress label={curso} key={curso} status="active" size={['95%', 20]}
                                            percent={(getTotalCursos(curso) * 100) / getTotalCampo()} showInfo={false}
                                            strokeColor={{
                                                from: props.bg,
                                                to: props.bg,
                                            }} style={{ marginLeft: '1%' }}
                                        />

                                    </Row>


                                ))
                            }
                        </div>
                    </Col>


                    <div style={{
                        width: '2%', height: '50vh', borderLeft: `2.5px solid ${props.color}`
                    }} />
                    <div style={{
                        width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                        flexDirection: 'column', flexWrap: 'wrap',
                    }}>
                        {/* <p style={{
                        fontSize: '1.2em', fontStyle: 'italic', fontWeight: 500,
                        width: '100%', marginBottom: '0vh', color: props.color,
                    }}>Sacramentos</p> */}
                        {
                            props.sacramentos.map((sacramento) => (

                                <Col style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* <p>{sacramento}</p> */}
                                    <Progress type='dashboard' label={sacramento} key={sacramento} status="active" size={150}
                                        percent={(getTotalSacramentos(sacramento) * 100) / getTotalCampo()} showInfo={true}
                                        strokeColor={{
                                            '0%': props.color,
                                            '100%': props.bg,
                                        }} style={{
                                            margin: '1vh',
                                        }}
                                        format={() => customFormat(sacramento)}
                                    />
                                </Col>
                            ))
                        }
                    </div>
                </Row>





            </div >

            <div className='layout-small' style={{
                alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
                flexWrap: 'wrap', width: '80%', marginTop: '1vh',
            }}>
                <hr style={{ width: '90%', border: `2px solid ${props.color}` }} />
                <div style={{
                    width: '100%', alignItems: 'center', justifyContent: 'center',
                    margin: '3vh 0 1.5vh 0', display: `${props.team === 'bite' ? 'none' : 'flex'}`,
                    flexWrap: 'wrap'
                }}>
                    <Radio.Group
                        onChange={handleCell}
                        // value={selectedRadiobutton}
                        border={true}
                        defaultValue='todos'
                        buttonStyle="dashed"
                        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Radio.Button value={'todos'} style={{
                            width: '10vw', textAlign: 'center', fontWeight: 500, margin: '0.5vh 0.5vh 0.5vh 0',
                            backgroundColor: props.bg, color: props.color, border: `0px solid ${props.color}`
                        }}>
                            < AiFillCaretUp />
                        </Radio.Button>
                        {

                            props.celula.map((celula) => (
                                <Radio.Button value={celula} style={{
                                    width: '10vw', textAlign: 'center', fontWeight: 500, margin: '0.5vh 0.5vh 0.5vh 0',
                                    backgroundColor: props.bg, color: props.color, border: `0px solid ${props.color}`
                                }}>
                                    {celula.substring(0, 2).toUpperCase()}
                                </Radio.Button>

                            ))
                        }
                    </Radio.Group>
                </div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Col style={{ width: '85%', }}>
                        <div style={{
                            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'row', flexWrap: 'wrap'
                        }}>

                            <Card bordered={false} style={{ margin: '0.5vh', width: '30%', backgroundColor: `${props.bg}80` }}>
                                <Statistic
                                    title="Campo total"
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
                                    title="Campo activo"
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
                                    title="Campo inactivo"
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
                        <hr style={{ width: '100%', border: `2px solid ${props.color}`, margin: '3vh 0 3vh 0' }} />
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


                    <hr style={{ width: '80%', border: `2px solid ${props.color}`, margin: '3vh 0 3vh 0' }} />
                    <Row style={{ width: '100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row' }}>
                        {
                            props.sacramentos.map((sacramento) => (


                                <Progress type='dashboard' label={sacramento} key={sacramento} status="active" size={110}
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
        </>
    )
}
