const opening=document.getElementById('opening');
const site=document.getElementById('site');
const openBtn=document.getElementById('open');
const music=document.getElementById('music');
const musicBtn=document.getElementById('musicBtn');
const typed=document.getElementById('typed');

const letter=[
"Fatou,",
"Il y a des rencontres que l'on oublie presque aussitôt, et puis il y a celles qui changent doucement la couleur de nos souvenirs. Notre histoire a commencé par une simple réponse dans un groupe WhatsApp en 2023. Je ne savais pas alors que quelques mots allaient me conduire vers une personne aussi importante.",
"Depuis, nous avons vécu des moments magnifiques, des rires, des discussions, des souvenirs inexplicables, mais aussi des doutes et des petites disputes. Et peut-être que c'est justement cela qui rend notre histoire si particulière : elle ne rentre pas facilement dans une case.",
"Trop d'amour pour être simplement des amis. Trop compliqué pour être simplement un couple. Et beaucoup trop de souvenirs pour devenir des inconnus.",
"Si un jour tu penses que tu es juste mon amie, souviens-toi que dans mon cœur tu représentes bien plus. Je ne sais pas ce que la vie décidera pour nous, mais je sais que lorsque je pense à mon avenir, je ne peux pas faire comme si tu n'y avais jamais eu une place.",
"Je veux surtout que tu sois heureuse. Peu importe la forme que prendra notre histoire, je garderai toujours une attention particulière pour toi et je veillerai, même de loin, à ce que tu ailles bien.",
"Alors aujourd'hui, je te souhaite une vie pleine de paix, de réussite, de bonheur et de sourires sincères. Joyeux anniversaire ma princesse, mon cadeau d'Allah, ma beauté. ❤️"
];

function renderLetter(){
  typed.innerHTML=letter.map((p,i)=>`<p style="animation-delay:${i*.15}s">${p}</p>`).join('');
}

openBtn.addEventListener('click',()=>{
  opening.classList.add('hidden');
  site.classList.remove('hidden');
  music.play().then(()=>{musicBtn.textContent='❚❚ Musique'}).catch(()=>{});
  renderLetter();
  window.scrollTo(0,0);
  hearts(14);
});

musicBtn.addEventListener('click',()=>{
  if(music.paused){music.play();musicBtn.textContent='❚❚ Musique'}
  else{music.pause();musicBtn.textContent='▶ Musique'}
});

document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>{
    document.getElementById('lightboxImg').src=img.src;
    document.getElementById('lightbox').classList.remove('hidden');
  });
});
document.getElementById('close').addEventListener('click',()=>document.getElementById('lightbox').classList.add('hidden'));
document.getElementById('lightbox').addEventListener('click',e=>{if(e.target.id==='lightbox')document.getElementById('lightbox').classList.add('hidden')});

document.getElementById('celebrate').addEventListener('click',()=>hearts(55));
function hearts(n){
  for(let i=0;i<n;i++){
    const h=document.createElement('div');h.className='heart';h.textContent=['❤️','💗','💕','💖','🌹'][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+'vw';h.style.top='-30px';h.style.animationDuration=(3+Math.random()*4)+'s';h.style.fontSize=(14+Math.random()*24)+'px';
    document.body.appendChild(h);setTimeout(()=>h.remove(),7500);
  }
}

window.addEventListener('visibilitychange',()=>{if(document.hidden && !music.paused)music.pause()});
