import React from 'react';
import { Input } from 'semantic-ui-react'

function Login() {
    var User = document.getElementById('Users')
    var Passwd = document.getElementById('Password')
    const LoginInfo = { "User": "DevStorm", "Password": "thdcksdn;;" }
    if (LoginInfo['User'] === User.value && LoginInfo['Password'] === Passwd.value) {
        alert(`오 님은 ${LoginInfo['User']} 님이시군요! 승인 되었습니다.`)
        window.location.replace('/society')
    }
    else {
        alert('오 님은 안됨')
    }
}

function enterkey() {
    document.addEventListener('keydown', function (e) {
        const keyCode = e.keyCode;
        if (keyCode === 13) {
            Login()
        }
    }
    )
}

function Society() {
    return (
        <div className='Society' style={{ textAlign: 'center', fontSize: "30px" }}>
            <Input type='text' id='Users' placeholder='Users' />
            <Input onKeyUp={enterkey()} type='password' id='Password' placeholder='Password' />
            <Input type='submit' onClick={Login} />
        </div>
    );
}

export default Society;