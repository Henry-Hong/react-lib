import { useEffect, useState } from "react";

/**
 * ### Overview
 * @hooks useMounted
 * @param void
 * @returns {boolean} isMounted
 * ---
 * ### Details
 * @description
 * - 1. 컴포넌트가 마운트 되었는지 여부를 반환합니다.
 *
 * @example
 * ```
 * // EXAMPLE_START
 * const isMounted = useMounted();
 * if (isMounted) {
 *    // do something
 * }
 * // EXAMPLE_END
 * ```
 */
export function useMounted(): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
