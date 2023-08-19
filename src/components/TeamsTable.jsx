import { Table } from 'antd'
import React from 'react'

export const TeamsTable = (props) => {
    return (

        <>
            <Table className='large' style={{
                width: '80%',
                marginTop: '2vh',
            }}
                columns={props.handleColumns(props.team)}
                dataSource={props.data}
                bordered
                scroll={{
                    y: '45vh',
                    x: '150vw',
                }}
                pagination={false}
            />

            <Table className='small' style={{
                width: '70%',
                marginTop: '4vh',
            }}
                columns={props.handleColumns(props.team)}
                dataSource={props.data}
                bordered
                scroll={{
                    y: '45vh',
                    x: '600vw',
                }}
                pagination={false}
            />
        </>

    )
}
