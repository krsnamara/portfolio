<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/profile-pic.jpeg" alt="">
                        <div class="technology-section">
                            <h3>Technologies Studied</h3>
                            <div class="logos">
                                <img src="https://www.svgrepo.com/show/473654/html5.svg" alt="">
                                <img src="https://www.svgrepo.com/show/473577/css3.svg" alt="">
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
            <div class="container-two">
                <div class="about-me">
                    <h1>About Me</h1>
                    <p>Experienced in the JavaScript and Python based programming, with a background in construction and property maintenance in Brooklyn, NY. Possess strong skills in communication, function, and project management that help tech companies build beautiful, responsive applications. Committed empathetic sociable developer with a passion for creating positive energy towards goals and projects. Seeking challenging work that produces useful and well thought out solutions for everyday tasks. Efficient with time allocation and ability to break down larger projects into smaller goals to achieve great ends.</p>
                </div>
            </div>
        </div>
    </div>
    </template>
    
<script>
export default {

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
    padding: 10px 0px;
}
.main-container{
    display: flex;
    flex-direction: row;
    width: 60%;
}
.container-one{
    /* padding: 2.5%; */
    width: 40%;
    border-radius: 25px;
}
.profile img{
    height: 13rem;
    border-radius: 10%;
}
.container-two{
    width: 70%;
    padding: 15px;
    border-radius: 25px;
    
}
.about-me{
    text-align: left;
    border-radius: 25px;
}
.logos img{
    height: 3rem;
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
        height: 6rem;
        border-radius: 50%;
    }
    .container-two{
        margin: 0%;
        width: 100%;
        padding: 2.5%;
        border-radius: 0;
    }
    .about-me{
        text-align: left;
        border-radius: 25px;
    }
    .logos img{
        height: 2rem;
    }
}
</style>