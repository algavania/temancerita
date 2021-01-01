<template>
  <v-app>
    <ExpandInfo />
    <SearchMentor />
    <MentorCards />
  </v-app>
</template>

<script>
import MentorCards from "../components/Mentor/MentorCards";
import ExpandInfo from "../components/Mentor/ExpandInfo";
import SearchMentor from "../components/Mentor/SearchMentor";
export default {
  name: "Mentor",
  components: {
    MentorCards,
    ExpandInfo,
    SearchMentor,
  },
};
</script>

<style>
</style>