import React from 'react'


export type DressStyleType = {
  imageUrl: string;
}


const dressstyle = ({imageUrl }: DressStyleType) => {
  return (
    <div>
         <div
            style={{
              background: imageUrl,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
               width: "200px",
              height: "200px",
              borderRadius: "10px"
            }}
          />
    </div>
  )
}

export default dressstyle