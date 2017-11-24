<template>
  <div style="width: 100%;">
    <v-toolbar class="bar toolBar relative" flat dark color="light-blue darken-3">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text" style="width: 100%">
        <v-btn flat @click="toggleMenu()" style="width: 100%;display: flex;text-align: center; " class="align-center">
          <span>{{ region }}</span>
          <v-icon color="white">{{ menu ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fa-bell-o</v-icon>
      </v-btn>
    </v-toolbar>
    <transition-group @leave="leave" @enter="enter" :css='false'>
      <div key="a" id="menuToolbar" v-if="menu">
        <v-btn color="primary" flat @click="setTitle" v-for="item in regions">{{ item }}</v-btn>
      </div>
    </transition-group>
    <v-tabs grow>
      <v-tabs-bar style="height: 35px" class="bar padding" dark color="white">
        <v-tabs-slider color="light-blue darken-3"></v-tabs-slider>
        <v-tabs-item
          v-for="i in items"
          :key="i"
          :href="'#tab-' + i"
        >
          <li class="tab-title">{{ i }}</li>
        </v-tabs-item>
      </v-tabs-bar>
      <div class="padding bar" id="modifyLink">
        <a href="#">Modify my selection</a>
      </div>
      <div>
        <p class="padding bar" id="date">Monday 11th June</p>
      </div>
      <v-tabs-items class="padding">
        <v-tabs-content class="eventContainer" :key="items[0]" :id="'tab-' + items[0]">
          <list-event :elements="mockups.filter(function (mock){return mock.data.favorite === true})" class="listContent"></list-event>
        </v-tabs-content>
        <v-tabs-content :key="items[1]" :id="'tab-' + items[1]">
          <list-event :elements="mockups" class="listContent eventContainer"></list-event>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>
    <v-bottom-nav class="bar"
                  style="background-color: white;"
                  :value="true"
                  :active.sync='activeTab'>
      <v-btn flat color="light-blue darken-3" value="profile">
        <span>Profile</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn flat color="light-blue darken-3" value="schedule">
        <span>Schedule</span>
        <v-icon>fa-list</v-icon>
      </v-btn>
      <v-btn flat color="light-blue darken-3" value="session">
        <span>My Sessions</span>
        <v-icon>fa-calendar</v-icon>
      </v-btn>
      <v-btn flat color="light-blue darken-3" value="create">
        <span>Create</span>
        <v-icon color>add_circle_outline</v-icon>
      </v-btn>

      <hr class="bar" style="background-color: #0277bd; border: none; z-index: 5; position: fixed" width="100%" size="4px" noshade>

    </v-bottom-nav>
  </div>
</template>

<script>
  /* eslint-disable object-shorthand */
  import { mapGetters } from 'vuex';
  import ListEvent from './krankclub/ListEvent';
  import EventStore from './../store/SportEventStore';

  export default {
    store: EventStore,
    name: 'krankclub',
    data() {
      return {
        msg: 'Message',
        menu: false,
        regions: ['Île-de-France', 'Grand Est', 'Normandie', 'Bretagne'],
        region: 'Île-de-France',
        activeTab: 'schedule',
        items: ['My selection', 'All events'],
      };
    },
    components: {
      ListEvent,
    },
    methods: {
      $Resize: () => {
        let height = 0;
        $('.bar').each((_, element) => {
          height += $(element).outerHeight(true);
        });
        $('.listContent').css('height', $(window).height() - height);
        $('#menuToolbar').css('height', $(window).height() - $('.toolBar').outerHeight(true));
      },
      leave: (element, done) => {
        $(element).show().slideUp(500, done);
      },
      enter: (element, done) => {
        $(element).hide().slideDown(500, done);
      },
      setTitle: function (element) {
        console.log(element);
        this.region = $(element.target)[0].innerHTML;
        this.toggleMenu();
      },
      toggleMenu: function () { this.menu = !this.menu; },
    },
    computed: {
      ...mapGetters(['mockups']),
    },
    mounted() {
      this.$Resize();
      $(window).on('resize', () => {
        this.$Resize();
      });
    },

  };
</script>

<style scoped>
  .padding{
    padding-left: 10px;
    padding-right: 10px;
  }

  .eventContainer{
    overflow: scroll;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .tab-title{
    text-transform: none;
    vertical-align: bottom;
  }

  #modifyLink{
    width: 100%;
    text-align: center;
    margin-top: 7px;
  }

  #modifyLink > a{
    color: #0277bd;
    text-decoration: none;
    font-size: 4.5vw;
  }

  #date {
    font-size: 4vw;
    background-color: #efefef;
    color: #686868;
    margin-top: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-bottom: 0px;
  }

  #menuToolbar{
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #0277bd;
    color: white;
  }

  #menuToolbar > button{
    width: 100%;
    padding: 0;
    margin: 0;
    border-top: solid #0295e2 1px;
  }

  .relative{
    position: relative;
  }
</style>
