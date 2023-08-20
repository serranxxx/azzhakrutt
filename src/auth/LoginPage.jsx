import React, { useEffect, useState } from 'react'
import { TeamsCards } from '../components/TeamsCards';
import { teams } from '../helpers/teams';

const teamsArray = [teams.bite, teams.sheratan, teams.nasseri, teams.yahoska]

export const LoginPage = () => {

    const [color, setColor] = useState('#222')

    useEffect(() => {
        const changeBody = () => {
            document.body.style.backgroundColor = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), #777)`;
        }
        changeBody()
    }, [])

    const handleColor = (color) => {
        setColor(color)
    }

    return (
        <>
            <div className='layout-large'
                style={{
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '90vh'
                }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: 'auto', }}>
                    <h1
                        className='Taskify'
                        style={{
                            fontFamily: 'Berlin Sans FB', fontWeight: 'normal', lineHeight: '0em',
                            fontWeight: 500,
                            color: '#222', fontSize: '8vw'
                        }}>¡Bienvenido de nuevo!</h1>
                </div>

                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'row', flexWrap: 'wrap', margin: '5vh 0 7vh 0'
                }}>
                    {
                        teamsArray
                            ? <TeamsCards data={teamsArray} action={handleColor} />
                            : <></>
                    }

                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: 'auto', }}>
                    <h1
                        className='Taskify'
                        style={{
                            fontSize: '350%', fontFamily: 'Berlin Sans FB', fontWeight: 'normal', lineHeight: '0em',
                            fontWeight: 400, transition: 'all 0.45s ease-in-out',
                            color: color, fontSize: '1.3em'
                        }}>Zona Azzhakrutt  2023 <b>¡Fusión con lo mejor!</b></h1>
                </div>

            </div>

            <div className='layout-small'
                style={{
                    alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '70vh',
                    paddingTop:'5%'
                }}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', 
                    padding:'1%', borderRadius:'1vh', backgroundColor:'#222', width:'65%',
                    height:'5vh'
                }}>
                    <p
                        // className='Taskify'
                        style={{
                            fontSize: '350%', fontWeight: 'normal', lineHeight: '0em',
                            fontWeight: 400, transition: 'all 0.45s ease-in-out',
                            color: '#f6f6f6', fontSize: '1.3em'
                        }}>Zona Azzhakrutt</p>
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

                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', 
                    padding:'1%', borderRadius:'1vh', backgroundColor:'#222', width:'65%',
                    height:'5vh'
                }}>
                    <p
                        // className='Taskify'
                        style={{
                            fontSize: '350%', fontWeight: 'normal', lineHeight: '0em',
                            fontWeight: 400, transition: 'all 0.45s ease-in-out',
                            color: '#f6f6f6', fontSize: '1.3em'
                        }}>¡Fusión con lo mejor!</p>
                </div>

                

            </div>
        </>
    )
}
