<template>
	<div class="container">
<!--		{{n}}-->

		<div class=" cell" v-on:click="onClickSelf">
			<template v-if="a">{{text}}</template>
			<template v-else ></template>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Cell",
	    props:["n"],
        data(){
            return  {
                a:false,
	            text:"",

            }
        },
	    /*computed:{
            text(){
               return this.n % 2 == 0 ? "X":"O"
            }
	    },*/
	    methods:{
            onClickSelf(){
                if(this.text !=""){
                    return;
                }
                this.a=true;
                this.text = this.n % 2 == 0 ? "X":"O"
                this.$emit('click',this.text)
            }
	    }
    }
</script>

<style scoped>
	.cell{
		border:1px solid black ;
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 80px;
	}
</style>