<template>
    <div class="welcome-container">
        <div class="side-flex">
            <div  class="challenge">
                <h3>Daily Challenge</h3>
                <h1>Dharman</h1>
            </div>
            <div>
                <h3>Trending Topics</h3>
                <li>Top 10 cheapest tablets</li>
                <li>Open Commisions</li>
                <li>Art Trade!</li>
                <li>Ink wash</li>
                <li>Character design tips</li>
                <li>New carcinogen</li>
            </div>
        </div>
        <div class="main">
            <h2>Welcome to</h2>
            <h1>PAINTNOOK</h1>
            <video class='video' controls src='@/assets/images/arg_video_1.mp4'></video>
            <p>
                Hello and welcome to Paintnook, a community of young artists working
                together to improve their skills. Meet friends, complete daily challenges,
                and have fun in our safe and inclusive forums designed for kids! 
                Paintnook works just like a classroom, fostering the creative spirit 
                of the next generation of artists. And parents, don’t worry, activity on
                Paintnook is supervised at all times by our team of professionals. And
                the best part is it’s completely free! Sign up for Paintnook today!
            </p>
            
            <div class="featured">
                <h2>Artist Spotlight:</h2>
                <div class="artist-flex">
                    <img src="@/assets/images/kirby.jpg">
                    <img src="@/assets/images/dragon.jpg">
                    <img src="@/assets/images/pony.jpg">
                    <img src="@/assets/images/guy.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PageWelcome'
};
</script>