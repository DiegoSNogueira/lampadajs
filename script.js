let imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
    item.addEventListener('click', (event) => {

        if (item.getAttribute('src') == 'img/off.png') {
            item.setAttribute('src', 'img/on.png');
        } else {
            item.setAttribute('src', 'img/off.png');
        }

        alerta();

    });
});


function alerta(){
    let lampOn = document.querySelectorAll('img[src="img/on.png"]');

    if (lampOn.length === 4) {
        setTimeout(() => {
            Swal.fire(
                'Uma pergunta...',
                'Teu pai é dono da energisa?',
                'question'
              );
        }, "500");
    }

}

