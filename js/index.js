$(function () {
  const base = 'http://www.liulongbin.top:3006'
  $('#btnSend').on('click', function () {
    const val = $('#ipt').val().trim()
    $('#ipt').val('')
    if (!val) {
      return alert('请输入聊天内容')
    }
    $(`
      <li class="right_word">
        <img src="img/person02.png" /> <span>${val}</span>
      </li>
    `)
      .appendTo('#talk_list')[0]
      .scrollIntoView()
    $.ajax({
      type: 'get',
      url: base + '/api/robot',
      data: {
        spoken: val,
      },
      success(res) {
        const text = res.data.info.text
        $(`
          <li class="left_word">
              <img src="img/person01.png" /> <span>${text}</span>
          </li>
        `)
          .appendTo('#talk_list')[0]
          .scrollIntoView()
      },
    })
  })
  $('#ipt').on('keydown', function (e) {
    if (e.keyCode === 13) {
      $('#btnSend').click()
    }
  })
})
