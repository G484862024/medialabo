
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    for (let item of data.list.g1) {
      console.log("タイトル: " + item.title);
      console.log("出演者: " + (item.act || "情報なし"));
      console.log("放送時間: " + item.start_time + " ～ " + item.end_time);
      console.log("----------------------------");
    }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let resultDiv=document.createElement('div');
  resultDiv.id='result';
  document.body.appendChild(resultDiv);

  let t=document.querySelector("#channel").value;
  let datalist=data.List[x];

  for (let item of datalist) {
    let title=document.createElement('p');
    title.textContent="タイトル:"+item.title;

    let act=document.createElement('p');
    act.textContent="出演者:"+(item.act||"情報なし");

    let start=document.createElement('p');
    start.textContent="開始時刻:"+item.start_time;

    let end=document.createElement('p');
    end.textContent="終了時刻:"+item.end_time;

    let content=document.createElement('p');
    content.textContent="番組説明:"+(item.content||"説明なし");

    let hr=document.createElement('hr');

    resultDiv.appendChild(title);
    resultDiv.appendChild(act);
    resultDiv.appendChild(start);
    resultDiv.appendChild(end);
    resultDiv.appendChild(content);
    resultDiv.appendChild(hr);
  }
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b=document.querySelector('#print');
b.addEventListener('click',sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let x=document.querySelector("#channel").value;
  let y=document.querySelector("#jannru").value;
  let url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${x}-${y}-j.json`;

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data=resp.data;

  if(typeof data==='string'){
    data =JSON.parse(data);
  }

  console.log(data);
  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
   console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
   console.log('Ajax 通信が終わりました');
}

