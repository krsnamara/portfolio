<template>
    <footer>
        <div class="footer-wrapper">
            <div class="footer-links">
                <router-link class="router-link" to="/">home</router-link>
                <!-- <router-link class="router-link" to="/projects">projects</router-link> -->
                <!-- <router-link class="router-link" to="/resume">resume</router-link> -->
                <router-link class="router-link" to="/blog">blog</router-link>
            </div>
            <div class="social-links">
                <div class="link">
                    <a href="https://github.com/krsnamara">
                        <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                    </a>
                </div>
                <div class="link">
                    <a href="https://www.linkedin.com/in/martinj-fitzpatrick/">
                        <img src="https://www.svgrepo.com/show/390272/linkedin-linked-in.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style scoped>
    footer{
        margin-top: auto;
        border-top: solid 3px #f3f3f3;
        position:relative; 
    }
    .footer-links{
        display: flex;
        align-items:center;
        justify-content: center;
        gap: 15px;
        /* padding-right: 80px; */
    }
    .footer-wrapper{
        display: grid;
        grid-template-columns: 80% 20%;
    }
    footer a {
        font-weight: bold;
        color: #2c3e50;
    }
    footer a:hover {
        font-weight: bold;
        color: #1b1b1b;
    }
    footer a.router-link-exact-active {
         text-decoration: underline;
    }
    .social-links{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding-right: 10%;
    }
    .link a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 10px;
    }
    .link img{
        height: 3rem;
        padding: 10px;
    }
    .link img:hover{
        background-color: rgb(9, 9, 236, .5);
        border-radius: 20px;
    }
    @media only screen and (max-width: 450px){
    .social-links{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 10%;
    }
    .link img{
        height: 1.2rem;
        padding: 10px;
    }
    .footer-wrapper{
        display: grid;
        grid-template-columns: 60% 40%;
    }
    .footer-links{
        display: flex;
        align-items:center;
        justify-content: center;
        gap: 10px;
        font-size: 12px;
        /* padding-right: 80px; */
    }
  }
</style>