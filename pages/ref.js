import React from 'react'

import { useRef } from 'react'

const Ref = () => {
  let myRefs = useRef([]);

  return (
    <>
      {
        [1, 2, 3].map((v, i) => {
          return (
            <button
              ref={(el) => (myRefs.current[i] = el)}
              id={i}
              
            >{`Button${i}`}</button>
          );
        })
      }
    </>
  )
}

export default Ref