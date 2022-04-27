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
    generalNotiDiv.style.display='none';
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
  }else if(message.textContent.length=== 0){
    alert('Please enter text into the message area');
  } else {
    alert('Message sent!');
  }
});

    let ctx = document.getElementById('lineChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10','11-17', '18-24', '25-31' ],
            datasets: [{
                label: 'Traffic',
                data: [750, 1250,1000 , 2000, 1500,1750, 1250, 1850, 2250, 1500, 2500 ],
                backgroundColor: 'rgba(112, 104, 201, .5)',

                borderWidth: 1
            }]
        },
        options: {
          backgroundColor: 'rgba(112, 104, 201, .5)',
          fill: true,
          aspectRatio: 2,
          animation: {
          duration: 0
          },
          scales: {
          y: {
          beginAtZero: true
          }
          },
          plugins: {
          legend: {
          display: false
          }
          }
          }
    });
  
    let ctxx = document.getElementById('dailyChart').getContext('2d');
    let myChart2 = new Chart(ctxx, {
        type: 'bar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                label: '# of Hits',
                data: [75, 115, 175, 125, 225, 200, 100],
                backgroundColor: '#7561ab',

                borderWidth: 1
            }]
        },
        options: {
          scales: {
          y: {
          beginAtZero: true
          }
          },
          plugins: {
          legend: {
          display: false
          }
          }
          }
    });



    let ctxxx = document.getElementById('pieChart').getContext('2d');
    let myChart3 = new Chart(ctxxx, {
        type: 'doughnut',
        data: {
            labels: ['Desktop', 'Tablet', 'Phones'],
            datasets: [{
                label: '# of Hits',
                data: [2000, 550, 500],
                borderWidth: 0,
                backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
                ]
            }]
        },
        options: {
          aspectRatio: 1.9,
          plugins: {
          legend: {
          position: 'right',
          labels: {
          boxWidth: 20,
          fontStyle: 'bold'
          }
          }
          }
          }
          });
