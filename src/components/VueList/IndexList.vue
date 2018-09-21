<template>
  <div class="page-indexlist">
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section v-for="item in alphabet" :index="item.initial">

          <mt-cell v-for="cell in item.cells" :title="cell">
            <img src="../../assets/img/weather.jpg" alt="" style="width: 20px;height: 20px;borderRaduis:20px">
          </mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<style lang="scss">
  @component-namespace page {
    @component indexlist {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
      }

      @descendent wrapper {
        width: 100%;
        /*border-top: solid 1px #ddd;*/
      }
    }
  }
</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      };
    },

    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {   //截取字母
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
