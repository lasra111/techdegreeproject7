let close=document.getElementById('close');
let alerts=document.getElementsByClassName('alert');
close.addEventListener('click', ()=> {
for(let i=0; i<alerts.length; i++){
  alerts[i].style.display='none';
}
});
let generalNotiDiv=document.getElementById('generalNoti');
generalNotiDiv.style.display='none';
let generalNoti = document.querySelectorAll('li');
for(let i=0;i<generalNoti.length;i++){
  generalNoti[i].style.display='none';
};
let follower=document.getElementById('follower');
let followerClose=document.getElementById('followerClose');
followerClose.style.display='none';
let password=document.getElementById('password');
let passwordClose=document.getElementById('passwordClose');
passwordClose.style.display='none';
let messages=document.getElementById('messages');
let messageClose=document.getElementById('messageClose');
messageClose.style.display='none';
let bellIcon=document.getElementsByClassName('bell');
let bellButton=document.getElementById('gbell');
bellButton.addEventListener('click', ()=> {
  for(let i=0;i<generalNoti.length;i++){
    generalNoti[i].style.display='';

  };
  followerClose.style.display='';
  passwordClose.style.display='';
  messageClose.style.display='';
  generalNotiDiv.style.display='';

});
let listNoti=document.getElementById('listNoti');
followerClose.addEventListener('click', ()=> {
follower.style.display='none';
});
passwordClose.addEventListener('click', ()=> {
password.style.display='none';
});
messageClose.addEventListener('click', ()=> {
messages.style.display='none';
});
let closeClose= document.getElementById('closeClose');
closeClose.addEventListener('click', ()=> {
  for(let i=0;i<generalNoti.length;i++){
    generalNoti[i].style.display='none';
  }
  for(let i= 0; i<bellIcon.length; i++){
    bellIcon[i].style.stroke='white';
  }
  for(let i=0; i<alerts.length; i++){
    alerts[i].style.display='none';
  }
});
let send = document.getElementById('sendButton');
let search = document.getElementById('search');
let message=document.getElementById('message');
send.addEventListener('click', ()=> {
  if(search.value.length=== 0){
    alert('Please enter text into the search area');
  }else if(message.value.length=== 0){
    alert('Please enter text into the message area');
  } else {
    alert('Message sent!');
  }
});
