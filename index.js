const bntEL = document.querySelector('.bnt');

const toggleOption = () => {
    const wrapperEL = document.querySelector ('.wrapper');
    const iconEL = bntEL.querySelector('i');

    wrapperEL.classList.toggle('active');

    if (iconEL.classList.contains('ri-share-line')) {
        iconEL.classList.replace('ri-share-line', 'ri-close-line');
    }
    else{
        iconEL.classList
        .replace('ri-close-line', 'ri-share-line');
    }
};

bntEL.addEventListener('click', toggleOption);
