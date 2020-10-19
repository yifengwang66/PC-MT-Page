<template>
    <div class="header">
        <menuComp/>
        <searchComp/>
    </div>
</template>

<script>
import menuComp from "./menu";
import searchComp from "./search"
export default {
    components: {
        menuComp,
        searchComp
    }
}
</script>
