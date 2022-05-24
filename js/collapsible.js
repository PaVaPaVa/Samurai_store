function onCollapsible() {
    let coll = document.getElementsByClassName('collapsible');
    for(let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', function() {
            let content = this.previousElementSibling;
            content.classList.toggle('active');
            this.classList.toggle('active');
            this.innerHTML = (this.innerHTML === 'Показать всё') ? this.innerHTML = 'Свернуть' : this.innerHTML = 'Показать всё';
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        })
    }
}
onCollapsible();