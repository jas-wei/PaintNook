<template>
    <div class="container">
        <div class="navigation-bar">
            <nav> 
                <p class="logo2"> P A I N T N O O K </p>
                <ul id="sidemenu"> 
                    <li><router-link to="/paintnook"> Home </router-link></li>
                    <li><router-link to="/chat"> Chat </router-link></li>
                    <li><router-link to="/account"> Account </router-link></li>
                </ul>
            </nav>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import '@/styles/paintnook.css';
    export default {
        name: 'PageHeader',
    };

</script>

<style>
/* Add your CSS styles here */
</style>