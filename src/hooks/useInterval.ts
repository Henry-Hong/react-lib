import { useEffect, useRef } from "react";
type TypeFunctionWithNoArgs = () => void;

/**
 * @hooks useInterval
 * @description
 * - 1. callback이 중간에 바뀌어도 interval이 초기화되지 않습니다.
 * - 2. ref를 사용하여 컴포넌트 렌더링 사이에 참조를 유지합니다.
 * - 3. interval 딜레이를 선언적으로 관리할 수 있습니다.
 * @example
 * ```
 * // setInterval vs useInterval
 * const callback = () => console.log("callback");
 *
 * let timerId = setInterval(callback, 1000); // 1. 초기설정
 * clearTimeout(timerId); // 2. 정지
 * timerId = setInterval(callback, 1000); // 3. 다시재생
 *
 * useInterval(callback, 1000); // 1. 초기설정
 * useInterval(callback, null); // 2. 정지
 * useInterval(callback, 1000); // 3. 다시재생
 * ```
 */
export const useInterval = (
  callback: TypeFunctionWithNoArgs,
  delay: number | null
) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const savedCallback = useRef<TypeFunctionWithNoArgs | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const cb = () => savedCallback.current!();
    if (typeof delay === "number") {
      intervalRef.current = setInterval(cb, delay);
    }
    return () => clearInterval(intervalRef.current!);
  }, [delay]);

  return intervalRef.current;
};
