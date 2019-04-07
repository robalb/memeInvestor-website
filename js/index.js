
/*
 * this is a temporary js file that handles all the interface interactions
 * that are not implemented in css
 * */

{
  document.addEventListener('DOMContentLoaded', ()=>{

    const gid = id => document.getElementById(id)

    const ael = (id, type, callBack) => gid(id).addEventListener(type, callBack)
    
    const ca = (id, cls) => gid(id).classList.add(cls)
    const cr = (id, cls) => gid(id).classList.remove(cls)



    /*
     * navbar burger + overlay
     */
    ael('js-burger', 'click', e =>{
      console.log(1);
      ca('js-nav', 'visible')
    });

    ael('js-close-nav', 'click', e =>{
      ca('js-nav', 'fade-out')
      setTimeout(()=>{
        cr('js-nav', 'visible')
        cr('js-nav', 'fade-out')
      }, 400);
    });



  });
}
