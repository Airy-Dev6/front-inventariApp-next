import {Dashboard} from '@uppy/react'
import Tus from '@uppy/tus'
import Instagram from '@uppy/instagram'
import Webcam from '@uppy/webcam'
import Uppy from '@uppy/core'

import React, { useState } from 'react'

export default function Uploader () {
  const [uppy, setUppy] = useState(null)
  React.useEffect(() => {
    const uppyInstance = Uppy()
      /* .use(Dashboard, {
        inline: true

      }) */

      .use(Instagram, {
        target: Dashboard,
        companionUrl: 'https://companion.uppy.io'
      })

      .use(Webcam, { target: Dashboard })

      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

      .on('complete', (result) => {
        console.log('Upload result:', result)
        console.log(result.successful[0].response.uploadURL)
      })
      setUppy(uppyInstance)
  }, [])

  React.useEffect(() => {
    return () => uppy.close()
  }, [])

  return (
    <>
      {uppy &&
        <Dashboard
          uppy={uppy}
          plugins={['Webcam']}
        />
      }
    </>
    
  )
}