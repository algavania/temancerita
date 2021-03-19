<template>
  <div>
    <HeaderPaket />
    <BenefitPaket />
    <DaftarPaket />
    <FAQPaket />
  </div>
</template>

<script>
import HeaderPaket from "../components/PaketMentoring/HeaderPaket";
import BenefitPaket from "../components/PaketMentoring/BenefitPaket";
import DaftarPaket from "../components/PaketMentoring/DaftarPaket";
import FAQPaket from "../components/PaketMentoring/FAQPaket";
export default {
  name: "PacketPage",
  components: {
    HeaderPaket,
    BenefitPaket,
    DaftarPaket,
    FAQPaket,
  },
};
</script>

<style>
</style>