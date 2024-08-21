import { computed } from "vue";

/*
* скругленные бордеры
*/
export const roundProps = {
  round: {
    type: [Boolean, Array],
    required: false,
    default: true
  }
};

export function useRoundPropsMultiInput(roundProp) {
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

export function useRoundPropsClass(roundProp) {
  if (roundProp) {
    if (typeof roundProp === "boolean") {
      if (roundProp) return 'r3'
    }
    if (Array.isArray(roundProp)) {
      if (roundProp.length === 2) {
        const sideClass = (sideIndex) => sideIndex === 0 ? 'rL3' : 'rR3';
        return roundProp.map((pos, i) => pos ? sideClass(i) : null).filter(i => i !== null).join(' ');

      } else if (roundProp.length === 4) {
        const cornerClass = (cornerIndex) => {
          switch (cornerIndex) {
            case 0: return 'rED3';
            case 1: return 'rEA3';
            case 2: return 'rEB3';
            case 3: return 'rEC3';
          }
        }
        return roundProp.map((pos, i) => pos ? cornerClass(i) : null).filter(i => i !== null).join(' ');
      }
    }
  }
  return '';
}
