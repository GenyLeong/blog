import * as React from "react"

const sizePresets = {
  large: {
    width: "100%",
    height: "650",
  },
  compact: {
    width: "100%",
    height: "450",
  },
}

function External({url, size}){
  return (
    <iframe src={`https://flo.uri.sh/${url}/embed`}
      title='Interactive or visual content'
      className='flourish-embed-iframe'
      frameBorder='0'
      scrolling='no'
      width={sizePresets[size].width}
      height={sizePresets[size].height}>      
    </iframe>
  )
}

export default External
