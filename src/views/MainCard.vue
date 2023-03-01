<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-one">
                <div class="profile">
                    <img src="../assets/profile-pic.jpeg" alt="">
                    <h3>Martin Fitzpatrick</h3>
                    <p>Software Developer</p>
                </div>
                <div class="social-links">
                    <div class="link">
                        <a href="https://github.com/krsnamara">
                            <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                            <h2>Github</h2>
                        </a>
                        </div>
                    <div class="link">
                        <a href="https://www.linkedin.com/in/martinj-fitzpatrick/">
                            <img src="https://www.svgrepo.com/show/390272/linkedin-linked-in.svg" alt="">
                            <h2>LinkedIn</h2>
                        </a>
                        </div>
                </div>
            </div>
            <div class="container-two">
                <div class="about-me">
                    <h1>About Me</h1>
                    <p>Experienced in the JavaScript and Python based programming, with a background in construction and property maintenance in Brooklyn, NY. Possess strong skills in communication, function, and project management that help tech companies build beautiful, responsive applications. Committed empathetic sociable developer with a passion for creating positive energy towards goals and projects. Seeking a challenging work ethic that produces useful and well thought out solutions for everyday tasks. Efficient with time allocation and ability to break down larger projects into smaller goals to achieve great ends.</p>
                </div>
                <div class="technology-section">
                    <h1>Technologies Studied</h1>
                    <div class="logos">
                        <img src="https://www.svgrepo.com/show/473654/html5.svg" alt="">
                        <img src="https://www.svgrepo.com/show/473577/css3.svg" alt="">
                        <img src="https://www.svgrepo.com/show/310932/javascript.svg" alt="">
                        <img src="https://www.svgrepo.com/show/439173/git.svg" alt="">
                        <img src="https://www.svgrepo.com/show/426053/git.svg" alt="">
                        <img src="https://e7.pngegg.com/pngimages/735/462/png-clipart-heroku-computer-icons-computer-servers-catalog-server-cloud-storage-24-computer-network-text.png" alt="">
                        <img src="https://www.svgrepo.com/show/306463/netlify.svg" alt="">
                        <img src="https://www.svgrepo.com/show/330398/express.svg" alt="">
                        <img src="https://www.svgrepo.com/show/473729/mongodb.svg" alt="">
                        <img src="https://www.svgrepo.com/show/424896/react-logo-programming-2.svg" alt="">
                        <img src="https://www.svgrepo.com/show/377688/text-x-python.svg" alt="">
                        <img src="https://www.svgrepo.com/show/353657/django-icon.svg" alt="">
                        <img src="https://www.svgrepo.com/show/331300/aws.svg" alt="">
                        <img src="https://www.svgrepo.com/show/369644/vue.svg" alt="">
                    </div>
                    <div class="button-container">
                        <div class="projects-button">
                            <a href="/projects">My Projects</a>
                        </div>
                    </div> 
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
align-items: end;
justify-content: end; 
}
.router-link{
text-decoration: none;
}
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 20px 0px;
    /* width: 60%; */
}
img{
    height:20px;
}
.main-container{
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
}
.container-one{
    padding: 2.5%;
    width: 30%;
    border-radius: 25px;
}
.profile img{
    height: 10rem;
    border-radius: 50%;
}
.link a{
    text-decoration: none;
    color: #2c3e50;
    font-size: 10px;
}
.link img{
    height: 3rem;
}
.link img:hover{
    height: 3rem;
    /* // filter:grayscale(100%); */
    filter: invert(100%);
}
.container-two{
    margin: 2.5%;
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
.button-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.projects-button{
    background-color: #005ca4;
    border-radius: 15px;
    padding: 5px;
    margin: 5px;
}
.projects-button a{
    text-decoration: none;
    color: #ffffff;
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
        padding-top: 20px;
        /* width: 60%; */
    }
    img{
        height:20px;
    }
    .main-container{
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        /* background-color: #28690F; */ /* green pallate */
        background-color:transparent;
        border-radius: 0px;
        width: 100%;
        box-shadow:none;
    }
    .container-one{
        /* background-color: #6ABF46; */ /* green pallate */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #E09990;
        padding: 5%;
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
    .link a{
        text-decoration: none;
        color: #2c3e50;
        font-size: 10px;
    }
    .link h2{
        display: none;
    }
    .link img{
        height: 2rem;
    }
    .link img:hover{
        height: 3rem;
        /* // filter:grayscale(100%); */
        filter: invert(100%);
    }
    .social-links{
        display: flex;
        justify-content:flex-end;
        padding-right: 4%;
        gap: 10px;
    }
    .container-two{
        /* background-color:#6ABF46; */ /* green pallate */
        background-color:#F3EED9;
        margin: 0%;
        width: 100%;
        padding: 8%;
        /* padding: 2.5%; */
        border-radius: 0;
        /* margin: 0; */
        
    }
    .about-me{
        text-align: left;
        border-radius: 25px;
    }
    .logos img{
        height: 2rem;
    }
    .button-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .projects-button{
        background-color: #005ca4;
        border-radius: 15px;
        padding: 5px;
        margin: 5px;
    }
    .projects-button a{
        text-decoration: none;
        color: #ffffff;
    }
}
</style>