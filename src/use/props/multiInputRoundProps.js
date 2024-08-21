import {computed} from "vue";

export default function useMultiInputRoundProps(roundProp) {
  const basicRounds = computed(() => {
    if (typeof roundProp === "boolean") {
      return roundProp ? [true, true, true, true] : [false, false, false, false];
    }
    if (Array.isArray(roundProp)) {
      if (roundProp.length === 2) {
        return [roundProp[0], roundProp[0], roundProp[1], roundProp[1]];
      } else if (roundProp.length === 4) {
        return roundProp
      }
    }
    return [true, true, true, true];
  });

  const roundFirstInput = computed(() => {
    const inputRounds = [true, true, false, false];
    return basicRounds.value.map( (r, i) => r && inputRounds[i] );
  })

  const roundLastInput = computed(() =>  {
    const inputRounds = [false, false, true, true];
    return basicRounds.value.map( (r, i) => r && inputRounds[i] );
  })

  return { roundFirstInput, roundLastInput }
}