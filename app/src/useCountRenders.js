import { useRef } from 'react';

const useCountRenders = name => {
  const renders = useRef(0);
  const current = renders.current++
  // console.log('[', name, '] renders: ', renders.current++);
  console.log(`%c${name} renders: %c${current}`, "background:black ; color: '#ffffff'; font-size:25px", "background:black ; color: red; font-size:25px");
};

export default useCountRenders;
