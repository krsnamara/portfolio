
<template>
    <div class="resume-wrapper">
        <div class="resume-html">
            <h5>Staten Island, NY</h5>
            <div class="github-linkedin">
                <a href="https://github.com/krsnamara">Github</a>   |  
                <a href="www.linkedin.com/in/martinj-fitzpatrick">LinkedIn</a>
            </div>
            <div class="bio-wrapper">
                <div class="bio-statement">
                    <h3>Full Stack Software Developer</h3>
                    <hr>
                    <p class="bio-paragraph">Experienced in JavaScript and Python based programming, with a background in construction and property maintenance in Brooklyn, NY. Possess strong skills in communication, function, and project management that help tech companies build beautiful, responsive applications. Committed empathetic sociable developer with a passion for creating positive energy towards goals and projects. Seeking a challenging work ethic that produces useful and well thought out solutions for everyday tasks. Efficient with time allocation and ability to break down larger projects into smaller goals to achieve great ends.</p>
                </div>
                <div class="bio-statement">
                    <h3>Technical Skills</h3>
                    <hr>
                    <p class="skills">JavaScript, Express.js, Node.js, React, Django, Vue.js, MongoDB, PostgreSQL, AWS, Heroku, Netlify, Vercel</p>
                </div>
                <div class="bio-statement">
                    <h3>Technical Projects</h3>
                    <hr>
                    <div class="project-title">
                        <h4>Sacred Hound Designs -</h4>
                        <div class="project-links">
                            <a href="https://sacredhoundstore.herokuapp.com/">Site</a> |
                            <a href="https://github.com/krsnamara/sacredhoundstore">Github</a>
                        </div> 
                    </div>
                    <ul>
                        <p>An e-commerce site for a friends art project</p>
                        <li></li>
                    </ul>
                </div>
                <div class="bio-statement">
                    <h3>Experience</h3>
                    <hr>
                    <div class="project-title">
                        <h4>Made by Mookie</h4>
                        <div class="project-links">
                            <a href="https://sacredhoundstore.herokuapp.com/">Site</a> |
                            <a href="https://github.com/krsnamara/sacredhoundstore">Github</a>
                        </div> 
                    </div>
                    <ul>
                        <p>An e-commerce site for a friends art project</p>
                        <li></li>
                    </ul>
                    <!-- <p class="experience">Experienced in JavaScript and Python based programming, with a background in construction and property maintenance in Brooklyn, NY. Possess strong skills in communication, function, and project management that help tech companies build beautiful, responsive applications. Committed empathetic sociable developer with a passion for creating positive energy towards goals and projects. Seeking a challenging work ethic that produces useful and well thought out solutions for everyday tasks. Efficient with time allocation and ability to break down larger projects into smaller goals to achieve great ends.</p> -->
                </div>
                <div class="bio-statement">
                    <h3>Education</h3>
                    <hr>
                    <div class="education-wrapper">
                        <div class="education">
                        <h4>General Assembly</h4>
                        <p>New York, NY</p>
                        </div> 
                        <div class="education">
                        <p>Full Stack Software Enginerring Remote</p>
                        <p>11/2022-02/2023</p>
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
    .github-linkedin a {
        font-size: 1rem;
    }
    .resume-html{
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: start;

    }
    .resume-wrapper{
        font-family: 'Open Sans', sans-serif;
        margin-top: -45px;
        padding: 0px 30px 0px 30px;
    }
    .bio-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        margin-top: 10px;
    }
    .bio-statement{
        width:90%;
        margin: -20px;
    }
    .bio-statement h3{
        text-transform: uppercase;
    }
    .bio-paragraph{
        text-align: left;
    }
    .project-title{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
    }
    .project-title a {
        font-size: .95rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        margin: -20px;
    }
    .education-wrapper{
        display: flex;
        flex-direction: column;
        gap: -20px;
    }
    .education{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>