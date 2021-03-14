<template>
  <div>
    <ProfileCard />
    <TimeStamp />
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileUser/ProfileCard";
import TimeStamp from "../components/ProfileUser/TimeStamp";
export default {
  name: "UserProfile",
  components: {
    ProfileCard,
    TimeStamp,
  },
};
</script>

<style>
</style>