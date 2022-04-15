let close=document.getElementById('close');
let alert=document.getElementsByClassName('alert');
close.addEventListener('click', ()=> {
for(let i=0; i<alert.length; i++){
  alert[i].style.display='none';
}
});

let generalNoti = document.querySelectorAll('li');
for(let i=0;i<generalNoti.length;i++){
  generalNoti[i].style.display='none';
};

let followerClose=document.getElementById('followerClose');
followerClose.style.display='none';
let passwordClose=document.getElementById('passwordClose');
passwordClose.style.display='none';
let messageClose=document.getElementById('messageClose');
messageClose.style.display='none';

let bellButton=document.getElementById('gbell');
bellButton.addEventListener('click', ()=> {
  for(let i=0;i<generalNoti.length;i++){
    generalNoti[i].style.display='';
  };
  let generalNotiDiv=document.getElementById('generalNoti');
  generalNotiDiv.style.display='grid';
});
