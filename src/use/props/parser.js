export default function usePropsParser() {
  const parseIntArrayProps = (prop) => {
    if ( prop ) {
      if ( Array.isArray(prop) ) {
        return prop;
      }

      if ( typeof prop === 'string' ) {
        const portsArray = JSON.parse(prop);
        if ( Array.isArray(portsArray) ) {
          const resArray = portsArray.map(port => parseInt(port));

          // console.log('resArray', resArray);

          return resArray;
        }
      }
    }
    return [];
  };

  return { parseIntArrayProps };
}