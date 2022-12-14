import React, { useEffect } from 'react'

const Comments = ({ fullUrl, id }) => {
  useEffect(() => {
    try{
      const DISQUS_SCRIPT = 'disq_script'
    const sd = document.getElementById(DISQUS_SCRIPT)
    if (!sd) {
      var disqus_config = function() {
        this.page.url = fullUrl
        this.page.identifier = id
      }

      const d = document
      const s = d.createElement('script')
      s.src = 'https://sentry.disqus.com/embed.js'
      s.id = DISQUS_SCRIPT
      s.async = true
      s.setAttribute('data-timestamp', +new Date())

      d.body.appendChild(s)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
    }catch(e){
      console.table(e)
    }
  }, [fullUrl,id])
    return(
      <section className='p-4' style={{backgroundColor:'#fff'}}>
        <section id="disqus_thread">
        </section>
      </section>
    )
  }
  
  export default Comments