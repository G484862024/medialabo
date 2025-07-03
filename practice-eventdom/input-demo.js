
  
  b=document.querySelector('button#print');
  b.addEventListener('click',greeting);
  function greeting(){
    console.log('こんにちは');
    let i=document.querySelector('input[name="shimei"]');
    let shimei=i;
    let aisatsu='こんにちは,'+i+'さん';
    let p=('input[id="message"]');
    p=aisatsu;
  }

  b.addEventListener('click',greeting);
