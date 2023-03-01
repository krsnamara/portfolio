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
    {{ projectsData.ProjectsArray }}
    <div class="main-container">
        <div class="project-card" v-for="(items, index) in projectData.ProjectsArray" v-bind:key="items">
            <h2>{{projectData.ProjectsArray[index].Title}}</h2>
            <img :src="projectData.ProjectsArray[index].Image" alt=""> 
            <p>{{ projectData.ProjectsArray[index].About}}</p>
            <div class="links">
                <a :href="projectData.ProjectsArray[index].Link1" target="_blank">
                    <img src="https://www.svgrepo.com/show/68072/github-logo-face.svg" alt="">
                </a>
                <a :href="projectData.ProjectsArray[index].Link2" target="_blank">
                    <img src="https://www.svgrepo.com/show/273836/links-link.svg" alt="">
                </a>
            </div>
        </div>
    </div>

</template>
    
    <script>
    import jsonData from "/projects.json" // for development purposes to not over use lambda
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
        .nav-wrapper{
            display: flex;
            justify-content: space-around;
            background-color: darkslateblue;
            border-radius: 25px;
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
            border-radius: 25px;
            width:250px;
        }
        .loader {
        border: 16px solid #0a461c; /* Light grey */
        border-top: 16px solid #0bda4d; /* Blue */
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
        }
        .project-card{
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 10px;
            width: 520px;
            height: 700px;
            flex-wrap: 0 0 40%;
            justify-content: flex-start;
            align-items: center;
            background-color: #F3EED9;
            border-radius: 25px;
            box-shadow: rgb(0, 0, 0, .24) 0px 3px 8px;
        }
        .project-card img{
          height: 20rem;
          max-width: 520px;

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
            padding: 10px;
            width: 520px;
            height: fit-content;
            flex-wrap: 0 0 40%;
            justify-content: flex-start;
            align-items: center;
            background-color: #F3EED9;
            border-radius: 25px;
            box-shadow: rgb(0, 0, 0, .24) 0px 3px 8px;
        }

        }
    </style>