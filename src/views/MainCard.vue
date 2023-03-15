<template>
    <div class="outer-wrapper">
        <div class="wrapper page">
            <div class="main-container">
                <div class="container-one">
                    <div class="profile">
                        <img src="../assets/profile-pic.jpeg" alt="">
                        <div class="technology-section">
                            <h3>Technologies</h3>
                        </div>
                    </div>
                </div>
                <div class="container-two">
                    <div class="about-me">
                        <h1>About Me</h1>
                        <p>JavaScript and Python developer based in Brooklyn, NY. Possess strong skills in communication, function, and project management that help tech companies build beautiful, responsive applications. A life spent learning has led me to many interesting places, including a superintendent role in a Brooklyn apartment building and constructing solutions in the trades for many years.</p>
                        <h3>Technologies</h3>
                    </div>
                </div>
                <div class="logos">
                    <img src="https://www.svgrepo.com/show/310932/javascript.svg" alt="">
                    <img src="https://www.svgrepo.com/show/369644/vue.svg" alt="">
                    <img src="https://www.svgrepo.com/show/439173/git.svg" alt="">
                    <img src="https://www.svgrepo.com/show/426053/git.svg" alt="">
                    <img src="https://www.svgrepo.com/show/473729/mongodb.svg" alt="">
                    <img src="https://www.svgrepo.com/show/330398/express.svg" alt="">
                    <img src="https://www.svgrepo.com/show/424896/react-logo-programming-2.svg" alt="">
                    <img src="https://www.svgrepo.com/show/353657/django-icon.svg" alt="">
                    <img src="https://www.svgrepo.com/show/377688/text-x-python.svg" alt="">
                    <img src="https://www.svgrepo.com/show/331300/aws.svg" alt="">
                    <img src="https://www.svgrepo.com/show/306463/netlify.svg" alt="">
                    <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="">
                </div>
            </div>
        </div>
    </div>
    <ProjectsDisplay />
    </template>
    
<script>
import ProjectsDisplay from '../components/ProjectsDisplay.vue'
export default {
    components: {
        ProjectsDisplay
    },
}
</script>

<style scoped>
.nav{
display: flex;
align-items: flex-end;
justify-content: flex-end; 
}
.router-link{
text-decoration: none;
}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 80%; */
}
.main-container{
    display: grid;
    grid-template-areas: 
    "one two"
    "tech tech";
    grid-template-columns: 40% 60%;
    width: 80%;
}
.container-one{
    border-radius: 25px;
    grid-area: one;
}
.profile img{
    height: 13rem;
    border-radius: 10%;
}
.container-two{
    /* width: 70%; */
    padding: 15px;
    border-radius: 25px;
    grid-area: two;
}
.about-me{
    text-align: left;
    border-radius: 25px;
}
.about-me h3{
    display: none;
}
.about-me p{
    max-width: 680px;
}
.logos img{
    height: 3rem;
}
.logos{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* width: 200px; */
    grid-area: tech;
    padding-left: 50px;
}
.technology-section{
    min-width: 100px;
    object-fit: contain;
}
.profile{
        padding-left: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
@media only screen and (max-width: 950px){
    .main-container{
        width: 95%;
    }
}
@media only screen and (max-width: 450px){
    *{
        box-sizing: border-box;
    }
    .technology-section h3 {
        display: none;
    }
    .about-me h3{
    display: block;
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 0px;
    }
    .main-container{
        display: flex;
        flex-direction: column;
        border-radius: 0px;
        width: 100%;
    }
    .container-one{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: rgba(231, 231, 231, 0.5) solid 2px;
        padding: 2.5%;
        width: 100%;
        border-radius: 0;
        margin: 0;
    }
    .profile{
        padding-left: 0%;
        display: flex;
        align-items: center;
    }
    .profile img{
        height: 10rem;
        border-radius: 50%;
    }
    .container-two{
        margin: 0%;
        width: 90%;
        padding: 0 0 0 5%;
        border-radius: 0;
    }
    .about-me{
        text-align: left;
        border-radius: 25px;
    }
    .logos{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* width: 200px; */
        grid-area: tech;
        padding: 20px;
    }
    .logos img{
        height: 2rem;
    }
}
/* Styles for Projects Components */

</style>