<template>
  <div>
    <transition-group @leave="leave" :css='false'>
    <sport-event :key="event.guid" v-for="event in elements" :info="event.data" :guid="event.guid"></sport-event>
    </transition-group>
  </div>
</template>

<script>
  /* eslint-disable object-shorthand */

  import SportEvent from './SportEvent';

  export default {
    name: 'listEvent',
    components: {
      SportEvent,
    },
    data() {
      return {
        activeTab: '',
      };
    },
    props: {
      elements: { required: true },
    },
    methods: {
      leave: (element, done) => {
        $(element).show().slideUp(600, done);
      },
    },
  };
</script>
