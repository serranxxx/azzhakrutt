import { Table } from 'antd'
import Column from 'antd/es/table/Column'
import React from 'react'
import { handleCursos } from '../helpers/handleCurso'

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
                size='middle'
                scroll={{
                    y: '50vh',
                    x: '400%',
                }}
                pagination={false}
            />

            <Table className='small' style={{
                width: '80%',
                marginTop: '2vh',
            }}
                columns={props.handleColumns(props.team)}
                dataSource={props.data}
                bordered
                
                size='small'
                scroll={{
                    y: '50vh',
                    x: '800%',
                }}
                pagination={false}
            />
        </>

    )
}
