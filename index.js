document.getElementById('login-submit').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const emailValue = emailFeild.value;
    const passFeild = document.getElementById('user-password');
    const passValue = passFeild.value;

    if (emailValue == 'sontan@baap.com' && passValue == '1234') {
        window.location.href = 'banking.html';
    }
})