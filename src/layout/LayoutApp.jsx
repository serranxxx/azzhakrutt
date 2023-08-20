import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Button, Drawer, Input, Row, Form, Select, DatePicker, InputNumber, Checkbox, Col, message, Switch, Space } from 'antd'

import { Link } from 'react-router-dom'
import useAxios from '../hooks/UseAxios'
import { appContext } from '../context/appContext'
import { CiLogout } from "react-icons/ci";
import { MdDoneOutline, MdRemove } from "react-icons/md";
import { editBite, editNasseri, editSheratan, editYahoska, getBite, getCelula, getCursos, getNasseri, getSacramentos, getSheratan, getYahoska, postBite, postNasseri, postSheratan, postYahoska } from '../services/apiServices'
import { TeamsTable } from '../components/TeamsTable'
import { Stadistics } from '../components/Stadistics'
import { BiRefresh } from "react-icons/bi";
import { teams } from '../helpers/teams'



export const LayoutApp = () => {

  const { Option } = Select
  const { response, loading, error, operation } = useAxios()
  const { setData_users, data_users } = useContext(appContext)
  const team = JSON.parse(localStorage.getItem('team'))

  const [newUser, setNewUser] = useState(false);
  const [user] = Form.useForm();
  const [edit] = Form.useForm();
  const [shortName, setShortName] = useState('')
  const [data, setData] = useState(data_users)
  const [smallData, setSmallData] = useState(data_users)
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
  const [open, setOpen] = useState(false)
  const [formFinish, setFormFinish] = useState(false)

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
      // sorter: (a, b) => a.celula.localeCompare(b.celula),
      // sortDirections: ['ascend'],
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

    {
      title: `id`,
      width: '10%',
      dataIndex: '_id',
      key: '_id',
      render: (text) => (
        <p style={{ fontWeight: 400, textAlign: 'center', color: '#bbb' }}>{text}</p>
      )

    },

    {
      title: `Detalles`,
      key: 'operation',
      fixed: 'right',
      width: '7%',
      render: (text, record) =>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Button
            onClick={() => editNasseris(record.name, record.celula, record.dob, record.cursos.iniciadas, record.cursos.adiestradas, record.cursos.religiosas, record.cursos.cdj, record.cursos.lider_en, record.cursos.v_cristo, record.Sacramentos.bautizo, record.Sacramentos.comunion, record.Sacramentos.confirmacion, record.Active, record._id, record.Contacto.numero, record.Contacto.emergencia, record.Contacto.num_emergencia)}
            className='div-searcher'
            // icon={<TbInfoTriangle size={30} />}
            style={{
              color: color, border: `1.5px solid ${bg}`,
              fontWeight: 500,
              backgroundColor: bg
            }}>Editar</Button>
        </div>,
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
      // sorter: (a, b) => a.celula.localeCompare(b.celula),
      // sortDirections: ['ascend'],
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
    {
      title: `id`,
      width: '10%',
      dataIndex: '_id',
      key: '_id',
      render: (text) => (
        <p style={{ fontWeight: 400, textAlign: 'center', color: '#bbb' }}>{text}</p>
      )

    },

    {
      title: `Detalles`,
      key: 'operation',
      fixed: 'right',
      width: '7%',
      render: (text, record) =>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Button
            onClick={() => editSheratans(record.name, record.celula, record.dob, record.cursos.precurso, record.cursos.iniciados, record.cursos.avanzados, record.cursos.capitanes, record.cursos.ccc, record.Sacramentos.bautizo, record.Sacramentos.comunion, record.Sacramentos.confirmacion, record.Active, record._id, record.Contacto.numero, record.Contacto.emergencia, record.Contacto.num_emergencia)}
            className='div-searcher'
            // icon={<TbInfoTriangle size={30} />}
            style={{
              color: color, border: `1.5px solid ${bg}`,
              fontWeight: 500,
              backgroundColor: bg
            }}>Editar</Button>
        </div>,
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
      // sorter: (a, b) => a.celula.localeCompare(b.celula),
      // sortDirections: ['ascend'],
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
    {
      title: `id`,
      width: '10%',
      dataIndex: '_id',
      key: '_id',
      render: (text) => (
        <p style={{ fontWeight: 400, textAlign: 'center', color: '#bbb' }}>{text}</p>
      )

    },

    {
      title: `Detalles`,
      key: 'operation',
      fixed: 'right',
      width: '7%',
      render: (text, record) =>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Button
            onClick={() => editYahoskas(record.name, record.celula, record.dob, record.cursos.iniciados, record.cursos.soldados, record.cursos.caballeros, record.cursos.llamados, record.cursos.cdj, record.Sacramentos.bautizo, record.Sacramentos.comunion, record.Sacramentos.confirmacion, record.Active, record._id, record.Contacto.numero, record.Contacto.emergencia, record.Contacto.num_emergencia)}
            className='div-searcher'
            // icon={<TbInfoTriangle size={30} />}
            style={{
              color: color, border: `1.5px solid ${bg}`,
              fontWeight: 500,
              backgroundColor: bg
            }}>Editar</Button>
        </div>,
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
    {
      title: `id`,
      width: '10%',
      dataIndex: '_id',
      key: '_id',
      render: (text) => (
        <p style={{ fontWeight: 400, textAlign: 'center', color: '#bbb' }}>{text}</p>
      )

    },

    {
      title: `Detalles`,
      key: 'operation',
      fixed: 'right',
      width: '7%',
      render: (text, record) =>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Button
            onClick={() => editBites(record.name, record.dob, record.cursos.discipulos, record.cursos.apostoles, record.cursos.profetas, record.cursos.cristeros, record.Sacramentos.bautizo, record.Sacramentos.comunion, record.Sacramentos.confirmacion, record.Active, record._id, record.Contacto.numero, record.Contacto.emergencia, record.Contacto.num_emergencia)}
            className='div-searcher'
            // icon={<TbInfoTriangle size={30} />}
            style={{
              color: color, border: `1.5px solid ${bg}`,
              fontWeight: 500,
              backgroundColor: bg
            }}>Editar</Button>
        </div>,
    },
  ];
  const nasseriColumnsSmall = [
    {
      title: `Nombre`,
      width: '7%',
      dataIndex: 'name',
      key: 'name',
      // fixed: 'left',

    },
    {
      title: `${celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`,
      width: '8%',
      dataIndex: 'celula',
      key: 'celula',

    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',

    },
    {
      title: `Iniciadas`,
      width: '7%',
      dataIndex: ['cursos', 'iniciadas'],
      key: 'iniciadas',
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
      title: `Bautizo`,
      width: '8%',
      dataIndex: ['Sacramentos', 'bautizo'],
      key: 'bautizo',
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
  const sheratanColumnsSmall = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: `${celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`,
      width: '8%',
      dataIndex: 'celula',
      key: 'celula',

    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',

    },
    {
      title: `Precurso`,
      width: '7%',
      dataIndex: ['cursos', 'precurso'],
      key: 'precurso',
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
      title: `Bautizo`,
      width: '8%',
      dataIndex: ['Sacramentos', 'bautizo'],
      key: 'bautizo',
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
      title: `Célular`,
      width: '8%',
      dataIndex: ['Contacto', 'numero'],
      key: 'numero',

    },
    {
      title: `Contacto`,
      width: '8%',
      dataIndex: ['Contacto', 'emergencia'],
      key: 'emergencia',

    },
    {
      title: `Número`,
      width: '8%',
      dataIndex: ['Contacto', 'num_emergencia'],
      key: 'num_emergencia',

    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
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
  const yahoskaColumnsSmall = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: `${celula.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`,
      width: '8%',
      dataIndex: 'celula',
      key: 'celula',

    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',


    },
    {
      title: `Iniciados`,
      width: '7%',
      dataIndex: ['cursos', 'iniciados'],
      key: 'iniciados',

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
      title: `Bautizo`,
      width: '8%',
      dataIndex: ['Sacramentos', 'bautizo'],
      key: 'bautizo',

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
      title: `Célular`,
      width: '8%',
      dataIndex: ['Contacto', 'numero'],
      key: 'numero',


    },
    {
      title: `Contacto`,
      width: '8%',
      dataIndex: ['Contacto', 'emergencia'],
      key: 'emergencia',


    },
    {
      title: `Número`,
      width: '8%',
      dataIndex: ['Contacto', 'num_emergencia'],
      key: 'num_emergencia',


    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
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
  const biteColumnsSmall = [

    {
      title: `Nombre`,
      width: '8%',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: `DoB`,
      width: '8%',
      dataIndex: 'DoB',
      key: 'DoB',


    },
    {
      title: `Discípulos`,
      width: '7%',
      dataIndex: ['cursos', 'discipulos'],
      key: 'discipulos',

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
      title: `Bautizo`,
      width: '8%',
      dataIndex: ['Sacramentos', 'bautizo'],
      key: 'bautizo',

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
      title: `Célular`,
      width: '8%',
      dataIndex: ['Contacto', 'numero'],
      key: 'numero',


    },
    {
      title: `Contacto`,
      width: '8%',
      dataIndex: ['Contacto', 'emergencia'],
      key: 'emergencia',


    },
    {
      title: `Número`,
      width: '8%',
      dataIndex: ['Contacto', 'num_emergencia'],
      key: 'num_emergencia',


    },

    {
      title: `Estatus`,
      width: '7%',
      dataIndex: 'Active',
      key: 'Active',
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

  const showDrawer = () => {
    setNewUser(true);
  };

  const handleNewUser = (e) => {

    let cursoArray, sacramentoArray

    if (e.curso) {
      cursoArray = curso.map(item => e.cursos.includes(item))
    } else {
      cursoArray = Array(curso.length).fill(false)
    }

    if (e.sacramento) {
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
        postBite(operation, e.name, e.dob.format('YYYY-MM-DD'), cursoArray, sacramentoArray, e.phone, e.e_contacto, e.e_phone,)
        break

      default:
        break;
    }

    console.log(e)



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

  const handleColumnsSmall = (team) => {
    switch (team) {
      case 'sheratan':
        return sheratanColumnsSmall

      case 'nasseri':
        return nasseriColumnsSmall

      case 'yahoska':
        return yahoskaColumnsSmall

      case 'bite':
        return biteColumnsSmall

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

    // switch (team) {
    //   case 'sheratan':
    //     editSheratan(operation, currentName, currentCel, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
    //     break
    //   case 'nasseri':
    //     editNasseri(operation, currentName, currentCel, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
    //     break
    //   case 'yahoska':
    //     editYahoska(operation, currentName, currentCel, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
    //     break
    //   case 'bite':
    //     editBite(operation, currentName, currentDoB, currentCursos, currentSacramentos, currentContacto, currentEmergencia, currentC_emergencia, currentActive, current_id)
    //     break
    //   default:
    //     break;
    // }
  }

  const editNasseris = (name, celula, dob, iniciadas, adiestradas, religiosas, cdj, lider, vec, bautizo, comunion, confirmacion, active, _id, numero, emergencia, n_emergencia) => {

    const cursos = [
      iniciadas, adiestradas, religiosas, cdj, lider, vec
    ]

    const sacramentos = [
      bautizo, comunion, confirmacion
    ]

    setOpen(true)
    setCurrentName(name)
    setCurrentCel(celula)
    setCurrentDoB(dob)
    setCurrentCursos(cursos)
    setCurrentSacramentos(sacramentos)
    setCurrentActive(active)
    setCurrent_id(_id)
    setCurrentContacto(numero)
    setCurrentEmergencia(emergencia)
    setCurrentC_emergencia(n_emergencia)
    console.log(cursos)
  }

  const editSheratans = (name, celula, dob, precurso, iniciados, avanzados, capitanes, ccc, bautizo, comunion, confirmacion, active, _id, numero, emergencia, n_emergencia) => {

    const cursos = [
      precurso, iniciados, avanzados, capitanes, ccc
    ]

    const sacramentos = [
      bautizo, comunion, confirmacion
    ]

    setOpen(true)
    setCurrentName(name)
    setCurrentCel(celula)
    setCurrentDoB(dob)
    setCurrentCursos(cursos)
    setCurrentSacramentos(sacramentos)
    setCurrentActive(active)
    setCurrent_id(_id)
    setCurrentContacto(numero)
    setCurrentEmergencia(emergencia)
    setCurrentC_emergencia(n_emergencia)
    console.log(cursos)
  }

  const editYahoskas = (name, celula, dob, iniciados, saldados, caballeros, llamados, cdj, bautizo, comunion, confirmacion, active, _id, numero, emergencia, n_emergencia) => {

    const cursos = [
      iniciados, saldados, caballeros, llamados, cdj
    ]

    const sacramentos = [
      bautizo, comunion, confirmacion
    ]

    setOpen(true)
    setCurrentName(name)
    setCurrentCel(celula)
    setCurrentDoB(dob)
    setCurrentCursos(cursos)
    setCurrentSacramentos(sacramentos)
    setCurrentActive(active)
    setCurrent_id(_id)
    setCurrentContacto(numero)
    setCurrentEmergencia(emergencia)
    setCurrentC_emergencia(n_emergencia)
    console.log(cursos)
  }

  const editBites = (name, dob, discipulos, apostoles, profetas, cristeros, bautizo, comunion, confirmacion, active, _id, numero, emergencia, n_emergencia) => {

    const cursos = [
      discipulos, apostoles, profetas, cristeros
    ]

    const sacramentos = [
      bautizo, comunion, confirmacion
    ]

    setOpen(true)
    setCurrentName(name)
    setCurrentDoB(dob)
    setCurrentCursos(cursos)
    setCurrentSacramentos(sacramentos)
    setCurrentActive(active)
    setCurrent_id(_id)
    setCurrentContacto(numero)
    setCurrentEmergencia(emergencia)
    setCurrentC_emergencia(n_emergencia)
    console.log(cursos)
  }

  const handleSmallData = (e) => {
    const filter = data.filter((item) => item.name === e);
    setSmallData(filter)
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
    getInitialData()
    if (team) {
      switch (team) {
        case 'sheratan':
          document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${teams.sheratan.color})`
          setName('Conquista Sheratan')
          setImg(teams.sheratan.img)
          setColor(teams.sheratan.color2)
          setBg(teams.sheratan.color)
          setCelula('carreta')
          setPeople('pionero')
          getSheratan(operation)
          setShortName('Sheratan')
          break;

        case 'nasseri':
          document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${teams.nasseri.color})`
          setName('Cadena Nasseri')
          setImg(teams.nasseri.img)
          setColor(teams.nasseri.color2)
          setBg(teams.nasseri.color)
          setCelula('eslabón')
          setPeople('eslabonera')
          getNasseri(operation)
          setShortName('Nasseri')
          break;

        case 'yahoska':
          document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${teams.yahoska.color})`
          setName('Escuadrón Yahoska')
          setImg(teams.yahoska.img)
          setColor(teams.yahoska.color2)
          setBg(teams.yahoska.color)
          setCelula('escuadra')
          setPeople('escuadrillero')
          getYahoska(operation)
          setShortName('Yahoska')
          break;

        case 'bite':
          document.body.style.backgroundColor = document.body.style.backgroundColor = document.body.style.background = `radial-gradient(at 50% 50%, rgba(255, 255, 255, 20%), ${teams.bite.color})`
          setName('Juvenil Bité Nirata')
          setImg(teams.bite.img)
          setColor(teams.bite.color2)
          setBg(teams.bite.color)
          setPeople('miembro')
          setShortName('Bité Nirata')
          // setCelula('miembro')
          getBite(operation)
          break;

        default:
          break;
      }
    }
    setFilterCel([])
    setData([])
  }, [])

  useEffect(() => {
    setData_users(data)
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
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                height: 'auto', width: 'auto', flexDirection: 'column', position: 'relative',
                paddingBottom: '4%'
              }}>



                <Row style={{
                  width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                  flexDirection: 'row', margin: '-2vh'
                }}>
                  <img src={img} style={{ height: '15vh' }} />
                  <p style={{
                    fontSize: '5em', fontWeight: 650, fontStyle: 'italic',
                    wordBreak: 'break-word', width: '70%', lineHeight: '0.9em',
                    marginLeft: '2vh', color: color
                  }}>{name}</p>

                </Row>

                <hr style={{
                  width: '80%', border: `2px solid ${color}`,
                  marginTop: '0vh'
                }} />


                <Row style={{
                  width: '80%',
                  marginTop: '2vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                  <Row>
                    <Button
                      onClick={refresh}
                      icon={<BiRefresh size={20} style={{ color: '#f6f6f6' }} />} style={{
                        margin: '0 0.5vh 0 0', backgroundColor: color,
                        border: `1.5px solid ${color}`
                      }} />
                    <Button
                      onClick={showDrawer}
                      style={{
                        backgroundColor: color,
                        color: '#f6f6f6', fontWeight: '500',
                        border: `1.5px solid ${color}`,
                        margin: '0 0.5vh 0 0.5vh', display: `${state !== 'table' ? 'none' : ''}`
                      }}>
                      {`+ ${people.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`}
                    </Button>
                    <Button
                      onClick={() => setState('table')}
                      style={{
                        backgroundColor: color,
                        color: '#f6f6f6', fontWeight: '500',
                        border: `1.5px solid ${color}`,
                        margin: '0 0.5vh 0 0.5vh', display: `${state !== 'table' ? '' : 'none'}`
                      }}>
                      {`Mi campo`}
                    </Button>
                    <Button
                      onClick={() => setState('metrics')}
                      style={{
                        margin: '0 0.5vh 0 0.5vh',
                        backgroundColor: color,
                        color: '#f6f6f6', fontWeight: '500',
                        border: `1.5px solid ${color}`,
                      }}>
                      Métricos
                    </Button>
                  </Row>

                  <Link to="/azzhakrutt/login" style={{
                    // position: 'absolute', top: '70px', right: '150px'
                  }}>
                    <Button icon={<CiLogout size={20} style={{ color: '#f6f6f6' }} />} style={{
                      margin: '0 0.5vh 0 0', backgroundColor: color,
                      border: `1.5px solid ${color}`
                    }} />
                  </Link>
                </Row>
                {
                  state === 'table' ? <TeamsTable team={team} data={data} handleColumns={handleColumns} />
                    : <Stadistics team={team} data={data} celula={celula_} sacramentos={sacramento} cursos={curso} color={color} bg={bg} />
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
            </>
            : <div style={{
              height: "90vh", width: '98vw', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <img src={teams[team].gif} style={{ width: '30%', height: '40%' }} />

            </div>
        }

      </div>

      <div className='small'>
        {
          render
            ? <>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                height: 'auto', width: 'auto', flexDirection: 'column', position: 'relative',
                padding: '4% 0 4% 0'
              }}>
                <Row style={{
                  width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'row', margin: '0 0 2vh 0'
                }}>
                  <img src={img} style={{ height: '10vh' }} />
                  <p style={{
                    fontSize: '4em', fontWeight: 650, fontStyle: 'italic',
                    wordBreak: 'break-word', width: 'auto', lineHeight: '0.9em',
                    margin: '0 0 0 2vh', color: color
                  }}>{shortName}</p>

                </Row>

                <hr style={{
                  width: '70%', border: `2px solid ${color}`,
                  marginTop: '0vh'
                }} />


                <Row style={{
                  width: '70%',
                  margin: '2vh 0 2vh 0', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>

                  <Button
                    onClick={refresh}
                    icon={<BiRefresh size={20} style={{ color: '#f6f6f6' }} />} style={{
                      margin: '0 0.1vh 0 0', backgroundColor: color,
                      border: `1.5px solid ${color}`, borderRadius: '1vh 0 0 1vh'
                    }} />
                  <Button
                    onClick={showDrawer}
                    style={{
                      backgroundColor: color,
                      color: '#f6f6f6', fontWeight: '500',
                      border: `1.5px solid ${color}`, borderRadius: 0,
                      margin: '0 0.1vh 0 0.1vh', display: `${state !== 'table' ? 'none' : ''}`
                    }}>
                    {`+ ${people.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}`}
                  </Button>
                  <Button
                    onClick={() => setState('table')}
                    style={{
                      backgroundColor: color,
                      color: '#f6f6f6', fontWeight: '500',
                      border: `1.5px solid ${color}`, borderRadius: 0,
                      margin: '0 0.1vh 0 0.1vh', display: `${state !== 'table' ? '' : 'none'}`
                    }}>
                    {`Mi campo`}
                  </Button>
                  <Button
                    onClick={() => setState('metrics')}
                    style={{
                      margin: '0 0.1vh 0 0.1vh',
                      backgroundColor: color, borderRadius: 0,
                      color: '#f6f6f6', fontWeight: '500',
                      border: `1.5px solid ${color}`,
                    }}>
                    Métricos
                  </Button>


                  <Link to="/azzhakrutt/login" style={{
                    // position: 'absolute', top: '70px', right: '150px'
                  }}>
                    <Button icon={<CiLogout size={20} style={{ color: '#f6f6f6' }} />} style={{
                      margin: '0 0 0 0.1vh', backgroundColor: color,
                      border: `1.5px solid ${color}`, borderRadius: '0 1vh 1vh 0'
                    }} />
                  </Link>
                </Row>

                <hr style={{
                  width: '70%', border: `2px solid ${color}`,
                  marginTop: '0vh', display: state !== 'table' ? 'none' : ''
                }} />

                <Col style={{ width: '70%', marginTop: '1vh', display: state !== 'table' ? 'none' : ''}}>
                  <p style={{ fontWeight: 500, margin: '1vh 0 0.5vh 0', fontStyle: 'italic' }}>{`Seleciona un ${people}`}</p>
                  <Row>
                    <Select style={{ width: '90%' }} onChange={handleSmallData}>
                      {
                        data.map((celula) => (
                          <Option key={celula._id} value={celula.name}
                            placeholder={people.toLowerCase().replace(/(^|\s)\S/g, (match) => match.toUpperCase())}>
                            {celula.name}
                          </Option>
                        ))
                      }
                    </Select>
                    <Button onClick={() => setSmallData(data)} icon={<BiRefresh size={20} />} />
                  </Row>

                </Col>
                {
                  state === 'table' ? <TeamsTable team={team} data={smallData} handleColumns={handleColumnsSmall} />
                    : <Stadistics team={team} data={data} celula={celula_} sacramentos={sacramento} cursos={curso} color={color} bg={bg} />
                }
              </div>

              <Drawer
                title={`${team === 'nasseri' ? `Nueva ${people}` : `Nuevo ${people}`}`}
                placement="right"
                onClose={() => setNewUser(false)}
                width='100%'
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

            </>
            : <div style={{
              height: "90vh", width: '98vw', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <img src={teams[team].gif} style={{ width: '30%', height: '40%' }} />

            </div>
        }

      </div>
    </>
  )
}
