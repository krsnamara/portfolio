<template>
    <div class="wrapper">
        <div class="message">
            <h1>Get in touch with me!</h1>
            <p>Feel free to send me an email about projects you have in mind, collaborations, job opportunities, jokes that make you laugh...</p>

        </div>
        <div class="main-container">
            <input v-model="emailData.name" type="text" placeholder="What's your name?">
            <input v-model="emailData.email" type="email" placeholder="Enter your email">
            <textarea v-model="emailData.bodyText" name="bodyText" cols="30" rows="10" placeholder="Your message here"></textarea>
            <button @click="SendEmail()">Send Email</button>
        </div>
        <!-- {{emailData}}  for dev testing that data was getting recorded -->
         
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            emailData:{
                name: "",
                email: "",
                bodyText: ""
            }
        }
    },
    methods:{
        SendEmail(){
            axios.post('https://dnlmu9nnn3.execute-api.us-east-1.amazonaws.com/prod/sendemail', this.emailData).then(
                response => {
                    console.log(response);
                    alert("Email has been Sent, Thank you for reaching out!")
                }
            ).catch(err => {
                console.log(err)
                alert("Ooops Email Failed")
            })
        }
    },
    mounted(){
        const textContainer = document.querySelector('.inner-container');

        const observer = new IntersectionObserver(entries => {
            console.log(entries);
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    textContainer.classList.add('text-animation')
                    return;
                }
                    textContainer.classList.remove('text-animation')
            })
        });

        observer.observe(document.querySelector('.main-container'))
    }
}
</script>

<style scoped>
.message{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20px;
    padding: 20px;

}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 75px;
}
.main-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
    margin: 20px 0px 20px 0px;
    padding: 10px;

}
button{
    cursor: pointer;
}
@media only screen and (max-width: 670px){
    h1{
        font-size: 1.2rem;
    }
    p{
        font-size: .9rem;
    }
    .message{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 2.5%;
        padding: 5px;
    }
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 0px;
    }
    .main-container{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 80%;
        margin: 0px 0px 15px 0px;
        padding: 5px;
    }
        }
</style>