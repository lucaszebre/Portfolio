import React from 'react'

const Youtube = () => {
  return (
    <div className='w-full flex flex-row justify-center items-center min-h-[700px]'>
      {/* Using youtube-nocookie.com for privacy-enhanced mode to minimize third-party cookies */}
      <iframe 
        width="760" 
        height="500"  
        src="https://www.youtube-nocookie.com/embed/dAv2vatCcVE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Youtube
