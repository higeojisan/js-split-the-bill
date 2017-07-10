(function() {
  var btn = document.getElementById('btn');
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

  btn.addEventListener('click', function() {
    // 金額の取得
    var bill = bill_element.value;
    var bill_error_occured = isError(bill);
    // 人数の取得
    var people = people_element.value;
    var people_error_occured = isError(people);
    // エラー表示
    if ((bill_error_occured === true) || (people_error_occured === true)) {
      error.innerText = '金額・人数は半角数字で入力してください';
      error.style.color = 'crimson';
      error.style.textAlign = 'center';
      return;
    }
    // 割り勘の計算
    // 割り切れた場合
    var surplus = bill % people;
    var bill_per_person = bill / people;
    if (surplus == 0) {
      result.innerText = 'ちょうど1人あたり' + bill_per_person + '円です';
    }
  });
})();
