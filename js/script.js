// 特定の属性をもつ要素のみ取得したい場合
// $('要素[属性]')

// 属性値が特定の値に等しい要素のみ取得したい場合
// $('要素[属性 = "値"]')

// 初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にしたい
// $('要素'[属性 != "値"])
// .hide();は、特定のHTML要素を非表示にするメソッド
// id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示
$('#tab-contents .tab[id != "tab1"]').hide();

// id="tab-menu"のaタグがクリックされたときに、処理を実行
$('#tab-menu a').on('click', function(event) {
  // イベント発生時に行われる処理
  $("#tab-contents .tab").hide();
  // クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $("#tab-menu .active").removeClass("active");
  // .addClass()は任意のHTML要素にクラス属性を追加できるメソッド
  $(this).addClass("active");
  // .show()は要素を表示するメソッド、$(this)のとき＝タブがクリックされたときに表示
  $($(this).attr("href")).show();
  event.preventDefault();
});