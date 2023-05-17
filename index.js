// ==================================================================
// 関数の宣言
// =================================================================
//_________________________________________________________________

//_________________________________________________________________

// ==================================================================
// カウンセリングトレーニングに週何回行くか
// =================================================================
for (let i = 1; i <= 10; i++) {
    $("#count_week_gym").append(`<option value="${i}day"> ${i}回 </option>`);
};
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝===============
// トレーニングの記録
// ==================================================================
// ------------------------------------------------------------
// トレーニングの日付の入力＿＿＿＿○月△日×曜日
const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const days = ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'];

const dayOfWeeks = ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'];

const dayOfWeeksEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


for (let i = 0; i < months.length; i++) {
    $("#months").append(`<option value="${months[i]}">`)
};
for (let i = 0; i < days.length; i++) {
    $("#days").append(`<option value="${days[i]}">`)
};
for (let i = 0; i < dayOfWeeks.length; i++) {
    $("#day_of_weeks").append(`<option value="${dayOfWeeks[i]}">`)
};




// ------------------------------------------------------------
// トレーニングの日付の入力＿＿＿＿○月△日×曜日
$("#date_input_btn").on("click", function () {
  const monthsName  = $("#months").val();
  const dayName = $("#days").val();
  const dayOfWeekName = $("#day_of_weeks").val();

    const dateInput = {
        month: monthsName,
        day : dayName,
        day_of_week : dayOfWeekName,
    };
    console.log(dateInput);
//   localStorage.setItem("memo", text);
});





// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝===============
// トレーニングの記録の入力の設定
// ==================================================================
// -------------------------------------------------------------
// トレーニングの記録のドロップダウンリスト記録

// ドロップダウンリストの内容の編集
const trainingMenus = ['ベンチプレス', 'デットリフト', '腹筋', '肩', 'スクワット'];
function trainingLog() {
    for (let i = 0; i < trainingMenus.length; i++) {
        $(".training_menu_name").append(`<option value="${trainingMenus[i]}">${trainingMenus[i]}</option>`);
    };
    //トレーニングのメニュー、回数、セット数（何セット目か）
    for (let i = 1; i <= 10; i++) {
        $(".training_menu_set_count").append(`<option value="${i}セット">${i}セット</option>`);
    };
    for (let i = 1; i <= 100; i++) {
        $(".training_menu_kg_count").append(`<option value="${i}kg">${i}kg</option>`);
    };
    for (let i = 1; i <= 20; i++) {
        $(".training_menu_rep_count").append(`<option value="${i}rep">${i}rep</option>`);
    };
};
trainingLog();// ドロップダウンリストの内容の編集
// --------------------------------------------------------------------
$(document).ready(function() {
  $('#input_menu_name').on('input', function() {
    $('#output_menu_name').text($(this).val());
  });
});


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// トレーニングメニューの記録がされる設定
// ==================================================================
// 記録するボタンの動き

// 記録するボタンを押す、
// ドロップダウンリストのテキストが配列に入る
// 配列を一つにしてlocalstorageに記録する
// localstorageの配列を獲得して、Jsonで分解
// 獲得したテキストをそれぞれ記録する
let number = 1;
$("#log_btn").on("click", function () {

    const name = $("#input_menu_name").val();
    const set = $("#input_menu_set_count").val();
    const kg = $("#input_menu_kg_count").val();
    const rep = $("#input_menu_rep_count").val();

    const data = {
        name: name,
        set: set,
        kg : kg,
        rep : rep,
    };

 for (let i = 1; i <= number; i++) {
        $("#input_text").append(`<p id="text${i}"></p>`);
    };
    

    $("#text" + number).text((data.name)+" " + (data.set)+" " + (data.kg)+" " + (data.rep));

    const json  = JSON.stringify(data);//JSONで互換性を設定

    console.log(json);
    localStorage.setItem("log"+number, json);

    number++;

});
// -------------------------------------------------------------
// localStorageに保存されたデータをテキストエリアに表示
// リロードされても上書きで書いていても保存されたところが表示されるので注意
if (localStorage.getItem("log" + number)) {
    for (let i = 0; i < number; i++){
    const json = localStorage.getItem("log" + number);
    console.log(json);

    const data = JSON.parse(json);
    console.log(data);

    
    $("#text" + number).text((data.name) + " " + (data.set) + " " + (data.kg) + " " + (data.rep));
    }
};
// ___________________________________________________

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝==============
// トレーニングの履歴をつくる　ローカルストレージに保存したものをブラウザに表示させるのが基本の流れ
// ==================================================================
 
$("#training_diary_save_btn").on("click", function () {
    const diary = $("#training_diary").val();

    console.log(diary);

    const json1 = JSON.stringify(diary);
    console.log(json1);

    localStorage.setItem("memo1", json1);
});

if (localStorage.getItem("memo1")) {
    console.log()

    const json1 = localStorage.getItem("memo1");
    console.log(json1);

    const diary = JSON.parse(json1);
    console.log(diary);

    $("#training_diary").val(diary);
};

// -----------------------------------------------
