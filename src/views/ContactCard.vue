<template>
    <div class="wrapper">
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
.wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
.main-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
    margin: 20px 0px 20px 0px;
    /* background-color: rgb(246, 246, 246); */
    /* border: solid 1px black ; */
    /* border-radius: 5px; */
    padding: 10px;

}
button{
    cursor: pointer;
}
</style>