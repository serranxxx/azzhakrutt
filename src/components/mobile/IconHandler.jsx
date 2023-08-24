import React from 'react'
import { MdDoneOutline, MdRemove } from 'react-icons/md'

export const IconHandler = (props) => {
    const {color} = props
  return (
    <>
        {
            props.data.map((dato) => (
                dato? <MdDoneOutline size={15} style={{color}}/>
                : <MdRemove size={15} style={{color}} />
            ))
        }
    </>
  )
}
