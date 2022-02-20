const password_1 = document.querySelector('#password_1');
const password_2 = document.querySelector('#password_2');
const error_text = document.querySelector('.error-text');
const showBtn = document.querySelector('.show');
const button = document.querySelector('button');
function active(){
    if (password_1.value.length >= 6) {
        button.removeAttribute('disabled', '');
        button.classList.add('active');
        password_2.removeAttribute('disabled', '');

    } else {
        button.setAttribute('disabled', '');
        button.classList.remove('active');
        password_2.setAttribute('disabled', '');
    }
   
}   
button.onclick = function () {
    if (password_1.value != password_2.value) {
        error_text.style.display = 'block';
        error_text.textContent = 'Error! Password Mis-match';
        error_text.classList.remove('matched');
        return false;
    } else {
        error_text.style.display = 'block';
        error_text.textContent = 'Nice! Password Matched';
        error_text.classList.add('matched');
        return false;
    }
}
function active_2() {
    if (password_2.value != '') {
        showBtn.style.display = 'block';
        showBtn.onclick = function () {
            if ((password_1.type == 'password') && (password_2.type == 'password')) {
                password_1.type = 'text';
                password_2.type = 'text';
                showBtn.textContent = 'HIDE';
                showBtn.classList.add('active');
            } else {
                password_1.type = 'password';
                password_2.type = 'password';
                showBtn.textContent = 'SHOW';
                showBtn.classList.remove('active');
            }
        }
    }else{
        showBtn.style.display = 'none';
    }
}