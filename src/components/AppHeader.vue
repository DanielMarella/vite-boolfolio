<template>
        <nav>
            <ul>
                <li>
                    <router-link  :to="{name: 'homepage'}">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'projects'}">
                        Projects
                    </router-link>
                </li>
            </ul>
        </nav>
</template>
<script>
export default {
    name: 'AppHeader'
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