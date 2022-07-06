/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.*/


const posts = [
    {
        name: 'Phil Mangione',
        postDate: '06/25/2021',
        image: 'kristopher-roller-PC_lbSSxCZE-unsplash.jpg',
        text: ' Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint'
    },

    {
        name: 'Bruce Banner',
        postDate: '03/20/2021',
        image: 'diego-ph-fIq0tET6llw-unsplash.jpg',
        text: ' Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint'
    }
    
]

const postsList = document.querySelector('posts-list')

let cards = '';
for (let i = 0; i < posts.length; i++){
    const postsContainer = posts[i]
    cards += ` 
    <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione" />
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${posts.name}</div>
            <div class="post-meta__time">4 mesi fa</div>
          </div>
        </div>
      </div>
      <div class="post__text">
      ${posts.text}
      </div>
      <div class="post__image">
        <img src="img/${posts.image}" alt="${posts.image}" />
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button js-like-button" href="#" data-postid="1">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
          <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone</div>
        </div>
      </div>
    </div> `

}
postsList.innerHTML = cards;