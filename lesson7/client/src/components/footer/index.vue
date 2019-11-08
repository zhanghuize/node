<template>
    <div>
        <footer class="footer">
            <slot></slot>
        </footer>
    </div>
</template>
<script>
export default {
    name:"v-footer",
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="css">
.footer{
    border-top: 1px solid #000;
    width: 100%;
    height: 45px;
}
</style>