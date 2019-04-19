
/*
 * this is a temporary js file that handles all the interface interactions
 * that are not implemented in css
 * */

{
document.addEventListener('DOMContentLoaded', ()=>{

  const gid = id => document.getElementById(id)

  const ael = (id, type, callBack) => gid(id).addEventListener(type, callBack)

  const bt = (id, callBack) => ael(id, 'click', callBack)
  
  const ca = (id, cls) => gid(id).classList.add(cls)
  const cr = (id, cls) => gid(id).classList.remove(cls)


  /*
   * get started
   */
  bt('js-get-started', e =>{
    gid('transition').scrollIntoView({ behavior: 'smooth' })
  });

  /*
   * init particles
   */
  const width = window.innerWidth || document.documentElement.clientWidth
  const height = window.innerHeight || document.documentElement.clientHeight
  if(Math.min(width, height) > 500){
    particlesJS.load('particles', 'js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  /*
   * navbar burger + overlay
   */
  bt('js-burger', e =>{
    e.preventDefault()
    ca('js-nav', 'nav-visible')
  });

  bt('js-close-nav', e =>{
    e.preventDefault()
    cr('js-nav', 'nav-visible')
  });

  /*
   * login sidebar
   */
  const showLogin = e=> {
    e.preventDefault()
    ca('js-login', 'login-visible')
  }
  bt('js-show-login', showLogin)
  bt('js-mob-show-login', showLogin)

  bt('js-close-login', e =>{
    e.preventDefault()
    cr('js-login', 'login-visible')
  });

  /*
   * cookie popup
   */
  if(true){
    setTimeout( ()=>ca('js-cookie', 'cookie-visible'), 1000)
    bt('js-close-cookie', e=>{
      e.preventDefault()
      cr('js-cookie', 'cookie-visible')
    })

    bt('js-cookie-ok', e=>{
      e.preventDefault();
      cr('js-cookie', 'cookie-visible')
      //allow evil cookies
    })

    bt('js-cookie-no', e=>{
      e.preventDefault();
      cr('js-cookie', 'cookie-visible')
      //don't allow evil cookies
    })
  }

});
}
