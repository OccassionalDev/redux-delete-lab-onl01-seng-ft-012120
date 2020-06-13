import React from 'react'
import Band from './Band'

const Bands = props => {
  const bandsObj = props.bands.map(band => <Band key={band.id} {...band} deleteBand={ props.deleteBand }/>)
  
  return (
    <div>
      { bandsObj }
    </div>
    )
}

export default Bands