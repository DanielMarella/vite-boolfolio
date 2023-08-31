<template>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link  :to="link.route ">
                       {{link.name}}
                    </router-link>
                </li>
            </ul>
        </nav>
</template>
<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            links : [
                {
                    route: './',
                    name: 'HomePage'
                },
                {
                    route: 'projects',
                    name: 'Projects'
                },
            ]
        }
    },
}
</script>
<style lang="scss">
    nav{
        width: 100%;
        padding: 1rem 3rem;
        background-color: grey;
        color: white;

        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            list-style-type: none;
            font-size: 2rem;

            li{
                margin-right: 2rem;

                a{
                    text-decoration: none;
                    color: black;
                }

            }
        }
    }


</style>