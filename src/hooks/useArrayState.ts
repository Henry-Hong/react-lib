import { useState } from "react";

/**
 * ### Overview
 * @hooks useArrayState
 * @param {any} initialValue - initial array with values inside
 * @returns {object} [array, {add, remove, pop, shift, concat}]
 * ---
 * ### Details
 * @description
 * - You can manage array state without messy code keeping immutability
 * @example
 * ```
 * // EXAMPLE_START
 * const [array, {add, remove, pop, shift, concat}] = useArrayState([1,2,3]);
 *
 * add(4); // [1,2,3,4]
 * remove(2) // [1,2,4]
 * pop() // [1,2]
 * shift() // [2]
 * concat([4,5,6], [7,8,9]) // [2,4,5,6,7,8,9]
 * // EXAMPLE_END
 * ```
 */

export const useArrayState = <T>(initialValue: T[]) => {
  const [arr, setArr] = useState(initialValue);

  const add = (item: T) => {
    setArr((prev) => [...prev, item]);
  };

  const remove = (index: number) => {
    setArr((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  const pop = () => {
    setArr((prev) => {
      const newArr = [...prev];
      newArr.pop();
      return newArr;
    });
  };

  const shift = () => {
    setArr((prev) => {
      const newArr = [...prev];
      newArr.shift();
      return newArr;
    });
  };

  const concat = (...newArrs: T[][]) => {
    setArr((prev) => [...prev].concat(...newArrs));
  };

  const tools = { add, remove, pop, shift, concat };

  return [arr, tools];
};
