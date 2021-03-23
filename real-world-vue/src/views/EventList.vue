<template>
  <div>
    <h1>All Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService.js'

export default {
  data(){
    return {
      events:[]
    }
  },
  components: {
    EventCard,
  },
  created () {
    EventService.getEvents()
          .then(response => {
            this.events = response.data
            });
  },
}
</script>
