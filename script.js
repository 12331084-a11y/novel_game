// 画像のファイル名を名前で管理する
// ここに使いたい画像を増やせば、会話ごとに簡単に切り替えられる
const characterAssets = {
  girl1: "girl1_1.PNG",
  girl2: "girl1_2.PNG",
  girl3: "girl1_3.PNG",
  girl4: "girl1_4.PNG",
  girl5: "girl1_5.PNG",
  boy1: "boy1_1.PNG",
  boy2: "boy1_2.PNG",
  boy3: "boy1_3.PNG", 
  boy4: "boy1_4.PNG",
  boy5: "boy1_5.PNG", 
  boy6: "boy2.PNG",
  empty: "empty.PNG"
};

const bgAssets = {
  BG1: "BG1.PNG",
  BG2: "BG2.PNG",
  BG3: "BG3.PNG",
  BG4: "BG4.PNG"
};

// 会話データを配列で管理する
// name: キャラクター名。空文字なら名前を表示しない
// text: セリフ内容
// character: 立ち絵のキー名（例: "girl1"）か、直接ファイル名も使える
// bg: 背景のキー名（例: "room"）か、直接ファイル名も使える
const messages = [
  {
    name: "",
    text: "いつも通り、夕暮れ時は二人で野原に寝そべる。虫の声に包まれる。辺りが暗くなるのはあっという間だろう。夜からの冷えた風が頭を醒ます。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "",
    text: "つまらない会話をしながら、相手の顔を窺う。そうすると心が落ち着く。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "",
    text: "先ほどまで一人部屋の布団に包まり、瞼の裏を眺め続けていたおれの実感としては、死から一時的に生き返ったような心地さえある。",
    character: "girl1",
    bg: "BG1"
  },
   {
    name: "",
    text: "しかし、日の落ちきる頃、会話の終わり。毎度飽きもせず同じ忠告をする彼女には、うんざりしていた。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "敬語の女",
    text: "いいですか。既にあなたの記憶は『彼』によって改竄されています。",
    character: "girl3",
    bg: "BG1"
  },
   {
    name: "敬語の女",
    text: "本来、あなたのいた過去に『彼』は存在していません。",
    character: "girl4",
    bg: "BG1"
  },
  {
    name: "敬語の女",
    text: "あなたの記憶と思考のすべて把握するこの私がそういうのですから、間違いないコトなのです……。",
    character: "girl5",
    bg: "BG1"
  },
  {
    name: "",
    text: "ここまでが決まり文句。まず、おれの中身が彼女に筒抜けというのは世界における事実である。",
    character: "girl1",
    bg: "BG1"
  },
   {
    name: "",
    text: "最初は怯えたものの、慣れてしまえばあまりにも心地よい。彼女はおれの全てを肯定してくれている―――はずだった。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "",
    text: "彼女は、『彼』―――八志郎のことだけがどうしても認められないらしい。本来存在しない人間であり、悪であるという。その主張にだけは、いつも頷けなかった。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "",
    text: "八志郎は紛れもなくおれのことを救ってくれた人だ。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "",
    text: "言い分に従うのならば、この救ってもらったという実感は八志郎に捏造されたものということになる。しかし……それが偽りであることの何が悪いのかわからない。仮に、もし八志郎がいなかったらおれは、首でも吊っていただろう。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "おれ",
    text: "そんなに八志郎のことが気に食わないなら、あいつに直接言えばいいじゃない。",
    character: "girl1",
    bg: "BG1"
  },
    {
    name: "敬語の女",
    text: "いやです。あの人、キモチワルイので。",
    character: "girl4",
    bg: "BG1"
  },
    {
    name: "",
    text: "よっぽどな言い様だ。傍から見たらそう感じるものなのかもしれない。",
    character: "girl1",
    bg: "BG1"
  },
   {
    name: "",
    text: "ただ、彼女はきっと正しい。おれは何かを見落としているのだろう。",
    character: "girl1",
    bg: "BG1"
  },
  {
    name: "",
    text: "八志郎のことを知るならば、おれの記憶を探るだけで十分だ。",
    character: "empty",
    bg: "BG2"
  },
  {
    name: "",
    text: "おれが9歳のころの記憶でも思い出してみよう。",
    character: "empty",
    bg: "BG2"
  },
  {
    name: "",
    text: "本来記憶というのは摩耗するもので、こう、八志郎に関することだけなんでも鮮明に思い出すことができるというのは。捏造工作である証拠なのだろうか……。",
    character: "empty",
    bg: "BG2"
  },
  {
    name: "",
    text: "また、夕暮れ。",
    character: "empty",
    bg: "BG3"
  },
  {
    name: "",
    text: "家の裏手にある丘には大抵誰もいない。個人の畑にアクセスするだけの道路があって、わざわざ人が訪れる場所じゃない。",
    character: "empty",
    bg: "BG3"
  },
   {
    name: "",
    text: "いつも一人になりたかった。学校は人が多すぎるし、家に帰れば家族がいる。自分には恵まれ過ぎたことだった。",
    character: "empty",
    bg: "BG3"
  },
   {
    name: "",
    text: "道路の真ん中に座り込む。",
    character: "empty",
    bg: "BG3"
  },
     {
    name: "",
    text: "時報の通り過ぎた夕方の空気と、アスファルトに残った熱が心地よい。",
    character: "empty",
    bg: "BG3"
  },
  {
    name: "",
    text: "落ち着く。体育座りをする……。",
    character: "empty",
    bg: "BG3"
  },
  {
    name: "",
    text: "……。",
    character: "empty",
    bg: "BG3"
  },
   {
    name: "",
    text: "…………。",
    character: "empty",
    bg: "BG3"
  },
  {
    name: "",
    text: "一人の迷いない足音が聞こえてくる。聞きなれた歩調。おれがいつもここに来てしまうのが分かっているし、そしてそれを追いかけるのが役目だと物語っていた。",
    character: "empty",
    bg: "BG3"
  },
   {
    name: "",
    text: "隣で立ち止まる。おれの顔を覗き込んできた……。",
    character: "boy6",
    bg: "BG3"
  },
  {
    name: "八志郎",
    text: "…………。",
    character: "boy2",
    bg: "BG3"
  },
  {
    name: "八志郎",
    text: "……いつも俯いているが、面白いものでも落ちてるのか？",
    character: "boy3",
    bg: "BG3"
  },
  {
    name: "",
    text: "ああ、これだ。おれがあからさまに落ち込んだ態度をとっているにも拘らず、気遣いの一つもない。このフリが意味のないものだと見透かされている。いやしかし、本当に落ち込んでいた時でさえ、八志郎が俺を励ますような言葉をかけたことはなかった。",
    character: "boy1",
    bg: "BG3"
  },
    {
    name: "",
    text: "顔を上げると目が合う。",
    character: "boy1",
    bg: "BG3"
  },
    {
    name: "",
    text: "八志郎もおれの横に座り込んだ。",
    character: "boy1",
    bg: "BG3"
  },
    {
    name: "",
    text: "なにか学校での出来事でも話そうとして……記憶に蓋をした。",
    character: "boy1",
    bg: "BG3"
  },
    {
    name: "",
    text: "思い出したくなかった。",
    character: "boy1",
    bg: "BG3"
  },
   {
    name: "",
    text: "……。",
    character: "boy1",
    bg: "BG3"
  },
  {
    name: "",
    text: "おれは一人がいいとか言っているけれど。",
    character: "boy1",
    bg: "BG3"
  },
    {
    name: "",
    text: "何も聞かれたくないだけで、ただ、気の置き所は求めていて。それが八志郎にはバレているのだった。",
    character: "boy1",
    bg: "BG3"
  },
    {
    name: "",
    text: "……時間が経つ。辺りが暗くなると気も晴れた。",
    character: "empty",
    bg: "BG4"
  },
   {
    name: "",
    text: "八志郎の顔を見たくなった。",
    character: "boy4",
    bg: "BG4"
  },
   {
    name: "",
    text: "八志郎の顔を見たくなったけど、暗くてよく見えない。",
    character: "boy4",
    bg: "BG4"
  },
    {
    name: "おれ",
    text: "八志郎はこんなおそくまで外にいて、怒られないの。",
    character: "boy4",
    bg: "BG4"
  },
   {
    name: "八志郎",
    text: "別に。俺は大人だから。",
    character: "boy5",
    bg: "BG4"
  },
   {
    name: "",
    text: "ならよかった。",
    character: "boy4",
    bg: "BG4"
  },
  {
    name: "おれ",
    text: "八志郎はおれのところにきて、退屈じゃないの",
    character: "boy4",
    bg: "BG4"
  },
    {
    name: "八志郎",
    text: "……そういうのって、俺に失礼だからな。無粋って、イミわかるか。",
    character: "boy5",
    bg: "BG4"
  },
  {
    name: "",
    text: "わからない。",
    character: "boy4",
    bg: "BG4"
  },
  {
    name: "",
    text: "八志郎はおれにとって都合の良すぎる存在だった。だから、いつも不安だった。",
    character: "boy4",
    bg: "BG4"
  },
   {
    name: "おれ",
    text: "おれは家に帰るけど。",
    character: "empty",
    bg: "BG4"
  },
    {
    name: "八志郎",
    text: "ああ。じゃあな。",
    character: "empty",
    bg: "BG4"
  },
    {
    name: "",
    text: "。",
    character: "empty",
    bg: "BG4"
  },
   {
    name: "八志郎",
    text: "もう今日は遅いだろ。ゲームはまた今度にしよう。",
    character: "empty",
    bg: "BG4"
  },
    {
    name: "",
    text: "。",
    character: "empty",
    bg: "BG4"
  },
  {
    name: "八志郎",
    text: "家までは送って行ってやるから。あんまわがまま言うもんじゃないぜ。",
    character: "empty",
    bg: "BG4"
  },
   {
    name: "",
    text: "。",
    character: "empty",
    bg: "BG4"
  },
  {
    name: "",
    text: "いつも『こう』なる。八志郎のことを思い出そうとするとなにか足りない。",
    character: "empty",
    bg: "BG2"
  },
  {
    name: "",
    text: "きっと、彼女の言う八志郎が悪だという根拠がここにある。",
    character: "empty",
    bg: "BG2"
  },
  {
    name: "",
    text: "きっと、それはおれのせいじゃない。",
    character: "empty",
    bg: "BG2"
  },
  {
    name: "",
    text: "きっと……。",
    character: "empty",
    bg: "BG2"
  },
];

const branchMessages = {
  hashiro: [
    {
      name: "",
      text: "すぐ遠くへ行ってしまう八志郎が悪い。",
      character: "empty",
      bg: "BG2"
    }
  ],
  woman: [
    {
      name: "",
      text: "彼女の言うことはまやかしだ。",
      character: "empty",
      bg: "BG2"
    },
     {
      name: "",
      text: "やはり八志郎が悪などというのは信じられない。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "いつだって八志郎は俺の味方だったのだから。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "どこにいてもおれを見つけてくれて、苦しい時にはそばにいてくれた。悪い時には叱ってくれた。嬉しい時には喜びあった。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "おれの部屋。公園。押し入れの中。林。土手。家の裏の丘の上。体育館倉庫。雲梯。カーテンの裏。段ボールの中。防空壕。神社。屋根裏。図書室。秘密基地。トンネル。校舎裏。机の下。階段。布団の中。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "いつだって八志郎は……。",
      character: "empty",
      bg: "BG2"
    },
     {
      name: "",
      text: "八志郎は。",
      character: "empty",
      bg: "BG2"
    },
     {
      name: "",
      text: "隣にいるのだし。",
      character: "empty",
      bg: "BG2"
    }
  ],
  me: [
    {
      name: "",
      text: "おれが悪い。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "そうだ。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "八志郎は記憶を改竄した。",
      character: "empty",
      bg: "BG2"
    },
    {
      name: "",
      text: "勝手におれの人生に入り込んできた。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "おれを救った。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "それでおれが救われたのが悪かった。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "八志郎には何か真の目的があったのだろう。誰かに頼まれたのか、自分の意思で動いているのか。語られることはない。",
      character: "boy1",
      bg: "BG2"
    },{
      name: "",
      text: "しかし、それを聞こうとも思わない。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "実のところ、八志郎が本当に存在していたかどうかなんてどうでも良かった。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "介入される前の、まっさらな記憶なんて思い出したくもなかったのだから。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "こんな依存しきったおれのほうが、八志郎よりよっぽどキモチワルイんじゃないかと思うが……彼女にはこの無意識までも見透かされていたのだろう。それでも忠告を続けてくれたのが、いつも敬語で話す少女だった。",
      character: "girl1",
      bg: "BG2"
    },{
      name: "",
      text: "彼女には悪いが、八志郎との記憶からおれは抜け出せないだろう。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "おれは満更でもないんだから。",
      character: "empty",
      bg: "BG2"
    },{
      name: "",
      text: "幸せだから。",
      character: "empty",
      bg: "BG2"
    },
  ]
};

// HTML上の要素を取得する
const speakerEl = document.getElementById("speaker");
const speakerBoxEl = document.querySelector(".speaker-area");
const messageEl = document.getElementById("message");
const nextButton = document.getElementById("nextButton");
const logButton = document.getElementById("logButton");
const choiceAreaEl = document.getElementById("choiceArea");
const choiceButtons = choiceAreaEl.querySelectorAll("button");
const gameScreen = document.querySelector(".game-screen");
const bgEl = document.querySelector(".bg");
const characterEl = document.querySelector(".character");

// 会話ログ用の配列
const log = [];
const MAX_LOG_LENGTH = 10;

// 現在の会話の番号
let currentIndex = 0;
let currentMessages = messages;
let currentRoute = null;

// 文字列キー名を画像ファイル名に変換する
function getAssetPath(assetMap, key, fallback) {
  if (!key) {
    return fallback;
  }

  // 直接ファイル名が渡された場合はそのまま使う
  if (assetMap[key]) {
    return assetMap[key];
  }

  // 画像のキー名でない場合はそのまま使う
  return key;
}

// 会話を画面に表示する関数
function showMessage() {
  const current = currentMessages[currentIndex];

  // 名前が空なら表示しない
  if (current.name && current.name.trim() !== "") {
    speakerBoxEl.style.display = "block";
    speakerEl.textContent = current.name;
  } else {
    speakerBoxEl.style.display = "none";
    speakerEl.textContent = "";
  }

  // セリフを表示する
  messageEl.textContent = current.text;

  // 立ち絵と背景を切り替える
  characterEl.src = getAssetPath(characterAssets, current.character, characterEl.src);
  bgEl.src = getAssetPath(bgAssets, current.bg, bgEl.src);

  // 最後の会話ならボタンの名前を変える
  const isChoicePoint = currentMessages === messages && current.text === "きっと……。";
  choiceAreaEl.hidden = !isChoicePoint;
  nextButton.hidden = isChoicePoint;

  if (currentMessages !== messages && currentIndex === currentMessages.length - 1) {
    nextButton.textContent = "最初から";
  } else {
    nextButton.textContent = "次へ";
  }
}

// 次の会話に進む関数
function nextMessage() {
  // 現在のセリフをログに追加
  log.push(currentMessages[currentIndex].name + ": " + currentMessages[currentIndex].text);
  if (log.length > MAX_LOG_LENGTH) {
    log.shift();
  }

  if (currentMessages !== messages && currentIndex === currentMessages.length - 1) {
    if (currentRoute === "woman" || currentRoute === "me") {
      window.close();
      return;
    }

    currentMessages = messages;
    currentIndex = 0;
  } else if (currentIndex < currentMessages.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }

  showMessage();
}

function selectBranch(route, buttonText) {
  log.push("選択: " + buttonText);
  currentRoute = route;
  currentMessages = branchMessages[route];
  currentIndex = 0;
  showMessage();
}

// 会話ログを表示する関数
function showLog() {
  alert(log.join("\n"));
}

// 次へボタンだけで進むようにする
nextButton.addEventListener("click", function () {
  nextMessage();
});

choiceButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectBranch(button.dataset.route, button.textContent);
  });
});

// 会話ログボタンを押したときに表示する
logButton.addEventListener("click", function () {
  showLog();
});

// 最初の会話を表示する
showMessage();
