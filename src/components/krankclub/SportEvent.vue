<template>
  <div id="SportEvent">
    <div id="dateEvent" :style="bgc">
      <p id="hourEvent">{{ info.hour }}</p>
      <p id="dayEvent">{{ info.day }}</p>
      <div style="width: 100%">
        <v-btn id="favBtn" icon @click="changeFavorite(guid)">
          <v-icon :color="info.favorite ? 'yellow' : 'white'" medium >
            {{ info.favorite ? 'fa-star' : 'fa-star-o' }}
          </v-icon>
        </v-btn>
      </div>

    </div>
    <div id="infoEvent">
      <p id="titleEvent">{{ info.title }}</p>
      <div id="informations">
        <p id="hashtagLabel">{{ info.hashtags.join(' ') }}</p>
        <p id="organizerLabel">{{ info.name }}</p>
        <p id="priceTimeLabel">{{ info.status ? 'FULL' : info.price+'€ - '+info.time }}</p>
      </div>
      <div>
        <img id="organizerPhoto" :src='info.organizerPhoto'>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import EventStore from './../../store/SportEventStore';

  export default {
    store: EventStore,
    props: ['info', 'guid'],
    name: 'SportEvent',
    data() {
      return {
        bgc: {
          backgroundColor: this.info.status ? '#5b5b5b' : '',
        },
      };
    },
    methods: {
      ...mapActions([
        'changeFavorite',
      ]),
    },
    computed: {
      ...mapGetters(['mockups']),

    },
  };
</script>

<style scoped>

  #infoEvent{
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding-left: 7px;
    margin-top: 0;
  }

  #dateEvent{
    color: white;
    text-align: center;
    min-width: 25%;
    min-height: 100%;
    background-color: #2bb46c;
    border-radius: 15px;

  }

  #dateEvent > p{
    margin-bottom: 7px;
  }

  #hourEvent{
    font-size: 5.2vw;
    font-weight: bold;
    margin-bottom: 5px
  }

  #dayEvent{
    font-size: 4.8vw;
    font-weight: bold;
  }

  #SportEvent{
    background-color: #f3f3f3;
    display: flex;
    width: 100%;
    flex-flow: row;
    border-radius: 15px;
  }

  #hashtagLabel, #organizerLabel, #priceTimeLabel{
    font-size: 4.5vw;
    font-weight: lighter;
    margin: 0 0 5px;
  }

  #titleEvent{
    color: #2bb46c;
    font-size: 5.5vw;
    margin-bottom: 5px;
    font-family: "Avenir Next LT Pro Bold Condensed",sans-serif;
  }

  #SportEvent > div{
    padding-top: 10px;
  }

  #SportEvent{
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
  }


  #hashtagLabel{
    color: #a2a2a2;
    font-size: 4vw;
  }

  #organizerPhoto{
    position: absolute;
    bottom: 10px;
    right: 20px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
  }

  #favBtn{
    margin: 0px 0px 5px;
  }
</style>

