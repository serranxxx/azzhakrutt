import nasseri from '../assets/escudos/SVG/nasseri.svg'
import yahoska from '../assets/escudos/SVG/yahoska.svg'
import bite from '../assets/escudos/SVG/bite.svg'
import sheratan from '../assets/escudos/SVG/sheratan.svg'

import nasseri_d from '../assets/escudos/SVG/nasseri_d.svg'
import yahoska_d from '../assets/escudos/SVG/yahoska_d.svg'
import bite_d from '../assets/escudos/SVG/bite_d.svg'
import sheratan_d from '../assets/escudos/SVG/sheratan_d.svg'

import nasseri_gif from '../assets/gifs/nasseri.gif.svg'
import yahoska_gif from '../assets/gifs/yahoska.gif.svg'
import sheratan_gif from '../assets/gifs/sheratan.gif.svg'
import bite_gif from '../assets/gifs/bit.gif.svg'




export const teams = {
    nasseri: {
        name: 'Cadena Nasseri',
        img: nasseri,
        dark: nasseri_d,
        value: 'nasseri',
        color: '#efcedf',
        color2: '#66360c',
        color3: '#e89ec0',
        gif: nasseri_gif
    },
    yahoska: {
        name: 'Escuadrón Yahoska',
        img: yahoska,
        dark: yahoska_d,
        value: 'yahoska',
        color: '#6d6760',
        color2: '#222',
        color3: '#302619',
        gif: yahoska_gif
    },
    sheratan: {
        name: 'Conquista Sheratan',
        img: sheratan,
        dark: sheratan_d,
        value: 'sheratan',
        color: '#95ad92',
        color2: '#110f4f',
        color3: '#367c2f',
        gif: sheratan_gif
    },
    bite: {
        name: 'Juvenil Bité Nirata',
        img: bite,
        dark: bite_d,
        value: 'bite',
        color: '#878799',
        color2: '#332e75',
        color3: '#d1d1d1',
        gif: bite_gif
    }
}