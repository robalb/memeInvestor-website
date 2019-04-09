
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
   * init particles
   */
  particlesJS.load('particles', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  /*
   * navbar burger + overlay
   */
  bt('js-burger', e =>{
    console.log(1);
    ca('js-nav', 'nav-visible')
  });

  bt('js-close-nav', e =>{
    ca('js-nav', 'nav-fade-out')
    setTimeout(()=>{
      cr('js-nav', 'nav-visible')
      cr('js-nav', 'nav-fade-out')
    }, 400);
  });

  /*
   * login sidebar
   */
  function showLogin(){
    ca('js-login', 'login-visible')
  }
  bt('js-show-login', showLogin)
  bt('js-mob-show-login', showLogin)
  bt('js-close-login', e =>{
    ca('js-login', 'login-fade-out')
    setTimeout(() =>{
      cr('js-login', 'login-fade-out')
      cr('js-login', 'login-visible')
    }, 400)
  });




});
}
