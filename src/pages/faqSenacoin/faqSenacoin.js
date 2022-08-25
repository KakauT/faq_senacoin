let btnsfaq = document.getElementsByClassName('btnfaq');
let respostaDiv = document.getElementsByClassName('respostafaq');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < btnsfaq.length; i++) {
    btnsfaq[i].addEventListener('click', () => {
        if (parseInt(respostaDiv[i].style.height) != respostaDiv[i].scrollHeight) {
            respostaDiv[i].style.height = respostaDiv[i].scrollHeight + 'px';
            btnsfaq[i].style.color = 'hsl(39, 100%, 39%)';
            icons[i].classList.remove('fa-chevron-down');
            icons[i].classList.add('fa-chevron-up');
        } else {
            respostaDiv[i].style.height = '0px';
            btnsfaq[i].style.color = 'whitesmoke';
            icons[i].classList.remove('fa-chevron-up');
            icons[i].classList.add('fa-chevron-down');
        }
        for (let j = 0; j < respostaDiv.length; j++) {
            if (j !== i) {
                respostaDiv[j].style.height = '0px';
                btnsfaq[j].style.color = 'whitesmoke';
                icons[j].classList.remove('fa-chevron-up');
                icons[j].classList.add('fa-chevron-down');
            }
        }
    });
}