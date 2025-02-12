'use strict';
{
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click',() => {
      dt.parentNode.classList.toggle('appear');

      // １つ開いたら他は閉じる
      dts.forEach(el => {
        if(dt !== el){
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}