//答え
let kotae=Math.floor(Math.random()*10)+1;
console.log('答え（デバッグ用）：'+kotae);

//入力回数（予想回数）
let kaisu=0;

//予想を4回実行する
//将来以下のhantei();の4回の呼び出しを全て削除する
//代わりにここでは、ボタンを押したらhantei()を呼び出すイベント処理をする
let kazuate=document.querySelector('button#check');
kazuate.addEventListener('click',hantei);

//ボタンを押した後の処理をする関数hantei()の定義
function hantei(){
    //将来ここでは４ではなくテキストボックスに指定された数値をyosoに代入する
    
    let a=document.querySelector('input[name=yoso]');
    yoso=Number(a.value);
    kaisu=kaisu+1;
    console.log(kaisu+'回目の予想:'+yoso);
    if(kaisu>3){
        console.log('答えは'+kotae+'でした.既にゲームは終わっています');
    }
    if (kaisu<=3){
        if(yoso===kotae){
            console.log('正解です.おめでとう!');
            kaisu=kaisu+3;
        }else{
            if(kaisu===3){
                console.log('まちがい.残念でした答えは'+kotae+'です.');
            }else if(kaisu<3){
                if(yoso<kotae){
                console.log('まちがい.答えはもっと大きいですよ.');
                }if(yoso>kotae){
                console.log('まちがい.答えはもっと小さいですよ.');
                }
            }
        }
    }

    //課題3-1:正解判定する
    //kotaeとyosoが一致するかどうか調べて結果を出力
    //課題3-1における出力先はコンソール
}
