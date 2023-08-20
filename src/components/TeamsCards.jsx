import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { appContext } from '../context/appContext'
import { teams } from '../helpers/teams'

export const TeamsCards = (props) => {


    const { setTeam } = useContext(appContext)
    const navigate = useNavigate()

    const switchBG = (color) => {
        document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${color})`;;
    }

    const handleTeam = (team) => {
        setTeam(team)
        navigate(`/azzhakrutt/main`, {
            replace: true
        })
    }


    return (
        <>
            {
                props.data.map((team) => (

                    <>
                        <div
                            onClick={() => handleTeam(team.value)}
                            onMouseEnter={() => props.action(team.color3)}
                            onMouseLeave={() => props.action('#222')}
                            className='logo large'
                            style={{
                                height: '15vw', aspectRatio: '1/1', borderRadius: '50%',
                                margin: '0 4vh 0 4vh', transition: 'all 0.45s ease-in-out',
                                cursor: 'pointer', boxShadow: `0px 0px 20px #00000040`
                            }}>
                            <img src={team.img} style={{ height: '100%' }} />

                        </div>

                        <div
                            onClick={() => handleTeam(team.value)}
                            onMouseEnter={() => switchBG(team.color3)}
                            onMouseLeave={() => switchBG('#777')}
                            className='layout-small'
                            style={{
                                height: '17vh', aspectRatio: '1/1', borderRadius: '3vh',
                                margin: '4vh 2vh 4vh 2vh', transition: 'all 0.45s ease-in-out',
                                cursor: 'pointer', boxShadow: `0px 0px 10px #00000030`,
                                backgroundColor: team.color3, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                                
                            }}>

                            <img src={team.img} style={{ height: '80%' }} />

                        </div>
                    </>
                ))
            }
        </>
    )
}
