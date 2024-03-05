<template>

    <div class="friend-flex" :style="friendStyle">
        <h1>Friends</h1>
        <img class="profile-pic" src="#">
        <h2>miko_solangelo</h2>
        <img class="profile-pic" src="@/assets/images/cat.png">
        <h2>coriandrr</h2>
        <img class="profile-pic" src="@/assets/images/LotusBDay.png">
        <h2>Neopm</h2>
        <img class="profile-pic" src="@/assets/images/Tv.png">
        <h2>__summer_lite__</h2>
        <button>+</button>
    </div>
    <div class="input">
        <input class="dm-input" type="text"/>
        <button>Send</button>
    </div>
    <div class="seperation2" :style="containerStyle">
        <div class="message-flex">
            <div class="dm-flex">
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>Hii</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>hihi</p>
                </div>
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>How are you liking paintnook so far?</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>
                        omg the algorithms amazingggg
                    </p>
                </div>
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>IKR</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>
                        its only my first couple of posts and ive already got hundreds of likes!
                        it takes months to build that kind of engangement on insta
                    </p>
                </div>
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>Yea they have a boost for first time signups</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>
                        i gotta dip now tho but dyou wanna play minecraft later tonight?
                    </p>
                </div>
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>Sure thing! Ooo where you going?</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>
                        lanaru mall with my sister
                    </p>
                </div>
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>NO WAY ARE YOU IN YORKVILLE??? ME TOO</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>
                        AHHHHHH WAIT THATS SO COOL!!!!
                    </p>
                </div>
                <div class="dm">
                    <h2>miko_solangelo</h2>
                    <p>{{change}}</p>
                </div>
                <div class="dm">
                    <h2>dakovinci</h2>
                    <p>
                        yessss definetly!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/styles/chat.css';
    import { mapState } from 'vuex';
    export default{
        computed: {
            ...mapState(['isShowError']),
            containerStyle() {
                return {
                    backgroundColor: this.isShowError ? 'black' : 'none',
                    backgroundImage: this.isShowError ? `url(${require('@/assets/images/eyes3.gif')})` : 'none',
                    backgroundAttachment: this.isShowError ? 'fixed' : 'none',
                    backgroundSize: this.isShowError ? 'contain' : 'none',
                    backgroundPosition: this.isShowError ? 'center' : 'none',
                };
            },
            friendStyle() {
                return {
                    position: this.isShowError ? 'none' : 'fixed',
                };
            },
            change(){
                return this.isShowError ? '-..-. -..-. --... ....-' : 'We GOTTA meet up in person sometime';
            } 
        },
    }
</script>

<style>@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap')</style>