import React, { useContext, useEffect, useState } from 'react'
import { Button, Drawer, Input, Row, Form, Select, DatePicker, InputNumber, Checkbox, Col, message, Switch, Space } from 'antd'

import { useNavigate } from 'react-router-dom'
import useAxios from '../hooks/UseAxios'
import { appContext } from '../context/appContext'
import { MdDoneOutline, MdRemove } from "react-icons/md";
import { editBite, editNasseri, editSheratan, editYahoska, getBite, getCelula, getCursos, getNasseri, getSacramentos, getSheratan, getYahoska, postBite, postNasseri, postSheratan, postYahoska } from '../services/apiServices'
import { teams } from '../helpers/teams'
import { Layout, theme } from 'antd';
import { SiderApp } from '../components/Sider'
import { HeaderApp } from '../components/Header'
import { ContentApp } from '../components/Content'
import { HeaderMobile } from '../components/mobile/Header'
import { ContentMobile } from '../components/mobile/Content'
import { FooterMobile } from '../components/mobile/Footer'
const { Option } = Select

const { Header, Content, Footer } = Layout;

export const LayoutApp = () => {


  const userData = JSON.parse(localStorage.getItem('USER'))
  const { response, loading, error, operation } = useAxios()
  const { setData_users, data_users, logout } = useContext(appContext)

  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [newUser, setNewUser] = useState(false)
  const [open, setOpen] = useState(false)

  const [newUser_, setNewUser_] = useState(false)
  const [open_, setOpen_] = useState(false)

  const [user] = Form.useForm()
  const [edit] = Form.useForm()

  const [data, setData] = useState(data_users)
  const [smallData, setSmallData] = useState(data_users)

  const [team, setTeam] = useState('')

  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [color, setColor] = useState('')
  const [celula, setCelula] = useState('')
  const [people, setPeople] = useState('')
  const [bg, setBg] = useState('')

  const [render, setRender] = useState(false)

  const [celula_, setCelula_] = useState([])
  const [curso, setCurso] = useState([])
  const [sacramento, setSacramento] = useState([])
  const [filterCel, setFilterCel] = useState([])

  const [state, setState] = useState('table')

  const [formFinish, setFormFinish] = useState(false)
  const [selected, setSelected] = useState(false)
  const [filtering, setFiltering] = useState(false)

  const [currentName, setCurrentName] = useState('')
  const [currentCel, setCurrentCel] = useState('')
  const [currentDoB, setCurrentDoB] = useState('')
  const [currentCursos, setCurrentCursos] = useState([])
  const [currentSacramentos, setCurrentSacramentos] = useState([])
  const [currentActive, setCurrentActive] = useState(true)
  const [current_id, setCurrent_id] = useState('')
  const [currentContacto, setCurrentContacto] = useState('')
  const [currentEmergencia, setCurrentEmergencia] = useState('')
  const [currentC_emergencia, setCurrentC_emergencia] = useState('')

  const nasseriColumns = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400,
            // fontStyle:'italic'
          }}
        >{text}</p>
    },
    {
      title: `${celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`,
      width: '8%',
      dataIndex: 'celula',
      key: 'celula',
      filters: filterCel,
      filterSearch: true,
      onFilter: (value, record) => record.celula.includes(value),
      onFilter: (text, record) => record.celula === text,
      sorter: (a, b) => a.celula.localeCompare(b.celula),
      sortDirections: ['ascend'],
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400
          }}
        >{text}</p>
    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',

      // sorter: (a, b) => a.dob.length - b.dob.length,
      // sortDirections: ['descend'],
      render: (value) =>
        <p style={{ fontWeight: 400, textAlign: 'center' }}>{value}</p>

    },
    {
      title: 'Cursos',
      dataIndex: 'cursos',
      key: 'cursos',
      children: [
        {
          title: `Iniciadas`,
          width: '7%',
          dataIndex: ['cursos', 'iniciadas'],
          key: 'iniciadas',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.iniciadas === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Adiestradas`,
          width: '8%',
          dataIndex: ['cursos', 'adiestradas'],
          key: 'adiestradas',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.adiestradas === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Religiosas`,
          width: '8%',
          dataIndex: ['cursos', 'religiosas'],
          key: 'religiosas',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.religiosas === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `CDJ`,
          width: '8%',
          dataIndex: ['cursos', 'cdj'],
          key: 'cdj',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.cdj === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Líder en mi`,
          width: '8%',
          dataIndex: ['cursos', 'lider_en'],
          key: 'lider_en',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.lider_en === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }
            </>
          )

        },
        {
          title: `VEC`,
          width: '7%',
          dataIndex: ['cursos', 'v_cristo'],
          key: 'v_cristo',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.v_cristo === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
      ]
    },

    {
      title: 'Sacramentos',
      dataIndex: 'Sacramentos',
      key: 'Sacramentos',
      children: [
        {
          title: `Bautizo`,
          width: '8%',
          dataIndex: ['Sacramentos', 'bautizo'],
          key: 'bautizo',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.bautizo === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Comunión`,
          width: '8%',
          dataIndex: ['Sacramentos', 'comunion'],
          key: 'comunion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.comunion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Confirmación`,
          width: '9%',
          dataIndex: ['Sacramentos', 'confirmacion'],
          key: 'confirmacion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.confirmacion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
      ]
    },

    {
      title: 'Contacto',
      dataIndex: 'Contacto',
      key: 'Contacto',
      children: [
        {
          title: `Célular`,
          width: '8%',
          dataIndex: ['Contacto', 'numero'],
          key: 'numero',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Contacto`,
          width: '8%',
          dataIndex: ['Contacto', 'emergencia'],
          key: 'emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Número`,
          width: '8%',
          dataIndex: ['Contacto', 'num_emergencia'],
          key: 'num_emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
      ]
    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
      filters: [
        { text: 'Activos', value: true },
        { text: 'Inactivos', value: false },
      ],
      onFilter: (text, record) => record.Active === text,
      render: (text) => (
        <>
          {
            text
              ? <p style={{ fontWeight: 500, textAlign: 'center', color: '#CCC' }}>Activo</p>
              : <p style={{ fontWeight: 400, textAlign: 'center', color: '#777' }}>Inactivo</p>
          }

        </>
      )

    },
  ];
  const sheratanColumns = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400,
            // fontStyle:'italic'
          }}
        >{text}</p>
    },
    {
      title: `${celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`,
      width: '8%',
      dataIndex: 'celula',
      key: 'celula',
      filters: filterCel,
      filterSearch: true,
      onFilter: (value, record) => record.celula.includes(value),
      onFilter: (text, record) => record.celula === text,
      sorter: (a, b) => a.celula.localeCompare(b.celula),
      sortDirections: ['ascend'],
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400
          }}
        >{text}</p>
    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',

      // sorter: (a, b) => a.dob.length - b.dob.length,
      // sortDirections: ['descend'],
      render: (value) =>
        <p style={{ fontWeight: 400, textAlign: 'center' }}>{value}</p>

    },
    {
      title: 'Cursos',
      dataIndex: 'cursos',
      key: 'cursos',
      children: [
        {
          title: `Precurso`,
          width: '7%',
          dataIndex: ['cursos', 'precurso'],
          key: 'precurso',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.precurso === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Iniciados`,
          width: '8%',
          dataIndex: ['cursos', 'iniciados'],
          key: 'iniciados',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.iniciados === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Avanzados`,
          width: '8%',
          dataIndex: ['cursos', 'avanzados'],
          key: 'avanzados',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.avanzados === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Capitanes`,
          width: '8%',
          dataIndex: ['cursos', 'capitanes'],
          key: 'capitanes',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.capitanes === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `CCC`,
          width: '8%',
          dataIndex: ['cursos', 'ccc'],
          key: 'ccc',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.ccc === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }
            </>
          )

        },
      ]
    },

    {
      title: 'Sacramentos',
      dataIndex: 'Sacramentos',
      key: 'Sacramentos',
      children: [
        {
          title: `Bautizo`,
          width: '8%',
          dataIndex: ['Sacramentos', 'bautizo'],
          key: 'bautizo',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.bautizo === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Comunión`,
          width: '8%',
          dataIndex: ['Sacramentos', 'comunion'],
          key: 'comunion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.comunion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Confirmación`,
          width: '9%',
          dataIndex: ['Sacramentos', 'confirmacion'],
          key: 'confirmacion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.confirmacion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
      ]
    },

    {
      title: 'Contacto',
      dataIndex: 'Contacto',
      key: 'Contacto',
      children: [
        {
          title: `Célular`,
          width: '8%',
          dataIndex: ['Contacto', 'numero'],
          key: 'numero',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Contacto`,
          width: '8%',
          dataIndex: ['Contacto', 'emergencia'],
          key: 'emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Número`,
          width: '8%',
          dataIndex: ['Contacto', 'num_emergencia'],
          key: 'num_emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
      ]
    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
      filters: [
        { text: 'Activos', value: true },
        { text: 'Inactivos', value: false },
      ],
      onFilter: (text, record) => record.Active === text,
      render: (text) => (
        <>
          {
            text
              ? <p style={{ fontWeight: 500, textAlign: 'center', color: '#CCC' }}>Activo</p>
              : <p style={{ fontWeight: 400, textAlign: 'center', color: '#777' }}>Inactivo</p>
          }

        </>
      )

    },

  ];
  const yahoskaColumns = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400,
            // fontStyle:'italic'
          }}
        >{text}</p>
    },
    {
      title: `${celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`,
      width: '8%',
      dataIndex: 'celula',
      key: 'celula',
      filters: filterCel,
      filterSearch: true,
      onFilter: (value, record) => record.celula.includes(value),
      onFilter: (text, record) => record.celula === text,
      sorter: (a, b) => a.celula.localeCompare(b.celula),
      sortDirections: ['ascend'],
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400
          }}
        >{text}</p>
    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',

      // sorter: (a, b) => a.dob.length - b.dob.length,
      // sortDirections: ['descend'],
      render: (value) =>
        <p style={{ fontWeight: 400, textAlign: 'center' }}>{value}</p>

    },
    {
      title: 'Cursos',
      dataIndex: 'cursos',
      key: 'cursos',
      children: [
        {
          title: `Iniciados`,
          width: '7%',
          dataIndex: ['cursos', 'iniciados'],
          key: 'iniciados',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.iniciados === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Soldados`,
          width: '8%',
          dataIndex: ['cursos', 'soldados'],
          key: 'soldados',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.soldados === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Caballeros`,
          width: '8%',
          dataIndex: ['cursos', 'caballeros'],
          key: 'caballeros',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.caballeros === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Llamados`,
          width: '8%',
          dataIndex: ['cursos', 'llamados'],
          key: 'llamados',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.llamados === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `CDJ`,
          width: '8%',
          dataIndex: ['cursos', 'cdj'],
          key: 'cdj',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.cdj === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }
            </>
          )

        },
      ]
    },

    {
      title: 'Sacramentos',
      dataIndex: 'Sacramentos',
      key: 'Sacramentos',
      children: [
        {
          title: `Bautizo`,
          width: '8%',
          dataIndex: ['Sacramentos', 'bautizo'],
          key: 'bautizo',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.bautizo === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Comunión`,
          width: '8%',
          dataIndex: ['Sacramentos', 'comunion'],
          key: 'comunion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.comunion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Confirmación`,
          width: '9%',
          dataIndex: ['Sacramentos', 'confirmacion'],
          key: 'confirmacion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.confirmacion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
      ]
    },

    {
      title: 'Contacto',
      dataIndex: 'Contacto',
      key: 'Contacto',
      children: [
        {
          title: `Célular`,
          width: '8%',
          dataIndex: ['Contacto', 'numero'],
          key: 'numero',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Contacto`,
          width: '8%',
          dataIndex: ['Contacto', 'emergencia'],
          key: 'emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Número`,
          width: '8%',
          dataIndex: ['Contacto', 'num_emergencia'],
          key: 'num_emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
      ]
    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
      filters: [
        { text: 'Activos', value: true },
        { text: 'Inactivos', value: false },
      ],
      onFilter: (text, record) => record.Active === text,
      render: (text) => (
        <>
          {
            text
              ? <p style={{ fontWeight: 500, textAlign: 'center', color: '#CCC' }}>Activo</p>
              : <p style={{ fontWeight: 400, textAlign: 'center', color: '#777' }}>Inactivo</p>
          }

        </>
      )

    },

  ];
  const biteColumns = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (text) =>
        <p
          style={{
            textAlign: 'left', wordWrap: 'break-word',
            fontSize: '1em', fontWeight: 400,
            // fontStyle:'italic'
          }}
        >{text}</p>
    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',

      // sorter: (a, b) => a.dob.length - b.dob.length,
      // sortDirections: ['descend'],
      render: (value) =>
        <p style={{ fontWeight: 400, textAlign: 'center' }}>{value}</p>

    },
    {
      title: 'Cursos',
      dataIndex: 'cursos',
      key: 'cursos',
      children: [
        {
          title: `Discípulos`,
          width: '7%',
          dataIndex: ['cursos', 'discipulos'],
          key: 'discipulos',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.discipulos === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Apostoles`,
          width: '8%',
          dataIndex: ['cursos', 'apostoles'],
          key: 'apostoles',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.apostoles === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Profetas`,
          width: '8%',
          dataIndex: ['cursos', 'profetas'],
          key: 'profetas',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.profetas === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Cristeros`,
          width: '8%',
          dataIndex: ['cursos', 'cristeros'],
          key: 'cristeros',
          filters: [
            { text: 'Curso', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.cursos.cristeros === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: bg }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: bg }} />
                  </div>
              }

            </>
          )

        },
      ]
    },

    {
      title: 'Sacramentos',
      dataIndex: 'Sacramentos',
      key: 'Sacramentos',
      children: [
        {
          title: `Bautizo`,
          width: '8%',
          dataIndex: ['Sacramentos', 'bautizo'],
          key: 'bautizo',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.bautizo === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },

        {
          title: `Comunión`,
          width: '8%',
          dataIndex: ['Sacramentos', 'comunion'],
          key: 'comunion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.comunion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
        {
          title: `Confirmación`,
          width: '9%',
          dataIndex: ['Sacramentos', 'confirmacion'],
          key: 'confirmacion',
          filters: [
            { text: 'Sí', value: true },
            { text: 'No', value: false },
          ],
          onFilter: (text, record) => record.Sacramentos.confirmacion === text,
          render: (text) => (
            <>
              {
                text
                  ? <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdDoneOutline size={30} style={{ color: color }} />
                  </div>

                  : <div style={{
                    height: '100%', width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <MdRemove size={30} style={{ color: color }} />
                  </div>
              }

            </>
          )

        },
      ]
    },

    {
      title: 'Contacto',
      dataIndex: 'Contacto',
      key: 'Contacto',
      children: [
        {
          title: `Célular`,
          width: '8%',
          dataIndex: ['Contacto', 'numero'],
          key: 'numero',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Contacto`,
          width: '8%',
          dataIndex: ['Contacto', 'emergencia'],
          key: 'emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
        {
          title: `Número`,
          width: '8%',
          dataIndex: ['Contacto', 'num_emergencia'],
          key: 'num_emergencia',
          render: (value) =>
            <p style={{ fontWeight: 400, }}>{value}</p>

        },
      ]
    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
      filters: [
        { text: 'Activos', value: true },
        { text: 'Inactivos', value: false },
      ],
      onFilter: (text, record) => record.Active === text,
      render: (text) => (
        <>
          {
            text
              ? <p style={{ fontWeight: 500, textAlign: 'center', color: '#CCC' }}>Activo</p>
              : <p style={{ fontWeight: 400, textAlign: 'center', color: '#777' }}>Inactivo</p>
          }

        </>
      )

    },

  ];


  const handleNewUser = (e) => {

    // console.log('hola')

    let cursoArray, sacramentoArray = []

    if (e.cursos) {
      cursoArray = curso.map(item => e.cursos.includes(item))
    } else {
      cursoArray = Array(curso.length).fill(false)
    }

    if (e.sacramentos) {
      sacramentoArray = sacramento.map(item => e.sacramentos.includes(item))
    } else {
      sacramentoArray = Array(sacramento.length).fill(false)
    }

    switch (team) {
      case 'sheratan':
        postSheratan(operation, e.name, e.celula, e.dob.format('YYYY-MM-DD'), cursoArray, sacramentoArray, e.phone, e.e_contacto, e.e_phone,)
        break

      case 'nasseri':
        postNasseri(operation, e.name, e.celula, e.dob.format('YYYY-MM-DD'), cursoArray, sacramentoArray, e.phone, e.e_contacto, e.e_phone,)
        break

      case 'yahoska':
        postYahoska(operation, e.name, e.celula, e.dob.format('YYYY-MM-DD'), cursoArray, sacramentoArray, e.phone, e.e_contacto, e.e_phone,)
        break

      case 'bite':
        console.log('post')
        postBite(operation, e.name, e.dob.format('YYYY-MM-DD'), cursoArray, sacramentoArray, e.phone, e.e_contacto, e.e_phone,)
        break

      default:
        break;
    }
  }

  const getInitialData = async () => {
    await getCursos(operation)
    await getSacramentos(operation)
    await getCelula(operation)
  }

  const handleColumns = (team) => {
    switch (team) {
      case 'sheratan':
        return sheratanColumns

      case 'nasseri':
        return nasseriColumns

      case 'yahoska':
        return yahoskaColumns

      case 'bite':
        return biteColumns

      default:
        break;
    }
  }

  const refresh = () => {
    getInitialData()
    switch (team) {
      case 'sheratan':
        getSheratan(operation)
        break;

      case 'nasseri':
        getNasseri(operation)
        break;

      case 'yahoska':
        getYahoska(operation)
        break;

      case 'bite':
        getBite(operation)
        break;

      default:
        break;
    }
  }

  const handleEdit = (e) => {

    if (e.new_name) {
      setCurrentName(e.new_name)
    }

    if (e.new_dob) setCurrentDoB(e.new_dob)
    if (e.new_cel) setCurrentCel(e.new_cel)
    if (e.new_cursos) {
      const cursoArray = curso.map(item => e.new_cursos.includes(item));
      setCurrentCursos(cursoArray)
    }
    if (e.new_sacramento) {
      const sacramentoArray = sacramento.map(item => e.new_sacramento.includes(item));
      setCurrentSacramentos(sacramentoArray)
    }
    console.log(e)
    console.log(currentName)
    setFormFinish(true)

  }

  const handleFilterData = (e) => {
    setSelected(true)
    setFiltering(true)
    const filter = data.filter((item) => item.name === e);
    setSmallData(filter)
  }

  const handleFilterEslabon = (e) => {
    setSelected(true)
    setFiltering(true)
    const filter = data.filter((item) => item.celula === e);
    setSmallData(filter)
  }

  const resetSearch = () => {
    setSelected(false)
    setFiltering(false)
    setSmallData(data)
  }

  const onEdit = () => {
    if (selected) {
      setOpen(true)
      switch (team) {
        case 'sheratan':
          smallData.map((data) => (
            editDrawer(true, data.name, data.celula, data.dob, [data.cursos.precurso, data.cursos.iniciados, data.cursos.avanzados, data.cursos.capitanes, data.cursos.ccc], [data.Sacramentos.bautizo, data.Sacramentos.comunion, data.Sacramentos.confirmacion], data.Active, data._id, data.Contacto.numero, data.Contacto.emergencia, data.Contacto.num_emergencia)
          ))
          break;
        case 'nasseri':
          smallData.map((data) => (
            editDrawer(true, data.name, data.celula, data.dob, [data.cursos.iniciadas, data.cursos.adiestradas, data.cursos.religiosas, data.cursos.cdj, data.cursos.lider_en, data.cursos.v_cristo], [data.Sacramentos.bautizo, data.Sacramentos.comunion, data.Sacramentos.confirmacion], data.Active, data._id, data.Contacto.numero, data.Contacto.emergencia, data.Contacto.num_emergencia)
          ))
          break;
        case 'yahoska':
          smallData.map((data) => (
            editDrawer(true, data.name, data.celula, data.dob, [data.cursos.iniciados, data.cursos.soldados, data.cursos.caballeros, data.cursos.llamados, data.cursos.cdj], [data.Sacramentos.bautizo, data.Sacramentos.comunion, data.Sacramentos.confirmacion], data.Active, data._id, data.Contacto.numero, data.Contacto.emergencia, data.Contacto.num_emergencia)
          ))
          break;
        case 'bite':
          smallData.map((data) => (
            editDrawer(true, data.name, '', data.dob, [data.cursos.discipulos, data.cursos.apostoles, data.cursos.profetas, data.cursos.cristeros], [data.Sacramentos.bautizo, data.Sacramentos.comunion, data.Sacramentos.confirmacion], data.Active, data._id, data.Contacto.numero, data.Contacto.emergencia, data.Contacto.num_emergencia)
          ))
          break;
        default:
          break;
      }
    }

    else message.error("Debes haber realizado una selección antes de editar")
  }

  const editDrawer = (state, name, celula, dob, cursos, sacramentos, active, _id, num, emergencia, e_num) => {
    
    if (state) setOpen(true)
    else setOpen_(true)    
    setCurrentName(name)
    setCurrentCel(celula)
    setCurrentDoB(dob)
    setCurrentCursos(cursos)
    setCurrentSacramentos(sacramentos)
    setCurrentActive(active)
    setCurrent_id(_id)
    setCurrentContacto(num)
    setCurrentEmergencia(emergencia)
    setCurrentC_emergencia(e_num)
    

    const user = {
      name,
      celula,
      dob,
      cursos,
      sacramentos,
      active,
      _id,
      num,
      emergencia,
      e_num
    }

    console.log(user)
  }

  const userLogout = () => {
    logout()
    navigate(`/azzhakrutt/login`, {
      replace: true
    })
  }

  useEffect(() => {
    if (!loading) {
      switch (response.data.msg) {
        case "Get cursos":
          const cursos = response.data.data
          let curso_filter = cursos.filter(cursos => cursos.team === team.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase()))
          curso_filter = curso_filter.filter(cursos => cursos.active === true)
          const curso_name = curso_filter.map(curso => curso.name)
          setCurso(curso_name)
          localStorage.setItem('cursos', JSON.stringify(curso_name))
          break;

        case "Get Sacramentos":
          const sacramento = response.data.data
          const sacramento_name = sacramento.map(sacramento => sacramento.name)
          setSacramento(sacramento_name)
          localStorage.setItem('sacramentos', JSON.stringify(sacramento_name))
          break;

        case "Get celulas":
          const celulas = response.data.data
          let celula_filter = celulas.filter(celula => celula.team === team.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase()))
          celula_filter = celula_filter.filter(celula => celula.active === true)
          const celula_name = celula_filter.map(celula => celula.name)
          setCelula_(celula_name)

          const newfilterCel = celula_name.map((cel) => ({
            text: `${cel}`,
            value: `${cel}`,
          }))

          setFilterCel([...filterCel, ...newfilterCel])
          localStorage.setItem('celulas', JSON.stringify(celula_name))
          break;

        case "Nasseri uploaded":
          message.success("¡Nueva integrante en la cadena!")
          // getNasseri(operation)
          refresh()
          user.resetFields()
          break;

        case "Yahoska uploaded":
          message.success("¡Nuevo integrante en el escuadrón!")
          // getYahoska(operation)
          refresh()
          user.resetFields()
          break;

        case "Sheratan uploaded":
          message.success("¡Nuevo integrante en la conquista!")
          // getSheratan(operation)
          refresh()
          user.resetFields()
          break;

        case "Bite uploaded":
          message.success("¡Nuevo integrante en la juvenil!")
          // getBite(operation)
          refresh()
          user.resetFields()
          break;

        case "Get nasseri":
          setData(response.data.data)
          break;

        case "Get sheratan":
          setData(response.data.data)
          break;

        case "Get yahoska":
          setData(response.data.data)
          break;

        case "Get bite":
          setData(response.data.data)
          break;

        case "Item updated":
          message.success("Información actualizada")
          refresh()
          setFormFinish(false)
          edit.resetFields()
          break;

        default:
          break;
      }
      setTimeout(() => {
        setRender(true)
      }, 1000);
    }
  }, [response])

  useEffect(() => {
    if (userData) {
      document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), #f6f6f6)`
      setTeam(userData.value)
      setName(userData.full_name)
      setImg(teams[userData.value].img)
      setColor(teams[userData.value].color2)
      setBg(teams[userData.value].color)
      setCelula(userData.celula)
      setPeople(userData.campo)
      // setShortName(userData.name)

      switch (userData.value) {
        case 'sheratan': getSheratan(operation)
          break;

        case 'nasseri': getNasseri(operation)
          break;

        case 'yahoska': getYahoska(operation)
          break;

        case 'bite': getBite(operation)
          break;

        default:
          break;
      }
    }
    setFilterCel([])
    setData([])
    setCurso([])
    setSmallData([])
    getInitialData()
  }, [])

  useEffect(() => {
    setData_users(data)
    setSmallData(data)
    console.log('data', data)
  }, [data])

  useEffect(() => {
    console.log('entre ue')
    if (formFinish) {
      console.log('entre')
      switch (team) {
        case 'sheratan':
          editSheratan(operation, currentName, currentCel, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
          break
        case 'nasseri':
          editNasseri(operation, currentName, currentCel, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
          break
        case 'yahoska':
          editYahoska(operation, currentName, currentCel, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
          break
        case 'bite':
          editBite(operation, currentName, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
          break
        default:
          break;
      }
    }
  }, [formFinish])


  return (
    <>
      <div className='large'>
        {
          render
            ? <>
              <Layout>
                <SiderApp userLogout={userLogout} bg={bg} state={state} setState={setState} color={color} img={img} collapsed={collapsed} />
                <Layout>
                  <HeaderApp refresh={refresh} bg={bg} name={name} color={color} setCollapsed={setCollapsed} collapsed={collapsed} />
                  <ContentApp
                    bg={bg} colorBgContainer={colorBgContainer} state={state} setNewUser={setNewUser}
                    color={color} people={people} handleFilterData={handleFilterData} data={data} resetSearch={resetSearch}
                    filtering={filtering} onEdit={onEdit} team={team} smallData={smallData} handleColumns={handleColumns}
                    celula_={celula_} sacramento={sacramento} curso={curso} />

                </Layout>
              </Layout>
            </>
            : <div style={{
              height: "90vh", width: '98vw', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <img src={teams[userData.value].gif} style={{ width: '30%', height: '40%' }} />

            </div>
        }

      </div >

      <div className='small'>
        {
          render
            ? <Layout style={{ minHeight: '100vh', backgroundColor:`${bg}10` }}>
              <HeaderMobile team={team} resetSearch={resetSearch} filtering={filtering} data={data} bg={bg} color={color} refresh={refresh} setNewUser={setNewUser_} celula={celula_} handleFilterEslabon={handleFilterEslabon} />
              <ContentMobile editDrawer={editDrawer} team={team} bg={bg} smallData={smallData} color={color} data={data} celula_={celula_} sacramento={sacramento} curso={curso} state={state} />
              <FooterMobile bg={bg} color={color} userLogout={userLogout} setState={setState} />
            </Layout>
            : <></>

        }
      </div>


      <Drawer
        title={`${team === 'nasseri' ? `Nueva ${people}` : `Nuevo ${people}`}`}
        placement="right"
        onClose={() => setNewUser(false)}
        width='35%'
        open={newUser}
        extra={
          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <Button
                onClick={() => user.resetFields()}
                style={{
                  width: '100%', backgroundColor: 'transparent', color: color, fontWeight: 500,
                  border: `2px solid ${bg}`
                }}>
                Cancelar
              </Button>
            </div>
            <div style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <Button
                // onClick={() => console.log('hola')}
                onClick={() => user.submit()}
                style={{
                  width: '100%', backgroundColor: bg, color: color, fontWeight: 500,
                  border: `1.5px solid ${bg}`
                }}>
                Guardar
              </Button>
            </div>

          </Row>
        }>

        <Form
          name='my_form'
          form={user}
          onFinish={handleNewUser}
          style={{

            width: '100%'
          }}>

          <p style={{
            fontWeight: 500, fontStyle: 'italic', fontSize: '1.1em'
          }}>Datos personales</p>
          <hr style={{
            width: '100%', border: '1.5px solid #00000020'
          }} />

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Nombre: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='name'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un nombre' }
                ]}
              >
                <Input style={{ width: '100%' }} placeholder={`Nombre de ${people}`} />
              </Form.Item>
            </div>

            <div style={{
              width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
              display: `${team === 'bite' ? 'none' : ''}`
            }}>
              <p style={{
                fontWeight: 500
              }}>{celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='celula'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: team !== 'bite' ? true : false, message: `Por favor selecciona un ${celula}` }
                ]}
              >
                <Select style={{ width: '100%' }} placeholder={`${celula_[1]}`}>
                  {

                    celula_.map((celula) => (
                      <Option key={celula} value={celula}>
                        {celula}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>

            <div style={{
              width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',

            }}>
              <p style={{
                fontWeight: 500
              }}>Fecha de nacimiento: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='dob'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor elige una fecha' }
                ]}
              >
                <DatePicker style={{ width: '100%' }} placeholder='2023-01-31' />
              </Form.Item>
            </div>

            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Sacramentos:</p>
              <Form.Item
                name='sacramentos'
                style={{ width: '100%', marginTop: '-1vh' }}
              >
                <Select
                  mode='multiple'
                  style={{ width: '100%' }} placeholder={`Sacramentos`}>
                  {

                    sacramento.map((sacramentos) => (
                      <Option name={sacramento} key={sacramentos} value={sacramentos}>
                        {sacramentos}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
          </Row>

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '-1vh' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Cursos: </p>
              <Form.Item
                name='cursos'
                style={{ width: '100%', marginTop: '-1vh' }}
              >

                <Checkbox.Group
                  style={{
                    width: '100%',
                  }}
                // onChange={onChange}
                >
                  <Row>
                    {

                      curso.map((cursos) => (
                        <Col span={8}>
                          <Checkbox name={cursos} value={cursos}>{cursos}</Checkbox>
                        </Col>
                      ))
                    }
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </div>


          </Row>


          <p style={{
            fontWeight: 500, fontStyle: 'italic', fontSize: '1.1em'
          }}>Contacto de emergencia </p>
          <hr style={{
            width: '100%', border: '1.5px solid #00000020'
          }} />

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Celular: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='phone'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un celular' }
                ]}
              >
                <InputNumber style={{ width: '100%' }} placeholder='6141230520' />
              </Form.Item>
            </div>
          </Row>

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '-2vh' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Contacto de emergencia: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='e_contacto'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un contacto' }
                ]}
              >
                <Input style={{ width: '100%' }} placeholder='Nombre del contacto' />
              </Form.Item>
            </div>

            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Teléfono celular: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='e_phone'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un celular' }
                ]}
              >
                <InputNumber style={{ width: '100%' }} placeholder={`614 ...`} />
              </Form.Item>
            </div>
          </Row>


          {/* <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '2vh' }}>

                  <div style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <Button style={{
                      width: '100%', backgroundColor: 'transparent', color: color, fontWeight: 500,
                      border: `2px solid ${bg}`
                    }}>
                      Cancelar
                    </Button>
                  </div>
                  <div style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>

                    <Form.Item
                      style={{ width: '100%', margin: 0 }}
                    >
                      <Button htmlType='submit' type='primary' style={{
                        width: '100%', backgroundColor: bg, color: color, fontWeight: 500,
                        border: `1.5px solid ${bg}`
                      }}>
                        Guardar
                      </Button>
                    </Form.Item>
                  </div>


                </Row> */}


        </Form>
      </Drawer>

      <Drawer
        title={currentName}
        placement={'left'}
        closable={false}
        width={'30%'}
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <Switch
              // heckedChildren="Activo" unCheckedChildren="Inactivo"
              checked={currentActive} onChange={() => setCurrentActive(!currentActive)} style={{ backgroundColor: currentActive ? bg : color, color: color }} />
          </Space>
        }
      >
        <Form
          name='my_edit'
          form={edit}
          onFinish={handleEdit}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '90%' }}>
          <div style={{
            width: '95%', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'
          }}>
            <p style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>Datos personas</p>
            <hr style={{ width: '90%', border: `1.5px solid ${color}` }} />


            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>

              <Col>
                <p>Nombre: </p>
                <Form.Item
                  name='new_name'
                  style={{ margin: 0 }}>
                  <Input placeholder={currentName} />
                </Form.Item>
              </Col>

              <Col>
                <p>DoB: </p>
                <Form.Item
                  name='new_dob'
                  style={{ margin: 0 }}>
                  <DatePicker placeholder={currentDoB} />
                </Form.Item>

              </Col>

              <Col style={{ display: team !== 'bite' ? '' : 'none' }}>
                <p>{celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}: </p>
                <Form.Item
                  name='new_cel'
                  style={{ margin: 0 }}>
                  <Select style={{ width: '100%' }} placeholder={currentCel}>
                    {

                      celula_.map((celula) => (
                        <Option key={celula} value={celula}>
                          {celula}
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>

              </Col>


            </Row>

          </div>

          <div style={{
            width: '95%', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column',
            margin: '1vh 0 1vh 0'
          }}>
            <p style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>Cursos</p>
            <hr style={{ width: '90%', border: `1.5px solid ${color}` }} />
            <Row style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Form.Item
                name='new_cursos'
                style={{ margin: '2vh 0 0 0', width: '100%' }}>
                <Select mode='multiple' style={{ width: '100%' }} placeholder={curso[0]}>
                  {

                    curso.map((cursos) => (
                      <Option key={cursos} value={cursos}>
                        {cursos}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Row>

          </div>

          <div style={{
            width: '90%', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'
          }}>
            <p style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>Sacramentos</p>
            <hr style={{ width: '90%', border: `1.5px solid ${color}` }} />
            <Row style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Form.Item
                name='new_sacramento'
                style={{ margin: '2vh 0 0 0', width: '100%' }}>
                <Select mode='multiple' style={{ width: '100%' }} placeholder={sacramento[0]}>
                  {

                    sacramento.map((sacramentos) => (
                      <Option name={sacramento} key={sacramentos} value={sacramentos}>
                        {sacramentos}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Row>


          </div>

          <Form.Item style={{ margin: 0, width: '100%', marginLeft: '20%' }}>
            <Button htmlType='submit' style={{
              marginTop: '8vh', width: '80%', backgroundColor: bg,
              border: `2px solid ${bg}`, color: '#f6f6f6', fontWeight: 500
            }}>Guardar cambios</Button>
          </Form.Item>
        </Form>
      </Drawer>

      <Drawer
        title={`${team === 'nasseri' ? `Nueva ${people}` : `Nuevo ${people}`}`}
        placement="right"
        onClose={() => setNewUser_(false)}
        width='100%'
        open={newUser_}
        extra={
          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <Button
                onClick={() => user.resetFields()}
                style={{
                  width: '100%', backgroundColor: 'transparent', color: color, fontWeight: 500,
                  border: `2px solid ${bg}`
                }}>
                Cancelar
              </Button>
            </div>
            <div style={{ width: '48%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <Button
                onClick={() => user.submit()}
                style={{
                  width: '100%', backgroundColor: bg, color: color, fontWeight: 500,
                  border: `1.5px solid ${bg}`
                }}>
                Guardar
              </Button>
            </div>

          </Row>
        }>

        <Form
          name='my_form'
          form={user}
          onFinish={handleNewUser}
          style={{

            width: '100%'
          }}>

          <p style={{
            fontWeight: 500, fontStyle: 'italic', fontSize: '1.1em'
          }}>Datos personales</p>
          <hr style={{
            width: '100%', border: '1.5px solid #00000020'
          }} />

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Nombre: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='name'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un nombre' }
                ]}
              >
                <Input style={{ width: '100%' }} placeholder={`Nombre de ${people}`} />
              </Form.Item>
            </div>

            <div style={{
              width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',
              display: `${team === 'bite' ? 'none' : ''}`
            }}>
              <p style={{
                fontWeight: 500
              }}>{celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='celula'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: `Por favor selecciona un ${celula}` }
                ]}
              >
                <Select style={{ width: '100%' }} placeholder={`${celula_[1]}`}>
                  {

                    celula_.map((celula) => (
                      <Option key={celula} value={celula}>
                        {celula}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>

            <div style={{
              width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column',

            }}>
              <p style={{
                fontWeight: 500
              }}>Fecha de nacimiento: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='dob'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor elige una fecha' }
                ]}
              >
                <DatePicker style={{ width: '100%' }} placeholder='2023-01-31' />
              </Form.Item>
            </div>

            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Sacramentos:</p>
              <Form.Item
                name='sacramentos'
                style={{ width: '100%', marginTop: '-1vh' }}
              >
                <Select
                  mode='multiple'
                  style={{ width: '100%' }} placeholder={`Sacramentos`}>
                  {

                    sacramento.map((sacramentos) => (
                      <Option name={sacramento} key={sacramentos} value={sacramentos}>
                        {sacramentos}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
          </Row>

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '-1vh' }}>
            <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Cursos: </p>
              <Form.Item
                name='cursos'
                style={{ width: '100%', marginTop: '-1vh' }}
              >

                <Checkbox.Group
                  style={{
                    width: '100%',
                  }}
                // onChange={onChange}
                >
                  <Row>
                    {

                      curso.map((cursos) => (
                        <Col span={8}>
                          <Checkbox name={cursos} value={cursos}>{cursos}</Checkbox>
                        </Col>
                      ))
                    }
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </div>


          </Row>


          <p style={{
            fontWeight: 500, fontStyle: 'italic', fontSize: '1.1em'
          }}>Contacto de emergencia </p>
          <hr style={{
            width: '100%', border: '1.5px solid #00000020'
          }} />

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Celular: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='phone'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un celular' }
                ]}
              >
                <InputNumber style={{ width: '100%' }} placeholder='6141230520' />
              </Form.Item>
            </div>
          </Row>

          <Row style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '-2vh' }}>
            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Contacto de emergencia: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='e_contacto'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un contacto' }
                ]}
              >
                <Input style={{ width: '100%' }} placeholder='Nombre del contacto' />
              </Form.Item>
            </div>

            <div style={{ width: '48%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
              <p style={{
                fontWeight: 500
              }}>Teléfono celular: <b style={{ color: '#8e4838' }}>*</b></p>
              <Form.Item
                name='e_phone'
                style={{ width: '100%', marginTop: '-1vh' }}
                rules={[
                  { required: true, message: 'Por favor escribe un celular' }
                ]}
              >
                <InputNumber style={{ width: '100%' }} placeholder={`614 ...`} />
              </Form.Item>
            </div>
          </Row>


        </Form>
      </Drawer>

      <Drawer
        title={currentName}
        placement={'left'}
        closable={false}
        width={'80%'}
        onClose={() => setOpen_(false)}
        open={open_}
        extra={
          <Space>
            <Switch
              // heckedChildren="Activo" unCheckedChildren="Inactivo"
              checked={currentActive} onChange={() => setCurrentActive(!currentActive)} style={{ backgroundColor: currentActive ? bg : color, color: color }} />
          </Space>
        }
      >
        <Form
          name='my_edit'
          form={edit}
          onFinish={handleEdit}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '90%' }}>
          <div style={{
            width: '95%', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'
          }}>
            <p style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>Datos personas</p>
            <hr style={{ width: '90%', border: `1.5px solid ${color}` }} />


            <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>

              <Col>
                <p>Nombre: </p>
                <Form.Item
                  name='new_name'
                  style={{ margin: 0 }}>
                  <Input placeholder={currentName} />
                </Form.Item>
              </Col>

              <Col>
                <p>DoB: </p>
                <Form.Item
                  name='new_dob'
                  style={{ margin: 0 }}>
                  <DatePicker placeholder={currentDoB} />
                </Form.Item>

              </Col>

              <Col style={{ display: team !== 'bite' ? '' : 'none' }}>
                <p>{celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}: </p>
                <Form.Item
                  name='new_cel'
                  style={{ margin: 0 }}>
                  <Select style={{ width: '100%' }} placeholder={currentCel}>
                    {

                      celula_.map((celula) => (
                        <Option key={celula} value={celula}>
                          {celula}
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>

              </Col>


            </Row>

          </div>

          <div style={{
            width: '95%', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column',
            margin: '1vh 0 1vh 0'
          }}>
            <p style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>Cursos</p>
            <hr style={{ width: '90%', border: `1.5px solid ${color}` }} />
            <Row style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Form.Item
                name='new_cursos'
                style={{ margin: '2vh 0 0 0', width: '100%' }}>
                <Select mode='multiple' style={{ width: '100%' }} placeholder={curso[0]}>
                  {

                    curso.map((cursos) => (
                      <Option key={cursos} value={cursos}>
                        {cursos}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Row>

          </div>

          <div style={{
            width: '90%', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'
          }}>
            <p style={{ width: '100%', textAlign: 'center', fontWeight: 500 }}>Sacramentos</p>
            <hr style={{ width: '90%', border: `1.5px solid ${color}` }} />
            <Row style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Form.Item
                name='new_sacramento'
                style={{ margin: '2vh 0 0 0', width: '100%' }}>
                <Select mode='multiple' style={{ width: '100%' }} placeholder={sacramento[0]}>
                  {

                    sacramento.map((sacramentos) => (
                      <Option name={sacramento} key={sacramentos} value={sacramentos}>
                        {sacramentos}
                      </Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </Row>


          </div>

          <Form.Item style={{ margin: 0, width: '100%', marginLeft: '20%' }}>
            <Button htmlType='submit' style={{
              marginTop: '8vh', width: '80%', backgroundColor: bg,
              border: `2px solid ${bg}`, color: '#f6f6f6', fontWeight: 500
            }}>Guardar cambios</Button>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  )
}
