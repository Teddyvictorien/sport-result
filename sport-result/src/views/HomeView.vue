<script lang="ts">
import TheWelcome from '../components/TheWelcome.vue';
import { driverService } from '../services/DriverService';

export default {
  data() {
    return {
      year: '2023'
    };
  },
  components: {
    TheWelcome
  },
  methods :{
    async getDrivers(year: string): Promise<void> {
    try {
      // Assuming driverService.getDriver returns a Promise
      driverService.getDriver(year);
      // Additional logic after successfully getting the driver for the specified year
    } catch (error) {
      // Handle errors here
      console.error('Error fetching driver:', error);
    }
  }
  }
}
</script>

<template>
  <main>
    <the-welcome />
    <div>
      <button @click="getDrivers(year)">Voir les pilotes</button>
    </div>
  </main>
</template>
