<template>
    <!-- <div v-if="loading"> 
        <div class="loading-container">
        <div class="loading">
            <div class="loader"></div>
            <h1>Projects Loading From API</h1> 
        </div>
    </div>
    </div>
    <div  v-else>
        <div class="main-container">
            <div class="project-card" v-for="(items, index) in lambdaReturnData.Items" v-bind:key="items">
                <h2>{{lambdaReturnData.Items[index].title}}</h2>
                <img :src="lambdaReturnData.Items[index].image" alt=""> 
                <p class="detail-container">{{ lambdaReturnData.Items[index].detail}}</p>
                <div class="links">
                    <a :href="lambdaReturnData.Items[index].repo" target="_blank">
                        <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                    </a>
                    <a :href="lambdaReturnData.Items[index].link" target="_blank">
                        <img src="https://www.svgrepo.com/show/273836/links-link.svg" alt="">
                    </a>
                </div>
                <div class="button-container">
                    <div class="projects-button">
                        <a href="/">Home</a>
                    </div>
                    <div class="projects-button">
                        <a href="/projects">Back to Top</a>
                    </div>
                </div> 
            </div>
        </div>
    </div> -->

    <!-- FOR DEVELOPMENT -->
    <div class="main-container page">
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
    import jsonData from '/projects.json' // for development purposes to not over use lambda
    // import axios from 'axios'
    export default {
        data(){
            return{
                projectData: jsonData, // dev hard coding 
                // lambdaReturnData: {},
                // loading: true
            }
        },
        // methods:{
        //     GetProjects(){
        //         this.loading = true; // the loading begins
        //         axios.get('https://9349h8hp52.execute-api.us-east-1.amazonaws.com/items')
        //         .then(response => {
        //             console.log(response)
        //             this.lambdaReturnData.Items = response.data;
        //         }).catch(err =>{
        //             console.log(err);
        //         }).finally(() => {
        //             this.loading = false;
        //         }) // sets loading to false when request finished
        //     }
        // },
        // mounted(){
        //     this.GetProjects();
        // }
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
    .loading-container{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .loading{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F3EED9;
        /* border-radius: 25px; */
        width:250px;
    }
    .loader {
    border: 16px solid #f0f0f0; /* Light grey */
    border-top: 16px solid #2b2b2b; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
    .main-container{
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
        width: 30%;
        min-height: 750px;
        min-width: 245px;
        height: 100%;
        flex-wrap: 0 0 20%;
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
    .detail-container {
        max-width:60%;
        text-align: center;
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