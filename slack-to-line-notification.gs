function doPost(e) {

  var t = e.parameter.token;

  //トークンが一致しているか
  if( t != "***")
  {return;}

   //各種情報を取得
   var chName = e.parameter.channel_name;
   var userName = e.parameter.user_name;
   var text = e.parameter.text;
   //@lineの部分はいらないから削除しとく
   text =text.substring(5);
  var msg = "LINEにも通知したい投稿がSlackで行われました。\n各自確認してください。\n発言のあったチャンネル: "+chName+
    "\n発言者: "+userName+ "\n内容: "+text;
  //送信
  send(msg);
}

function send(message)
{
  var token = "***";
  var body = {
    "messages": [
      {
        "type": "text",
        "text": message
      }
    ],
    "to": "***"
  };
  var op = {
    "method" : "post",
    "contentType": "application/json",
    "payload" : JSON.stringify(body),
    "headers":{"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push",op);
}
