import changeHtml from "./changeHtml.js";

const submitButton = ( evt) => {
    const btnSubmit = document.querySelector('.active'); 
    if( !btnSubmit ) return;
    const valueBtn = Number(btnSubmit.textContent);
    changeHtml(valueBtn);
};


export default submitButton;