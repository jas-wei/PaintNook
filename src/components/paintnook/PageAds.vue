<template>
    <div class="ad-flex">
        <img class="img1" src="../../assets/images/clothing.png">

        <router-link :to="{ name: 'PageError' }" @click="toggleError">
            <img class="img1" src="@/assets/images/quiz.png">
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            isError: false
        };
    },
    computed: {
        ...mapState(['isShowError'])
    },
    methods: {
        toggleError() {
            console.log('toggle error:' + this.isShowError)
            this.$store.commit('toggleShowError');
        }
    }
}
</script>