$(document).ready(function(){
  // 顯示 / 隱藏更多介紹
  $('#toggle-about').on('click', function(){
    $('#about-more').slideToggle();
  });

  // 加入技能
  $('#add-skill').on('click', function(){
    let newSkill = prompt('請輸入要加入的技能：');
    if(newSkill && newSkill.trim() !== ''){
      $('#skill-list').append('<li>' + $('<div>').text(newSkill).html() + '</li>');
    }
  });

  // 中文引言 API (使用 quotable.tw)
  $('#get-quote').on('click', function(){
    $('#quote-text').text('載入中...');
    $.ajax({
      url: 'https://v1.hitokoto.cn/?encode=json&c=i',
      method: 'GET',
      dataType: 'json',
      success: function(data){
        $('#quote-text').text('「' + data.hitokoto + '」— ' + (data.from || '未知'));
      },
      error: function(){
        $('#quote-text').text('無法取得引言，請稍後再試。');
      }
    });
  });
});
