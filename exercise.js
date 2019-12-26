// 課題1: 「コメント」を使って変数のブロックスコープの説明をしてください。
//   - コメントとは: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar#%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88

// ここに「ブロックスコープ」の説明を記述する

// ・ブロックスコープを使う場合はconst、letを使って変数宣言をする
// ・ifやforで使われている「｛｝」で囲まれている部分をブロックと呼ぶ
// ・ブロックの中に書かれている変数はブロックの外からアクセスすることはできない
// ・ブロックの中からはブロックの外の変数にアクセスできる





// 課題2: 「コメント」を使って変数の関数スコープの説明をしてください
//   - コメントとは: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Lexical_grammar#%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88

// ここに「関数スコープ」の説明を記述する

// ・varを使って変数宣言した場合は関数スコープとなる
// ・ifやforのブロック内に定義されている変数にもブロック外からアクセスできる
// ・関数の引数や関数内で定義されている変数には関数外からアクセスできない
// ・関数内からは、関数の外で定義されている変数にアクセスできる

// 課題3: 以下の条件を満たす高階関数を実装してください
//   - 関数名: kadai_3
//   - 引数:
//     - 第1引数: age => 数値を受け取る
//     - 第2引数: callback => コールバック関数
//       - callbackは以下の条件を満たす関数とする
//         - 引数:
//           - 第1引数: message => 「kadai_3関数」の第1引数である `age` の数値に応じて次のメッセージを受け取る
//             1. 「typeof 値」の結果が 'number' でない場合は 数値以外が入力されたことになる: 「'数値が入力されていません'」
//             2. 数値が20以上: 「'値は20以上です'」
//             3. 数値が10以上20未満: 「'値は10以上20未満です'」
//             4. 数値が10未満: 「'値は10未満です'」
//         - 処理内容:
//           - 第1引数で受けとった `message` の内容を `alert` を使ってアラートダイアログに表示する
//   - kadai_3関数を実装した直後に「kadai_3(数値, コールバック関数)」を呼び出して、アラートダイアログのメッセージ内容が意図通りであることを確認する

function kadai_3(age, callback){
  let message;
  if (typeof age !== 'number') {
    message = '数値が入力されていません';    
  } else if(age >= 20) {
    message = '値は20以上です';
  } else if(age >= 10) {
    message = '値は10以上20未満です';
  } else {
    message = '値は10未満です';
  }

  callback(message);
}

// kadai_3(22, function(message) {
//   console.log('入力:22');
//   alert(message);
// });
// kadai_3(13, function(message) {
//   console.log('入力:13');
//   alert(message);
// });
// kadai_3(3, function(message) {
//   console.log('入力:3');
//   alert(message);
// })
kadai_3('文字列', function(message) {
  console.log('入力:文字列');
  alert(message);
});

// 課題4: 以下の条件を満たす即時関数を作る
//   - 2つの引数を受け取る
//     - 第1引数: x => 数値
//     - 第2引数: y => 数値
//   - 処理内容:
//     - 第1引数のx, 第2引数のyを使って足し算した結果(「x + y」の結果)をconsole.logで出力する。

(function(x, y) {
  console.log('x + y = ', x + y);
})(1, 2);