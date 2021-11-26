function buttons() {
    document.querySelector('.target-system').addEventListener('click', () => {
        document.querySelector('.target-system-children').classList.toggle('hide');
    })

    for (let i = 0; i < document.getElementsByClassName('btn').length; i++) {
        document.getElementsByClassName('btn')[i].addEventListener('click', () => {

            if (event.target.parentElement.classList[0] !== undefined) {
                console.log(event.target.parentElement.classList[0]);
                if (document.getElementsByClassName('btn')[i].innerHTML === '+') {
                    document.querySelector(`.${event.target.parentElement.classList[0]}-child`).classList.remove('hide');
                    document.getElementsByClassName('btn')[i].innerHTML = '-'
                } else if (document.getElementsByClassName('btn')[i].innerHTML === '-') {
                    document.querySelector(`.${event.target.parentElement.classList[0]}-child`).classList.add('hide');
                    document.getElementsByClassName('btn')[i].innerHTML = '+'
                }
                console.log(event.target.innerHTML);
            }
        })
    }
}

buttons();