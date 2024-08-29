<script>
    import {Authenticator} from "./js/main";
    import Toggle from "./components/Toggle.svelte"

    let email;
    let password;
    let remember;
    
    function login()
    {
        Authenticator.login(email, password, remember);
    }
</script>




<div class="container">
    <div class="content">
        <img src="assets/login_images/01.jpg" alt="" id="login_image"/>
        <div class="overlay-title">
            <h1 id="title1">INSPIRERT AV FREMTIDENS TEKNOLOGI:</h1>
            <h1 id="title2">LOGISTAT PROSJEKTER & AI-LØSNINGER</h1>
        </div>
    </div>
    <div class="handler">
        <div class="card">
            <h1>Nice to see you!</h1>
            <p>Enter your email and password to sign in</p>
            <h3>Email</h3>
            <input type="email" placeholder="Your email address" bind:value={email} id="email"/>
            <h3>Password</h3>
            <input type="password" placeholder="Your password" bind:value={password} id="password"/>
            <Toggle bind:value={remember} label="Remember me?" fontSize={15} design="slider"/>
            <button id="signin_btn" on:click={login}>SIGN IN</button>
            <h2 id="sss">Don't have an account? <a href="/signup">Sign Up</a></h2>
            <p id="credit">© 2024, Made by Casper Nag</p>
        </div>
    </div>
</div>




<style>
    .container {
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        /* max-width: 2000px; */

        background: var(--sand-white) !important;
        display: flex;
        flex-direction: row;
    }

    .handler {
        width: 50%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card {
        margin: 0 auto;
        width: 380px;
    }

    h1 {
        margin: 0;
        font-size: 34px;
        font-weight: bold;
        color: var(--blue3);
    }

    p {
        margin-top: 5px;
        margin-bottom: 45px;
        opacity: .6;
        font-size: 13px;
        font-weight: 500;
        color: var(--blue3);
    }

    h3 {
        margin-top: 12px;
        margin-bottom: 10px;
        font-size: 15px;
        color: var(--blue3);
    }

    input {
        width: calc(100% - 30px);
        height: 30px;
        border-radius: 10px;
        padding: 2px 15px;
        border: none;
        outline: 1px solid rgba(155, 155, 155, 0.404);
        font-size: 12px;
        font-family: "Plus Jakarta Sans" !important;
    }

    a {
        color: var(--blue2);
    }

    .overlay-title {
        width: 50%;
        height: 200px;
        margin: 0 auto;
        text-align: center;
        position: fixed;
        top: 23%;
    }

    #title1 {
        margin: 0 auto;
        color: #ffffff;
        font-size: 28px;
        font-weight: 300;
    }

    #title2 {
        margin: 0 auto;
        color: #ffffff;
        font-size: 40px;
        font-weight: 600;
    }

    #signin_btn {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 13px;
        background-color: var(--blue2);
        color: white;
        font-family: "Plus Jakarta Sans";
        font-weight: 500;
        font-size: 11px;
        outline-color: var(--blue3);
    }

    #signin_btn:hover {
        cursor: pointer;
        background-color: var(--blue3);
        transition: .1s all ease-in-out;
    }


    #sss {
        margin-top: 70px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        font-weight: bold;
        color: rgb(105, 105, 105);
    }


    .content  {
        width: 50%;
        height: 100vh;
        /* overflow-y: hidden;    */
    }

    #login_image {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    #credit {
        color: black;
        font-size: 12px;
        text-align: center;
    }
</style>