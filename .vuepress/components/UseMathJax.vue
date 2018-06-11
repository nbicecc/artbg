
<template>
    
</template>

<script>
export default {
    name:"UseMathJax",
    beforeMount(){
        this.create()
    },
    mounted(){
        this.resume()
    },
    methods: {
        create(){
                MathJax.Hub.Config({
                tex2jax: {
                inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
                }})
        }
        ,
        resume(){
                MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        },
    }
}
</script>
