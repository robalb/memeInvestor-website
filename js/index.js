
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
    ca('js-nav', 'nav-visible')
  });

  bt('js-close-nav', e =>{
    cr('js-nav', 'nav-visible')
  });

  /*
   * login sidebar
   */
  const showLogin = ()=> ca('js-login', 'login-visible')
  bt('js-show-login', showLogin)
  bt('js-mob-show-login', showLogin)

  bt('js-close-login', e =>{
    cr('js-login', 'login-visible')
  });

});
}
