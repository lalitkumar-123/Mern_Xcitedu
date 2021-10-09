import React from 'react'
import Signincard from './Signincard'
import Logincard from './Logincard'
import Signin from './Signin'

let width = window.innerWidth;

export default function Login() {
    return (
        <div>
            {width > 600 ? <Signin/> : <Signincard/>}
        </div>
    )
}
