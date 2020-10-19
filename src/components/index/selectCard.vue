<template>
    <div class="selectCard">
        <cardGuid :guidInfo="selectTitle" @changeKind="reciveData"/>
        <cardFilm v-if="selectTitle.kind == 'movie'" :cardData="cardData" />
        <cardHotel v-else-if="selectTitle.kind == 'hotel'" :cardData="cardData"/>
        <cardLike v-else-if="selectTitle.kind == 'like'" :cardData="cardData"></cardLike>
    </div>
</template>

<script>
import cardGuid from "./cardGuid"
import cardFilm from "./cardFilm"
import cardHotel from "./cardHotel"
import cardLike from "./cardLike"

export default {
    data() {
        return {
            cardData: {}
        }
    },
    components: {
        cardGuid,
        cardFilm,
        cardHotel,
        cardLike
    },
    props: {
        selectTitle: {
            require: true,
            type: Object
        }
    },
    mounted() {
        // this.$axios.get('')
    },
    methods: {
        reciveData(resp) {
            this.cardData = resp;
        }
    }
}
</script>

<style scoped lang="scss">
.selectCard{
    margin-bottom: 40px;
}

</style>