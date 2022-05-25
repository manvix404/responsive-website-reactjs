import React from 'react'
import './login.css'
function Login() {
  return (
    <div class="bg-img">
        <div class="content">
            <header>Login Form</header>
            <form action="login" method="post">
                {/* {% csrf_token %} */}
                <div class="field">
                    <span class="fa fa-user"></span>
                    <input type="text" name="username" required placeholder="Patient ID"/>
                </div>
                <div class="field space">
                    <span class="fa fa-lock"></span>
                    <input type="password" name="password" required class="password" placeholder="Password"/>
                    <span class="show">SHOW</span>
                </div>
                {/* <div>{% for message in messages %}
                    <h3 style="color:red">{{message}}</h3>
                    {% endfor %}
                </div> */}
                 
                {/* <div class="pass">
                    <a href="#">Forgot Password ?</a>
                </div> */}
                <div class="field ">
                    <input type="submit" value="LOGIN"/>
                </div>
                {/* <<div class="login">
                    or login with
                </div>
                <div class="link">
                    <div class="facebook">
                        <i class="fa fa-facebook"><span>Facebook</span></i>
                    </div>
                    <div class="google">
                        <i class="fa fa-google"><span>Google</span></i>
                    </div>
                </div>
                <div class="signup">Don't have account?
                    <a href="register">Signup Now</a>
                </div> */}
            </form>
        </div>
    </div>
  )
}

export default Login