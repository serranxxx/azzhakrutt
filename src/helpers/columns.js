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
      // fixed: 'right',
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
  const sheratanColumnsSmall = [

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
      // fixed: 'right',
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
  const yahoskaColumnsSmall = [

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
      // fixed: 'right',
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
  const biteColumnsSmall = [

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
      // fixed: 'right',
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