<template>
    <div class="projects-container page">
        <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <h2>{{projectData.ProjectsArray[index].Title}}</h2>
            <div class="card_inner">
                <div class="image-wrapper">
                    <img :src="projectData.ProjectsArray[index].Image" alt=""> 
                </div>
                <h3>{{ projectData.ProjectsArray[index].About}}</h3>
                <p>____________________________</p>
                <div class="features">
                    <ul class="feature-list">
                        <li>{{projectData.ProjectsArray[index].FeatureOne}}</li>
                        <li>{{projectData.ProjectsArray[index].FeatureTwo}}</li>
                        <li>{{projectData.ProjectsArray[index].FeatureThree}}</li>
                        <li>{{projectData.ProjectsArray[index].FeatureFour}}</li>
                    </ul>
                    <div class="links">
                        <a :href="projectData.ProjectsArray[index].Github" target="_blank">
                            <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                        </a>
                        <a :href="projectData.ProjectsArray[index].LiveLink" target="_blank">
                            <img src="https://www.svgrepo.com/show/273836/links-link.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    <script>
    import jsonData from '/projects.json' 
    export default {
        data(){
            return{
                projectData: jsonData, 
                
            }
        },
    }
    </script>
    
    <style scoped>
    a{
        cursor: pointer;
    }
    .card_inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    li{
        text-align: left;
        font-size: smaller;
        padding-right: 5%;
    }
    .feature-list{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
    }
    .projects-container{
        /* margin-top: 5%; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 15px;
    }
    .project-card p{
        margin: -20px;
    }
    .project-card{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 10px;
        width: 50%;
        min-height: 750px;
        min-width: 245px;
        height: 100%;
        flex-wrap: wrap;
        justify-content:flex-start;
        align-items: center;
        background-color: #e3e3e3;
        /* object-fit: contain; */
    }
    .image-wrapper{
        margin: -20px;
        width: 70%;
        object-fit: contain;
    }
    img{
        height: 100%;
        width: 100%;
        /* object-fit: contain;  */
    }
    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    .links img{
        max-height: 2rem;
        margin: 5px;
    }
    .links img:hover{
        background-color: rgb(9, 9, 236, .5);
        border-radius: 20px;
    }
    @media only screen and (max-width: 850px){
        *{
            box-sizing: border-box;
        }
        .project-card img{
            height: auto;
            max-width: 300px;
        }
        .project-card{
        display: flex;
        flex-direction: column;
        margin: 10px;
        padding: 0px;
        width: 300px;
        height: fit-content;
        min-height: 600px;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        background-color: #f2f2f2;
        
    }
    }
    @media only screen and (max-width: 450px){
        *{
            box-sizing: border-box;
        }
        .project-card img{
            height: auto;
            max-width: 300px;
        }
        .project-card{
        display: flex;
        flex-direction: column;
        margin: 10px;
        padding: 0px;
        width: 520px;
        height: fit-content;
        min-height: auto;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        background-color: #f2f2f2;
        
    }
    }
    </style>