import { EffectCallback, useEffect, useRef } from "react";

/**
 * ### Overview
 * @hooks useEffectOnce
 * @param {function} callback - 한번만 실행할 콜백함수
 * @returns void
 * ---
 * ### Details
 * @description
 * - 1. 컴포넌트 라이프 사이클에서 단 한번만 실행합니다.
 * - 2. React.StrictMode에서도 단 한번만 실행됩니다.
 * @example
 * ```
 * // EXAMPLE_START
 * useEffectOnce(() => console.log("log only once"));
 * // EXAMPLE_END
 * ```
 */
export const useEffectOnce = (callback: EffectCallback) => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      callback();
    }
    return () => {
      if (typeof callback === "function") {
        callback();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
