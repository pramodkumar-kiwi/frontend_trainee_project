import React from 'react'
import  {Paper} from '@mui/material'

const Item = ({item}) => {
  return (
    <Paper>
        <div style={{display:'flex', justifyContent:'center', zIndex:'-5'}}>
        <img src={item.image} alt={item.id} style={{height:'415px', width:'500px'}} />
        </div>
    </Paper>

  )
}

export default Item
