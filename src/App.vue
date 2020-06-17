<template>
  <div id="app" class="wrapper">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <Test/>-->
<!--      <div>N:{{n}}</div>-->
      <div class="chess">
          <HelloWorld msg="Welcome to Your Vue.js App"/>

          <div class="row">
              <Cell v-on:click="onClickCell(0, $event)" v-bind:n ="n" />
              <Cell v-on:click="onClickCell(1, $event)" v-bind:n ="n"/>
              <Cell v-on:click="onClickCell(2, $event)" v-bind:n ="n"/>
          </div>
          <div class="row">
              <Cell v-on:click="onClickCell(3, $event)" v-bind:n ="n"/>
              <Cell v-on:click="onClickCell(4, $event)" v-bind:n ="n"/>
              <Cell v-on:click="onClickCell(5, $event)" v-bind:n ="n"/>

          </div>
          <div class="row">
              <Cell v-on:click="onClickCell(6, $event)" v-bind:n ="n"/>
              <Cell v-on:click="onClickCell(7, $event)" v-bind:n ="n"/>
              <Cell v-on:click="onClickCell(8, $event)" v-bind:n ="n"/>

          </div>
          <div>{{map}}</div>
          <div>  {{result==null?"no winner yet...":`winner is :${result} !`}}</div>
      </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from "./components/Test"
import Cell from "./components/Cell"
export default {
    name: 'App',
    components: {
    HelloWorld,
    Test,
    Cell,
    },
    data(){
        return {
            n:0,
            result:null,
            map:[
                [null,null,null],
                [null,null,null],
                [null,null,null],
            ]
        }
    },
    methods:{
        onClickCell(i,text){
            console.log( `click ${i}, the value is ${text}`)

            this.map[Math.floor(i/3)][i%3] = text
            this.n++;
            this.tell();
        },
        tell(){
            for (let i = 0; i < 2; i++) {
                if(this.map[i][0]!=null && this.map[i][0]==this.map[i][1] && this.map[i][2]==this.map[i][1]){
                    this.result = this.map[i][0]
                }
            };
            for (let i = 0; i < 2; i++) {
                if(this.map[0][i]!=null && this.map[0][i]==this.map[1][i] && this.map[2][i]==this.map[1][i]){
                    this.result = this.map[i][0]
                }
            };
            if(this.map[0][0]!=null &&
                this.map[0][0] && this.map[1][1] &&
                this.map[2][2] && this.map[1][1] ){
                this.result = this.map[i][0]
            };
            if(this.map[0][2]!=null &&
                this.map[0][0] == this.map[1][1] &&
                this.map[2][2] == this.map[1][1] ){
                this.result = this.map[i][0]
            }
        }
    }
}
</script>

<style>

.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.row{
    display: flex;
    justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
