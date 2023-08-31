<template>
    <div>

        <div class="card-project">
            <div class="single-card" v-for="project in projects">
                <h2>
                    {{ project.title }}
                </h2>
                <p>
                    {{ project.content.substr(0, 200) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Projects',

    data() {
        return {
            projects : [],
            apiUrl : 'http://127.0.0.1:8000/api/projects',
        }
    },

    methods: {
        getProjects(){
            axios.get(this.apiUrl, {
                params: {}
            })
            .then((response)=> {
                console.log(response.data.results.data);
                this.projects = response.data.results.data;
            })
            .catch(function (error) {
                console.log(error);
            })

        },

    },
    created(){
        this.getProjects();
    },


}
</script>


<style lang="scss">
    div.card-project{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;


    div.single-card{
        border: 2px solid orangered;
        padding: 1rem;
        background-color: lightgray;
        border-radius: 20px;
        color: black;
        margin-bottom: 1rem;
        margin-right: 1rem;
        width: calc((100% / 3) - 1rem);
    }
    }

</style>