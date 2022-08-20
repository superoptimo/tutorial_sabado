<script lang="ts">
  import "./assets/styles/global.scss";

  import Articulo1 from "./blogs/lorenipsun3.md";
  import Articulo2 from "./blogs/second.md";
  import Articulo3 from "./blogs/third.md";

  
  let buttons_params_set = [
    {btn:"btn-green", label:"Green", action:3},
    {btn:"btn-red", label:"Red", action:1},
    {btn:"btn-yellow", label:"Yellow", action:4},
    {btn:"btn-violet", label:"Violet", action:0},
    {btn:"btn-blue", label:"Blue", action:2},
    {btn:"btn-nebai", label:"Nebai", action:5}
  ];


  let rxButtons = [
    buttons_params_set[2],
    buttons_params_set[0],
    buttons_params_set[3]
  ]; 

  function change_order(action_index)
  {
    let num_elements = buttons_params_set.length;
    
    for(let i = 0; i < 3; i++)
    {
      let ti = (action_index + i) % num_elements;
      rxButtons[i] = buttons_params_set[ti];
    }

    /// actualizamos la variable reactiva
    /// rxButtons = rxButtons;
  }


</script>
<div class="wrap">
  <h1>Sassy Button Mixin</h1>
  <p>Use SASS to detect your background colors and other styles and apply them to your buttons for consistent global hovers and active states.</p>
  
  {#each rxButtons as element }
      <span class="btn {element.btn}" on:click={ () => change_order(element.action) } >{element.label} Button</span>
  {/each}
</div>
<div class="wrapblog">
  <div class="article">
    <Articulo1/>
  </div>
  <div class="article">
    <Articulo2 />
  </div>
  <div class="article">
    <Articulo3 />
  </div>
</div>
<style lang="scss">
  
  @use "assets/styles/btnbg";
  .btn-violet {
     @include btnbg.button-bg(#ff00ff);
  }

  .btn-nebai {
     @include btnbg.button-bg(#003332);
  }

  .wrapblog{
    display:grid;
    width:100%;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 400px;
    padding-top:60px;
  }

  :global(.article){
    padding:20px;
    overflow:auto;
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
    background-color: #f39c12 !important;
    border-width: 2px;
  }

  :global(.article) table {
    border: thick double #32a1ce;
  }
</style>