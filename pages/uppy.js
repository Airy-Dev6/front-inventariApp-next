import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Tus from '@uppy/tus'
import Instagram from '@uppy/instagram'
import Webcam from '@uppy/webcam'
import {useEffect} from 'react'


  
  export default function uppy() {
    useEffect(() => {
      Uppy()
        .use(Dashboard, {
          trigger: '#select-files',
          inline: true
        })
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
      
    }, [])

    return (
      <>
      
      <link rel="stylesheet" href="https://releases.transloadit.com/uppy/v1.26.0/uppy.min.css"/>
      <div className=""> 
        <p>hola koders  </p>
      </div>
      </>

    )
  }
  