function onClick() {
    let cardBtns = document.getElementsByClassName('btn_card'),
        arrBtns = Array.from(cardBtns);
        let arrTextbtn = [];
        if(!localStorage.getItem('statusBtn')) {
            for(let i = 0; i < arrBtns.length; i++) {
                arrTextbtn.push(arrBtns[i].innerHTML);
                localStorage.setItem('statusBtn', JSON.stringify(arrTextbtn));
            }
        } else {
            arrTextbtn = Array.from(JSON.parse(localStorage.getItem('statusBtn')));
            for (let i=0; i < arrBtns.length; i++) {
                arrBtns[i].innerHTML = arrTextbtn[i];
            }
        }
        for(let i=0; i < arrBtns.length; i++) {
            let cardBtn = arrBtns[i];

            if(cardBtn.innerHTML == 'Добавить в корзину') {
                cardBtn.style.backgroundColor="#0074D4";
            } else cardBtn.style.backgroundColor="#ff0c00a3";

            cardBtn.addEventListener('click', ()=> {
                if(cardBtn.innerHTML =='Добавить в корзину') {
                    cardBtn.innerHTML = 'В корзине'
                    cardBtn.style.backgroundColor="#ff0c00a3";
                } else {
                    cardBtn.innerHTML = 'Добавить в корзину';
                    cardBtn.style.backgroundColor="#0074D4";
                }

                arrTextbtn = Array.from(JSON.parse(localStorage.getItem('statusBtn')));
                arrTextbtn[i] = cardBtn.innerHTML;
                localStorage.setItem('statusBtn', JSON.stringify(arrTextbtn));
            })
        }
}
onClick()