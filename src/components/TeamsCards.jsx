

export const TeamsCards = (props) => {


    return (
        <>
            {
                props.data.map((team) => (

                    <>
                        <div
                            onClick={() => props.action(team.value)}
                            className={`${props.selected? 'item logo large' :'logo large'}`}
                            style={{
                                height: '14vw', aspectRatio: '1/1', borderRadius: '50%',
                                margin: '0 3vh 0 3vh', transition: 'all 0.45s ease-in-out',
                                cursor: 'pointer', boxShadow: `0px 0px 20px #00000040`,
                            }}>
                            <img src={team.img} style={{ height: '100%' }} />

                        </div>

                        <div
                            onClick={() => props.action(team.value)}
                            className={`${props.selected? 'item logo layout-small' :'logo layout-small'}`}
                            style={{
                                height: '17vh', aspectRatio: '1/1', borderRadius: '3vh',
                                margin: '4vh 2vh 0vh 2vh', transition: 'all 0.45s ease-in-out',
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
