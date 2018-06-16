<template>
    <div id="cnzz" v-html="datas">
        {{ datas }}
    </div>
</template>
<script>
export default {
    data()
    {
        return{
            datas:unescape("%3Cspan id='cnzz_stat_icon_1273884767'%3E%3C/span%3E%3Cscript src='" +
     (("https:" == document.location.protocol) ? " https://" : " http://") + 
     "s22.cnzz.com/z_stat.php%3Fid%3D1273884767%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"),
        }
    },

};
</script>
