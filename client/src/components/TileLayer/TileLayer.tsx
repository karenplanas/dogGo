import React from 'react'
// import { TileLayer } from "react-leaflet";

interface Props {
  url: string
  attribution: string
}

const TileLayerCostumComponent : React.FC<Props> = ({ url, attribution}) => {
  return (
    // <TileLayer url={url} attribution={attribution}/>
    <div>TileLayer</div>
  )
}

export { TileLayerCostumComponent }