document.addEventListener('DOMContentLoaded',()=>{
    const btns = document.querySelectorAll('.card__btn');
    
    const cleanColor = () => {
        if( document.querySelector('.active') ){
            const btnSelected = document.querySelector('.active');
            btnSelected.classList.remove('active');

        }
    };

    const changeColor = (evt) => {
        cleanColor();
        const btnSelected = evt.target;
        btnSelected.classList.add('active');
        

    };

    btns.forEach( btn => btn.addEventListener('click', changeColor) )
});
