<template>
    <div class="errorContainer">
        <h1> 404 :(</h1>
        
        <p> Sorry about that, the requested URL was not found on this server.
            Are you sure the website URL is correct?
        </p>
        <p> 
            Technical Information:
        </p>
        <p> 
            ***STOP:-..-. -.... --...
        </p>
    </div>
</template>

<style scoped>
    .errorContainer {
        background-color: blue;
        height: 100%;
        width: 100%;
        position:absolute;
        top:0;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }

    *{
        color: white;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90vh;
        margin: 0;
    }

    h1{
        font-size: 40px;
        margin-bottom: 20px;
        font-weight:500;
    }

    p{
        margin: 5px;
        font-size: 14px;
        /* text-align: center; */
        width: 500px;
    }
</style>