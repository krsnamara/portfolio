<template>
    <div class="wrapper">
        <div class="main-container">
            <div class="container-two">
                <div class="input-wrapper">
                    <div>
                        <h1>Lets Enter Our Latest Project</h1>
                    </div>
                    <div class="container">
                        <div class="input-container">
                            <label for="id">Project Id</label>
                            <input type="text" name="id" v-model="postData.id">
                        </div>
                        <div class="input-container">
                            <label for="id">Project Title</label>
                            <input type="text" name="title" v-model="postData.title">
                        </div>
                        <div class="input-container">
                            <label for="id">Project Detail</label>
                            <input type="text" name="detail" v-model="postData.detail">
                        </div>
                        <div class="input-container">
                            <label for="id">Project Image</label>
                            <input type="text" name="image" v-model="postData.image">
                        </div>
                        <div class="input-container">
                            <label for="id">Project Repo</label>
                            <input type="text" name="repo" v-model="postData.repo">
                        </div>
                        <div class="input-container">
                            <label for="id">Project Link</label>
                            <input type="text" name="link" v-model="postData.link">
                        </div>
                        <button class="btn" type="submit" @click="PostProject()">Submit</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
        data(){
            return{
                postData:{
                    id: '',
                    title: '',
                    detail: '',
                    image: '',
                    repo: '',
                    link: '',
                }
            }
        },
        methods:{
            PostProject(){
                axios.put('https://9349h8hp52.execute-api.us-east-1.amazonaws.com/items', this.postData).then(response => {
                    console.log(response);
                    // self.message = 'Data is Entered';
                    this.$router.push('/projects');
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
    </script>
    
    <style scoped>
    .input-wrapper {
        border-radius: 20px;
        stroke: black 2px solid;
        margin: 2.5%;
        width: 70%;
        padding: 15px;
        min-width: 400px;
        max-width: 450px;
        display: flex;
        flex-direction: column;
    }
    .input-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 50px 0px 50px;
    }
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px 20px 0px;

    }
    .main-container{
        display: flex;
        flex-direction: row;
        background-color: #b3b3b3;
    }
    .container-two{
        margin: 2.5%;
        width: 70%;
        padding: 15px;
        border-radius: 25px;  
    }
    .btn{
        margin-top: 25px;
        padding: 15px;
        margin-left: 150px;
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
        .input-wrapper {
        /* background-color: #F3EED9; */
        border-radius: 20px;
        stroke: black 2px solid;
        margin: 2.5%;
        width: 70%;
        padding: 15px;
        min-width: auto;
        max-width: auto;
        /* padding-bottom: 25px; */
        display: flex;
        flex-direction: column;
        }
    .input-container{
        display: flex;
        justify-content:space-evenly;
        gap: 10%;
        align-items: center;
        padding: 0px 50px 0px 50px;
    
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
        .container-two{
            background-color:#F3EED9;
            margin: 0%;
            width: 100%;
            padding: 0%;
            border-radius: 0;  
        }
        }
    </style>