import React from 'react'
import { Layout } from 'antd';
import { PeopleCard } from './PeopleCard';
import { StadisticsMobile } from './Stadistics';

const { Content } = Layout;

export const ContentMobile = (props) => {
    const {bg, smallData, color, data, celula_, sacramento, curso, state, team, editDrawer} = props
  return (
    <Content
      style={{
        marginTop: '12vh', // Ajusta este valor para que el contenido no quede detrás del header
        marginBottom: '14vh', // Ajusta este valor para que el contenido no quede detrás del footer
        overflowY: 'scroll',
        height: 'auto', // Ajusta estos valores según el header y footer
        display:'flex', alignItems:'center', justifyContent:'flex-start',
        flexDirection:'column'
      }}
    >
      {
        state === 'table' ? <PeopleCard bg={bg} data={smallData} color={color} editDrawer={editDrawer}/>
        : <StadisticsMobile team={team} data={smallData} celula={celula_} sacramentos={sacramento} cursos={curso} color={color} bg={bg} />
      }
      
      
    </Content>
  )
}
