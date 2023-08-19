export const handleCursos = (curso) => {
    switch (curso) {
        case 'Iniciadas': return 'iniciadas'
        case 'Adiestradas': return 'adiestradas'
        case 'Religiosas': return 'religiosas'
        case 'CDJ': return 'cdj'
        case 'Líder en mi': return 'lider_en'
        case 'Vida en Cristo': return 'v_cristo'

        case 'Iniciados': return 'iniciados'
        case 'Soldados': return 'soldados'
        case 'Caballeros': return 'caballeros'
        case 'Llamados de Cristo': return 'llamados'

        case 'Precurso': return 'precurso'
        case 'Avanzados': return 'avanzados'
        case 'Adiestrados': return 'cdj'
        case 'CCC': return 'ccc'
        case 'Capitanes': return 'capitanes'

        case 'Discípulos': return 'discipulos'
        case 'Apostoles': return 'apostoles'
        case 'Profetas': return 'profetas'
        case 'Cristeros': return 'cristeros'
            
            
    
        default:
            break;
    }
}

export const handleSacramentos = (sacramento) => {
    switch (sacramento) {
        case 'Bautizo': return 'bautizo'
        case 'Comunión': return 'comunion'
        case 'Confirmación': return 'confirmacion'
        default:
            break;
    }
}

