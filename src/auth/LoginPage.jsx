import React, { useContext, useEffect, useState } from 'react'
import { TeamsCards } from '../components/TeamsCards';
import { teams } from '../helpers/teams';
import { AiOutlineClose, AiOutlineRollback } from "react-icons/ai";
import { Button, Checkbox, Form, Input, Row, message } from 'antd';
import { userLogin } from '../services/apiServices';
import useAxios from '../hooks/UseAxios';
import { appContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';


const teamsArray = [teams.bite, teams.sheratan, teams.nasseri, teams.yahoska]

export const LoginPage = () => {

    const { response, loading, error, operation } = useAxios()
    const { setTeam, login } = useContext(appContext)
    const navigate = useNavigate()
    const [color, setColor] = useState('#222')
    const [selected, setSelected] = useState(false)
    const [disapear, setDisapear] = useState(false)
    const [administrador, setAdministrador] = useState(false)
    const [guest, setGuest] = useState(false)
    const [team, setTeam_] = useState(null)

    useEffect(() => {
        const changeBody = () => {
            document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${disapear ? '#aaa' : '#777'})`;;

        }
        changeBody()
    }, [])

    const handleColor = (color) => {
        setColor(color)
    }

    const handleSelect = (value) => {
        setSelected(true)
        setTeam_(value)

        setTimeout(() => {
            setSelected(false)
            setDisapear(true)
        }, 550);

        console.log(value)
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onLogin = (e) => {
        userLogin(operation, teams[team].username, e.password)
    }

    const backTo = () => {
        if (administrador)
            setAdministrador(false)
        else if (guest)
            setGuest(false)
        else {
            setDisapear(false)
        }
    }

    useEffect(() => {
        if (!loading) {
            switch (response.data.msg) {
                case "Valid user":
                    console.log(response.data.data.value)
                    login()
                    setTeam(response.data.data.value)
                    navigate(`/azzhakrutt/main`, {
                        replace: true
                    })
                    break;

                default:
                    message.error(response.data.msg)
            }
            //   setTimeout(() => {
            //     setRender(true)
            //   }, 1000);
        }
    }, [response])

    return (
        <>
            <div className='layout-large'
                style={{
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh'
                }}>
                <div style={{ display: `${disapear ? 'none' : 'flex'}`, alignItems: 'flex-end', justifyContent: 'center', height: 'auto', }}>
                    <h1
                        className='Taskify'
                        style={{
                            fontFamily: 'Berlin Sans FB', lineHeight: '0em',
                            fontWeight: 500,
                            color: '#222', fontSize: '8vw'
                        }}>¡Bienvenido de nuevo!</h1>
                </div>

                <div style={{
                    display: `${disapear ? 'none' : 'flex'}`, alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap', margin: '5vh 0 7vh 0', transition: 'all 0.95s ease-in-out'
                }}>
                    {
                        teamsArray
                            ? <TeamsCards data={teamsArray} action={handleSelect} selected={selected} />
                            : <></>
                    }

                </div>

                <div style={{ display: `${disapear ? 'none' : 'flex'}`, alignItems: 'flex-end', justifyContent: 'center', height: 'auto', }}>
                    <h1
                        className='Taskify'
                        style={{
                            fontSize: '350%', fontFamily: 'Berlin Sans FB', lineHeight: '0em',
                            fontWeight: 400, transition: 'all 0.45s ease-in-out',
                            color: '#222', fontSize: '1.3em'
                        }}>Zona Azzhakrutt  2023 <b>¡Fusión con lo mejor!</b></h1>
                </div>

                {
                    team ?
                        <div
                            className='box'
                            style={{
                                display: `${!disapear ? 'none' : 'flex'}`, alignItems: 'center', justifyContent: 'center',
                                flexDirection: 'column', margin: '5vh 0 7vh 0', transition: 'all 0.65s ease-in-out',
                                position: 'relative', height: `${administrador ? '50vh' : guest ? '40vh' : '45vh'}`, width: '50vh',
                                borderRadius: '6vh', backgroundColor: '#fff', boxShadow: '0px 0px 20px #00000030'
                            }}>
                            <Button
                                icon={administrador ? <AiOutlineRollback size={20} style={{ color: teams[team].color2 }} /> : guest ? <AiOutlineRollback size={20} style={{ color: teams[team].color2 }} /> : <AiOutlineClose size={20} style={{ color: teams[team].color2 }} />}
                                style={{
                                    position: 'absolute', top: '20px', right: '30px',
                                    borderRadius: '4vh'
                                }} onClick={backTo} />

                            <div style={{ padding: '5%', height: `${administrador? '40%' : guest? '40%' : '60%'}`, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0vh', }}>
                                <div style={{
                                    height: '25vh', aspectRatio: '1/1', borderRadius: '50%', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <img src={teams[team].img} style={{ width: '80%', aspectRatio: '1/1' }} />
                                </div>
                            </div>

                            <hr style={{
                                display: `${administrador ? '' : guest ? '' : 'none'}`, width: '70%',
                                margin: '1vh 0 2vh 0', border: `1.6px solid ${teams[team].color}`
                            }} />

                            {/* chech */}
                            <div style={{
                                height: '30%', width: '70%', display: `${administrador ? 'flex' : 'none'}`,
                                alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
                            }}>
                                <Form
                                    name="basic"
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onLogin}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        style={{ margin: 0 }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingresa una constraseña',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                             

                                    <Form.Item
                                        style={{
                                            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginTop: '3vh'
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit" style={{ backgroundColor: teams[team].color }}>
                                            Iniciar sesión
                                        </Button>
                                    </Form.Item>
                                </Form>

                            </div>
                            {/* chech */}
                            <div style={{
                                height: '20%', width: '80%', display: `${guest ? 'flex' : 'none'}`,
                                alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Form
                                    name="basic"
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                                        margin: 0
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >


                                    <Form.Item
                                        label="Código"
                                        name="password"
                                        style={{ margin: 0, width: '60%' }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>



                                    <Form.Item
                                        style={{
                                            width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: 0
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit" style={{ backgroundColor: teams[team].color }}>
                                            Entrar
                                        </Button>
                                    </Form.Item>
                                </Form>

                            </div>

                            <div style={{
                                height: '40%', width: '100%', display: `${!administrador ? !guest ? '' : 'none' : 'none'}`, marginTop: '1vh',
                                
                            }}>
                                <Row style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Button onClick={() => setAdministrador(true)} style={{
                                        height: '100%', width: '50%', borderRadius: '0 0 0 6vh', backgroundColor: `${teams[team].color2}80`,
                                        color: teams[team].color2, fontWeight: 650, fontSize: '1.4em', display: `${!administrador ? '' : 'none'}`
                                    }}>Administrador</Button>
                                    <Button onClick={() => setGuest(true)} style={{
                                        height: '100%', width: '50%', borderRadius: '0 0 6vh 0', backgroundColor: `${teams[team].color3}80`,
                                        color: teams[team].color3, fontWeight: 650, fontSize: '1.4em', display: `${!administrador ? '' : 'none'}`
                                    }}>Invitado</Button>
                                </Row>



                            </div>

                        </div>

                        : <></>
                }



            </div>

            <div className='layout-small'
                style={{
                    alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', height: '100vh',
                    paddingTop: '5%'
                }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: 'auto', flexDirection: 'column' }}>
                    <h1
                        className='Taskify'
                        style={{
                            lineHeight: '0em',
                            fontWeight: 600,
                            color: '#222', fontSize: '8vw'
                        }}>Zona Azzhakrutt</h1>
                    <p
                        style={{
                            fontWeight: 400, transition: 'all 0.45s ease-in-out',
                            color: '#222', fontSize: '1.3em', textAlign: 'center', width: '100%',
                            fontStyle: 'italic', margin: '-1vh 0 0 0'
                        }}>¡Fusión con lo mejor!</p>
                </div>

                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap', margin: '2vh 0 2vh 0',
                }}>
                    {
                        teamsArray
                            ? <TeamsCards data={teamsArray} action={handleColor} />
                            : <></>
                    }

                </div>


            </div>
        </>
    )
}
