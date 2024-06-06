import { useState } from "react";
import { useInterval } from "./useInterval";

type TypeUseTimerParams = {
  delay?: number;
  autoPlay?: boolean;
  initialCount?: number;
};

/**
 * ### Overview
 * @hooks useTimer
 * @param {number} [param.delay=1000] - interval 딜레이, default=1000
 * @param {boolean} [param.autoPlay=true] - 자동재생 여부, default=true
 * @param {number} [param.initialCount=0] - 초기 카운트, default=0
 * @returns {object} { count, isPlay, play, pause, toggle, clear }
 * ---
 * ### Details
 * @description
 * - 1. 일시정지(pause) / 재생(play) / 초기화(claer) 함수를 제공합니다.
 * @example
 * ```
 * // EXAMPLE_START
 * const { count, isPlay, play, pause, toggle, clear } = useTimer({ delay: 1000, autoPlay: true, initialCount: 0 });
 * // EXAMPLE_END
 * ```
 */
export const useTimer = ({
  delay = 1000,
  autoPlay = true,
  initialCount = 0,
}: TypeUseTimerParams) => {
  const [isPlay, setIsPlay] = useState(autoPlay);
  const [count, setCount] = useState(initialCount);

  const play = () => setIsPlay(true);
  const pause = () => setIsPlay(false);
  const toggle = () => setIsPlay((prev) => !prev);
  const clear = () => {
    setIsPlay(false);
    setCount(0);
  };

  useInterval(() => setCount((prev) => prev + 1), isPlay ? delay : null);

  return { count, isPlay, play, pause, toggle, clear };
};
