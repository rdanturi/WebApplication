// form validation function //
function validate(form) {
  var name = form.name.value;
  var last = form.namek.value;
  var email = form.email.value;
  var card = form.card.value;
  var code = form.code.value;
  var accc = form.accc.value;
  var num = form.num.value;
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  var nameRegex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
  var lastRegex = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
  var cardRegex = /^4[0-9]{15}/;
  var codeRegex = /^[1-9]{3}/;
  var acccRegex = /^4[0-9]{15}/;
  var numRegex = /^4[0-9]{15}/;
 
  if(name == "") //first name not entered
  {
    inlineMsg('name','You must enter your  first-name.',2);
    return false;
  }
  if(!name.match(nameRegex)) //invalid name 
  {
    inlineMsg('name','You have entered an invalid first-name.',2);
    return false;
  }
    if(last == "") //last name not entered
  {
    inlineMsg('last','You must enter your last-name.',2);
    return false;
  }
  if(!last.match(lastRegex)) //invalid last name
  {
    inlineMsg('last','You have entered an invalid last-name.',2);
    return false;
  }
 if(email == "") //no email
 {
    inlineMsg('email','<strong>Error</strong><br />You must enter your email.',2);
    return false;
  }
  if(!email.match(emailRegex)) //invalid email
  {
    inlineMsg('email','<strong>Error</strong><br />You have entered an invalid email.',2);
    return false;
  }
    if(card == "") //no card number
	{
    inlineMsg('card','You must enter the number to proceed further.');
    return false;
  }
   if(!card.match(cardRegex)) //invalid card number
   {
    inlineMsg('card','<strong>Error</strong><br />You have entered an invalid card number.',2);
    return false;
  }
   if(code == "") //no security code
   {
    inlineMsg('code','You must enter the number to proceed further.');
    return false;
  }
  if(!code.match(codeRegex) ) //invalid security code
  {
    inlineMsg('code','<strong>Error</strong><br />You have entered an invalid Security code number.',2);
    return false;
  }
  
  if(accc == "" || num == "" ) //no routing number 
  {
    inlineMsg('accc','You must enter Account Number & Routing number to proceed.');
    return false;
  }
    if(!accc.match(acccRegex)) //invalid routing number
	{
    inlineMsg('accc','<strong>Error</strong><br />You have entered an invalid Routing number.',2);
    return false;
  }
  /*if(num == "") //no account number
  {
    inlineMsg('num','You must enter the number to proceed further.');
    return false;
  }*/
  if(!num.match(numRegex)) //invalid account number
  {
    inlineMsg('num','<strong>Error</strong><br />You have entered an invalid Account number.',2);
    return false;
  }
   return true;
}

var MSGTIMER = 20;
var MSGSPEED = 5;
var MSGOFFSET = 3;
var MSGHIDE = 3;

function inlineMsg(target,string,autohide) {
  var msg;
  var msgcontent;
  if(!document.getElementById('msg')) {
    msg = document.createElement('div');
    msg.id = 'msg';
    msgcontent = document.createElement('div');
    msgcontent.id = 'msgcontent';
    document.body.appendChild(msg);
    msg.appendChild(msgcontent);
    msg.style.filter = 'alpha(opacity=0)';
    msg.style.opacity = 0;
    msg.alpha = 0;
  } else {
    msg = document.getElementById('msg');
    msgcontent = document.getElementById('msgcontent');
  }
  msgcontent.innerHTML = string;
  msg.style.display = 'block';
  var msgheight = msg.offsetHeight;
  var targetdiv = document.getElementById(target);
  targetdiv.focus();
  var targetheight = targetdiv.offsetHeight;
  var targetwidth = targetdiv.offsetWidth;
  var topposition = topPosition(targetdiv) - ((msgheight - targetheight) / 2);
  var leftposition = leftPosition(targetdiv) + targetwidth + MSGOFFSET;
  msg.style.top = topposition + 'px';
  msg.style.left = leftposition + 'px';
  clearInterval(msg.timer);
  msg.timer = setInterval("fadeMsg(1)", MSGTIMER);
  if(!autohide) {
    autohide = MSGHIDE;  
  }
  window.setTimeout("hideMsg()", (autohide * 1000));
}

function hideMsg(msg) {
  var msg = document.getElementById('msg');
  if(!msg.timer) {
    msg.timer = setInterval("fadeMsg(0)", MSGTIMER);
  }
}

function fadeMsg(flag) {
  if(flag == null) {
    flag = 1;
  }
  var msg = document.getElementById('msg');
  var value;
  if(flag == 1) {
    value = msg.alpha + MSGSPEED;
  } else {
    value = msg.alpha - MSGSPEED;
  }
  msg.alpha = value;
  msg.style.opacity = (value / 100);
  msg.style.filter = 'alpha(opacity=' + value + ')';
  if(value >= 99) {
    clearInterval(msg.timer);
    msg.timer = null;
  } else if(value <= 1) {
    msg.style.display = "none";
    clearInterval(msg.timer);
  }
}

function leftPosition(target) {
  var left = 0;
  if(target.offsetParent) {
    while(1) {
      left += target.offsetLeft;
      if(!target.offsetParent) {
        break;
      }
      target = target.offsetParent;
    }
  } else if(target.x) {
    left += target.x;
  }
  return left;
}

function topPosition(target) {
  var top = 0;
  if(target.offsetParent) {
    while(1) {
      top += target.offsetTop;
      if(!target.offsetParent) {
        break;
      }
      target = target.offsetParent;
    }
  } else if(target.y) {
    top += target.y;
  }
  return top;
}

if(document.images) {
  arrow = new Image(7,80); 
  arrow.src = "images/msg_arrow.gif"; 
}