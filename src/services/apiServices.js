

export async function getCursos(operation) {
    try {
        await operation({
            method: "GET",
            url: "/curs/getCurso/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function getSacramentos(operation) {
    try {
        await operation({
            method: "GET",
            url: "/curs/getSacramentos/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function getCelula(operation) {
    try {
        await operation({
            method: "GET",
            url: "/celu/getCelula/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function getNasseri(operation) {
    try {
        await operation({
            method: "GET",
            url: "/nass/getNasseri/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function getSheratan(operation) {
    try {
        await operation({
            method: "GET",
            url: "/sher/getSheratan/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function getYahoska(operation) {
    try {
        await operation({
            method: "GET",
            url: "/yaho/getYahoska/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function getBite(operation) {
    try {
        await operation({
            method: "GET",
            url: "/bite/getBite/",
        })

    } catch (error) {
        console.error(error)
    }
}

export async function postNasseri(operation, name, celula, dob, cursos, sacramentos, cel, contacto, cel_e,) {
    try {
        await operation({
            method: "POST",
            url: "/nass/newNasseri/",
            data: {
                name: name,
                celula: celula,
                DoB: dob,
                cursos: {
                    iniciadas: cursos[0],
                    adiestradas: cursos[1],
                    religiosas: cursos[2],
                    cdj: cursos[3],
                    lider_en: cursos[4],
                    v_cristo: cursos[5],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: true

            },
        })

    } catch (error) {
        console.error(error)
    }
}
export async function postSheratan(operation, name, celula, dob, cursos, sacramentos, cel, contacto, cel_e,) {
    try {
        await operation({
            method: "POST",
            url: "/sher/newSheratan/",
            data: {
                name: name,
                celula: celula,
                DoB: dob,
                cursos: {
                    precurso: cursos[0],
                    iniciados: cursos[1],
                    avanzados: cursos[2],
                    capitanes: cursos[3],
                    ccc: cursos[4],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: true

            },
        })

    } catch (error) {
        console.error(error)
    }
}
export async function postYahoska(operation, name, celula, dob, cursos, sacramentos, cel, contacto, cel_e,) {
    try {
        await operation({
            method: "POST",
            url: "/yaho/newYahoska/",
            data: {
                name: name,
                celula: celula,
                DoB: dob,
                cursos: {
                    iniciados: cursos[0],
                    soldados: cursos[1],
                    caballeros: cursos[2],
                    llamados: cursos[3],
                    cdj: cursos[4],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: true

            },
        })

    } catch (error) {
        console.error(error)
    }
}
export async function postBite(operation, name, dob, cursos, sacramentos, cel, contacto, cel_e,) {
    try {
        await operation({
            method: "POST",
            url: "/bite/newBite/",
            data: {
                name: name,
                DoB: dob,
                cursos: {
                    discipulos: cursos[0],
                    apostoles: cursos[1],
                    profetas: cursos[2],
                    cristeros: cursos[3],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: true

            },
        })

    } catch (error) {
        console.error(error)
    }
}

export async function editNasseri(operation, name, celula, dob, cursos, sacramentos, cel, contacto, cel_e, active, _id) {
    try {
        await operation({
            method: "POST",
            url: `/nass/editNasseri/${_id}`,
            data: {
                name: name,
                celula: celula,
                DoB: dob,
                cursos: {
                    iniciadas: cursos[0],
                    adiestradas: cursos[1],
                    religiosas: cursos[2],
                    cdj: cursos[3],
                    lider_en: cursos[4],
                    v_cristo: cursos[5],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: active

            },
        })

    } catch (error) {
        console.error(error)
    }
}
export async function editSheratan(operation, name, celula, dob, cursos, sacramentos, cel, contacto, cel_e, active, _id) {
    try {
        await operation({
            method: "POST",
            url: `/sher/editSheratan/${_id}`,
            data: {
                name: name,
                celula: celula,
                DoB: dob,
                cursos: {
                    precurso: cursos[0],
                    iniciados: cursos[1],
                    avanzados: cursos[2],
                    capitanes: cursos[3],
                    ccc: cursos[4],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: active

            },
        })

    } catch (error) {
        console.error(error)
    }
}
export async function editYahoska(operation, name, celula, dob, cursos, sacramentos, cel, contacto, cel_e, active, _id) {
    try {
        await operation({
            method: "POST",
            url: `/yaho/editYahoska/${_id}`,
            data: {
                name: name,
                celula: celula,
                DoB: dob,
                cursos: {
                    iniciados: cursos[0],
                    soldados: cursos[1],
                    caballeros: cursos[2],
                    llamados: cursos[3],
                    cdj: cursos[4],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: active

            },
        })

    } catch (error) {
        console.error(error)
    }
}
export async function editBite(operation, name, dob, cursos, sacramentos, cel, contacto, cel_e, active, _id) {
    try {
        await operation({
            method: "POST",
            url: `/bite/editBite/${_id}`,
            data: {
                name: name,
                DoB: dob,
                cursos: {
                    discipulos: cursos[0],
                    apostoles: cursos[1],
                    profetas: cursos[2],
                    cristeros: cursos[3],
                },
                Sacramentos: {
                    bautizo: sacramentos[0],
                    comunion: sacramentos[1],
                    confirmacion: sacramentos[2],
                },
                Contacto: {
                    numero: cel,
                    emergencia: contacto,
                    num_emergencia: cel_e,
                },
                Active: active

            },
        })

    } catch (error) {
        console.error(error)
    }
    // const data = {
    //     name: name,
    //     DoB: dob,
    //     cursos: {
    //         discipulos: cursos[0],
    //         apostoles: cursos[1],
    //         profetas: cursos[2],
    //         cristeros: cursos[3],
    //     },
    //     Sacramentos: {
    //         bautizo: sacramentos[0],
    //         comunion: sacramentos[1],
    //         confirmacion: sacramentos[2],
    //     },
    //     Contacto: {
    //         numero: cel,
    //         emergencia: contacto,
    //         num_emergencia: cel_e,
    //     },
    //     Active: active
    // }
    // console.log(data)
}