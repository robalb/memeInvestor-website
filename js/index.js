
/*
 * this is a temporary js file that handles all the interface interactions
 * that are not implemented in css
 * */

{
  document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('js-burger').addEventListener('click', function(e){
      console.log(1);
      document.getElementById('js-nav').classList.add('visible');
    });

    document.getElementById('js-close-nav').addEventListener('click', function(e){
      document.getElementById('js-nav').classList.add('fade-out');
      setTimeout(()=>{
      document.getElementById('js-nav').classList.remove('visible');
      document.getElementById('js-nav').classList.remove('fade-out');
      }, 400);
    });

  });
}
