///// slider-promo-start ////
function onLoad() {
    window.onload = function() {
        let preloader = document.getElementById('preloader');
        preloader.classList.add('preloader-anim');
        setTimeout(function(){
            preloader.classList.add('preloader-hidden');
        }, 1100)
    }
}
    
function sliderPromoOn() { 
    const back = document.querySelector('.btn-prev'),
        next = document.querySelector('.btn-next'),
        slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot');
        let index = 0;

    const activeSlide = n => {
        for(let slide of slides) {
            slide.classList.remove('active')
        }
        slides[n].classList.add('active')
    }

    const activeDot= n => {
        console.log(n);
        for(let dot of dots) {
            dot.classList.remove('active')
        }
        dots[n].classList.add('active')
    }

    const activeSlideNow = ind => {
        activeSlide(ind)
        activeDot(ind)
    }

    const nextSlide = () => {
        if(index === slides.length - 1) {
            index = 0;
            activeSlideNow(index)
        } else {
            index++;
            activeSlideNow(index)
        }
    }

    const backSlide = () => {
        if(index === 0) {
            index = slides.length - 1;
            activeSlideNow(index)
        } else {
            index--;
            activeSlideNow(index)
        }
    }

    dots.forEach((item, indexDot) =>{
        console.log(indexDot)
        item.addEventListener('click', () => {
            index = indexDot;
            activeSlideNow(index);
        });

    });

    next.addEventListener('click', nextSlide)
    back.addEventListener('click', backSlide)

    setInterval(nextSlide, 15000);
}
// slider-promo-end //
///Замена текста в кнопке слайдера ////
    /*let btnPromo = document.querySelector('.btn-promo');
    console.log(btnPromo);
    const mq = window.matchMedia('(max-width: 475px)');

    if (mq.matches) {
        btnPromo.innerHTML="Тест-драйв";
    } else {
        btnPromo.innerHTML="Запись на тест-драйв";
    }*/
let btnsPromo = document.querySelectorAll('.btn-promo');
function textReplace() {
    const mq = window.matchMedia("(min-width: 800px)")
    console.log(btnsPromo);
    mq.addEventListener('resize', WidthChange)
    WidthChange(mq)
    // изменение медиа-запроса
    function WidthChange(mq) {
        if (mq.matches) {
        // ширина окна не менее 75px
            for (let i = 0; i < btnsPromo.length; i++) {
            btnsPromo[i].innerHTML="Запись на тест-драйв";
            }
        }
        else {
            for (let i = 0; i < btnsPromo.length; i++) {
                btnsPromo[i].innerHTML="Тест-драйв";
            }
        }
    }
}
///Замена текста в кнопке слайдера ////
// slider-rew-start//
function sliderRewiewsOn() { 
    let position = 0;
    let slidesToShow = 2;
    const mq = window.matchMedia("(min-width: 768px)")

    mq.addEventListener('resize', WidthChange)
    WidthChange(mq)
    
    // изменение медиа-запроса
    function WidthChange(mq) {
      if (mq.matches) {
        // ширина окна не менее 768px
        slidesToShow = 2;
      } else {
        // ширина окна меньше 768px
        slidesToShow = 1;
      }
    }
    const slidesToScroll = 1;
    const container = document.querySelector('.sleder-reviews');
    const track = document.querySelector('.slider-trek');
    const items = document.querySelectorAll('.slider-item');
    const itemsCount = items.length;
    const btnPrev = document.querySelector('.btn-prev-rew');
    const btnNext = document.querySelector('.btn-next-rew');

    const itemWidth = (container.clientWidth / slidesToShow);
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });


    btnPrev.addEventListener('click', () => {
        prevSlide();
    });
    btnNext.addEventListener('click', () => {
        nextSlide();
    });
    const prevSlide = function() {
        const itemLeft = Math.abs(position) / (itemWidth);
        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        setPosition();
        checkBtns();
    }
    const nextSlide = function() {
        const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
        setPosition();
        checkBtns();
    }

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }
    checkBtns();
}
// slider-rew-end //
function circleBlockActive() {
    let listElemDetails= document.querySelectorAll('.item');
    listElemDetails.forEach(elem=> {
        elem.addEventListener('mouseover', ()=> {
        elem.classList.add('active')
        let currentItem = elem.getAttribute('data-attr');
        document.querySelector(`.circle[data-attr='${currentItem}']`).classList.add('active')
        });
    });

    listElemDetails.forEach(elem=> {
        elem.addEventListener('mouseout', ()=> {
        elem.classList.remove('active')
        let currentItem = elem.getAttribute('data-attr');
        document.querySelector(`.circle[data-attr='${currentItem}']`).classList.remove('active')
        });
    });
}
/////////////// START POPUP //////////////
function popupOn() {
    const popupLinks = document.querySelectorAll('.popup-link'),
        body = document.querySelector('body'),
        lockPadding = document.querySelectorAll('.lock-padding'),
        timeout = 600;
    let unlock = true;
    if(popupLinks.length > 0) {
        for(let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click', function(e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            });       
        }
    }
    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if(popupCloseIcon.length > 0) {
        for(let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function(e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(curentPopup) {
        if(curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if(popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            curentPopup.classList.add('open');
            curentPopup.addEventListener('click', function(e) {
                if(!e.target.closest('.popup-content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnLock = true) {
        if(unlock) {
            popupActive.classList.remove('open');
            if (doUnLock) {
                bodyUnLock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.popup').offsetWidth + 'px';

        if(lockPadding.length > 0) {
            for(let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }

        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout);
    }

    function bodyUnLock() {
        setTimeout(function() {
            for(let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px'
            body.classList.remove('lock');
        }, timeout);
        
        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout);
    }
}

function onCollapsible() {
    let coll = document.getElementsByClassName('collapsible');
    for(let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
            let content = this.previousElementSibling;
            content.classList.toggle('active');
            this.classList.toggle('active');
            this.innerHTML = (this.innerHTML === 'Показать всё') ? this.innerHTML = 'Свернуть всё' : this.innerHTML = 'Показать всё';
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        })
    }
}
window.addEventListener(`resize`, event => {
    sliderRewiewsOn();
  }, false);

onLoad()
sliderPromoOn();
circleBlockActive();
sliderRewiewsOn();
popupOn();
onCollapsible();
textReplace();