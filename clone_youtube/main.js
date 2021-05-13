const moreBtn = document.querySelector('.video_desc .video_title .moreBtn');
const title = document.querySelector('.video_desc .video_title .title');

moreBtn.addEventListener('click', ()=> {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})