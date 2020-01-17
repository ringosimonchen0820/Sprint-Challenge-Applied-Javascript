

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Article(data) {
    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    // setup layouts
    card.append(headline);
    card.append(author);
    
    author.append(imgContainer);
    author.append(authorsName);
    
    imgContainer.append(img);

    // assign class to elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // add element content
    headline.textContent = data.headline;
    authorsName.textContent = data.authorName;
    img.src = data.authorPhoto;

    // return result (parent div)
    return card;
}   

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        const articlesObj = response.data.articles;
        for(var prop in articlesObj) {
            if(articlesObj.hasOwnProperty(prop)) {
                articlesObj[prop].forEach(articleBlock => {
                    cardsContainer.append(Article(articleBlock));
                })
            }
        }

    })
    .catch(error => {
        console.log("no seas mamon!! hechale mas ganas!!", error)
    })