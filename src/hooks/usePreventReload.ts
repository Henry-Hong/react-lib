import { useEffect } from "react";

/**
 * ### Overview
 * @hooks usePreventReload
 * @param void
 * @returns void
 * ---
 * ### Details
 * @description
 * - 1. 컴포넌트가 리로드 될 때 경고창을 띄웁니다.
 * @example
 * ```
 * // EXAMPLE_START
 * usePreventReload(); // 해당 훅이 사용된경우, 컴포넌트가 리로드 될 때 경고창을 띄웁니다.
 * // EXAMPLE_END
 * ```
 */
export const usePreventReload = () => {
  useEffect(() => {
    window.onbeforeunload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, []);
};
