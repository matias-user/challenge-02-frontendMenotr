const changeHtml = ( numberSelected ) => {
    const article = document.createElement('article');
    const figure =  document.createElement('figure');
    const p1 =      document.createElement('p');
    const p2 =      document.createElement('p');
    const h3 =      document.createElement('h3');
    

    article.classList.add('card','py-4');
    figure.classList.add('card__img');
    p1.classList.add('card__rating');
    h3.classList.add('card__title','text-center');
    p2.classList.add('card__paragraph','card__paragraph--rating');

    p1.textContent = `You selected ${numberSelected} out of 5`;
    p2.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    h3.textContent = 'Thank you!';
    
    

    article.appendChild(figure);
    article.appendChild(p1);
    article.appendChild(h3);
    article.appendChild(p2);
    const card = document.getElementById('card');
    
    document.querySelector('body').replaceChild(article, card);
};

export default changeHtml;