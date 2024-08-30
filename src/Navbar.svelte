<script>


</script>


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />



<div class="container">
    <div class="mid">
        <h1 id="title">Logistat</h1>
        <div class="jazz"><p>Products</p><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
        <div class="jazz"><p>Resources</p><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
        <div class="jazz"><p>Solutions</p><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
        <div class="jazz"><p>Company</p><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
        <div class="jazz"><p>Pricing</p><span class="material-symbols-outlined">keyboard_arrow_down</span></div>
    </div>
    <div class="right">
        <span class="material-symbols-outlined">search</span>
        <p>Support</p>
        <p>Sign In</p>
        <button id="tryBtn">Try Free</button>
    </div>
</div>





<style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100px;
        border-bottom: .3px solid var(--blue1);
        margin: 0 auto;
        gap: 5%;
    }

    .mid {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        max-width: 900px;
        height: 100px;
    }

    .right {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 30%;
        max-width: 400px;
        height: 100px;
    }

    .material-symbols-outlined {
        margin-top: 3px;
    }

    .jazz {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .jazz:hover {
        color: var(--blue3);
        transition: .1s color ease-in-out;
    }

    #tryBtn {
        width: 100px;
        height: 45px;
        font-family: "Plus Jakarta Sans";
        font-weight: 600;
        border-radius: 10px;
        background-color: var(--blue3);
        color: white;
        letter-spacing: .9px;
        border: 1px solid var(--blue3);
    }

    #tryBtn:hover {
        cursor: pointer;
        background-color: var(--blue2);
        transition: .1s all ease-in-out;
    }

    p {
        font-size: 15px;
    }

</style>