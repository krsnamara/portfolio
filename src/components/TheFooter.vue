<template>
    <footer>
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
    </footer>
</template>

<script>

</script>

<style scoped>
    footer{
        display: flex;
        align-items: center;
        justify-content:end;
        gap: 25px;
        background-color: #f3f3f3; 
        height: 100px;
        width: 100%;
        /* position: fixed; */
        text-align: center;
    }
    .social-links{
        display: flex;
        justify-content: end;
        align-items: end;
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
        height: 3rem;
        filter: invert(100%);
    }
</style>