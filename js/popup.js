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
popupOn();