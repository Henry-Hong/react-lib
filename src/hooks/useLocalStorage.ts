import { useState } from "react";

/**
 * ### Overview
 * @hooks useLocalStorage
 * @param {string} key - localStorage key
 * @param {any} initialValue - 초기값
 * @returns {object} [storedValue, setValue]
 * ---
 * ### Details
 * @description
 * - 1. localStorage에 값을 저장하고 불러옵니다.
 * - 2. 초기값을 설정할 수 있습니다.
 * - 3. localStorage에 저장할 때 JSON.stringify를 사용하여 직렬화합니다.
 * @example
 * ```
 * // EXAMPLE_START
 * const fruits = { name: "apple", color: "red" };
 * const [storedValue, setValue] = useLocalStorage("fruits", fruits);
 * console.log(storedValue); // { name: "apple", color: "red" }
 * // EXAMPLE_END
 * ```
 */
export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
