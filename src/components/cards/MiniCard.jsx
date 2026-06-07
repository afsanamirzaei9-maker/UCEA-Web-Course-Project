import React from 'react'
import { CardHeading } from '../heading/CardHeading'
import { Paragraph } from '../text/Paragraph'

const MiniCard = ({title, message}) => {
  return (
    <div className='size-60 shadow shadow-lg border rounded-xl text-center'>
        <CardHeading text={title}/>
        <Paragraph paragraph={message}/>
    </div>
  )
}

export default MiniCard