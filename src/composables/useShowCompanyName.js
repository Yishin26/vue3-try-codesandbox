import { ref } from "vue";

export default function useShowCompanyName() {
  const companyName = ref("Google");
  function consoleCompanyName() {
    console.log(companyName.value);
  }
  return {
    companyName,
    consoleCompanyName
  };
}
