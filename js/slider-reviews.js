
let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector('.sleder-reviews');
const track = document.querySelector('.slider-trek');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const itemWidth = (container.clientWidth / slidesToShow);
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});


btnPrev.addEventListener('click', () => {
    const itemLeft = Math.abs(position) / (itemWidth);
    position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
})
btnNext.addEventListener('click', () => {
    const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}
checkBtns();
