(function() {
  'use strict';

  var btn = document.getElementById('btn');
  var reload_btn = document.getElementById('reload_btn');
  var bill_element = document.getElementById('bill');
  var people_element = document.getElementById('people');
  var error = document.getElementById('error');
  var result = document.getElementById('result');

  // エラー判定
  function isError(num) {
    if ((isNaN(num)) || (num == 0)) {
      // 数値でないもしくは0の場合
      return true;
    }
    return false;
  }

  // フォームクリック時に選択されているようにする
  bill_element.addEventListener('click', function() {
    this.select();
  });
  people_element.addEventListener('click', function() {
    this.select();
  });

  // やりなおすボタン
  reload_btn.addEventListener('click', function() {
    location.reload();
  });

  btn.addEventListener('click', function() {
    // 金額の取得
    var bill = bill_element.value;
    //var bill_error_occured = isError(bill);
    // 人数の取得
    var people = people_element.value;
    //var people_error_occured = isError(people);
    // エラー処理
    if (!bill.match(/^[1-9][0-9]*$/) || !people.match(/^[1-9][0-9]*/)) {
      error.innerText = '金額・人数は半角数字で入力してください';
      error.style.color = 'crimson';
      error.style.textAlign = 'center';
      return;
    }

    /*
    if ((bill_error_occured === true) || (people_error_occured === true)) {
      error.innerText = '金額・人数は半角数字で入力してください';
      error.style.color = 'crimson';
      error.style.textAlign = 'center';
      return;
    }
    */
    // 割り勘の計算
    var surplus = bill % people;
    var bill_per_person = bill / people;
    if (surplus == 0) {
      // 割り切れた場合
      result.innerText = 'ちょうど1人あたり' + bill_per_person + '円です';
    } else {
      // 割り切れない場合
      var ceil_bill_per_person = Math.ceil(bill_per_person);
      var rest = (ceil_bill_per_person * people) - bill;
      var floor_bill_per_person = Math.floor(bill_per_person);
      var lack = bill - (floor_bill_per_person * people);
      result.innerHTML = '1人あたり' + ceil_bill_per_person + '円の場合、' + rest + '円あまります</br>' + '1人あたり' + floor_bill_per_person + '円の場合、' + lack + '円たりません';
    }
  });
})();
