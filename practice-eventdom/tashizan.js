function tashizan(){

    let x=document.querySelector('input[name=left]');
    left Number=(x.value);
    let y=document.querySelector('input [name=right]');
    right Number=(y.value);
    let answer=left+right;
    console.log('答え'+answer);
    let z=document.querySelector('span#answer');
    z.textContent=answer;

}
let btn=document.querySelector('button#calc');
btn.addEventListener('click',tashizan);
