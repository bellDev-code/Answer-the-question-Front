import { useState, useEffect, useCallback } from 'react';

export const useDelayedVisibility = (delay: number) => {
  const [isVisible, setIsVisible] = useState(false);

  // resetDelay 함수가 타이머 ID를 반환하도록 수정합니다.
  const resetDelay = useCallback(() => {
    setIsVisible(false);
    const timerId = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // 이제 이 함수는 클린업 함수를 반환하지 않고, 타이머 ID를 반환합니다.
    return timerId;
  }, [delay]);

  useEffect(() => {
    // resetDelay를 호출하고 타이머 ID를 받습니다.
    const timerId = resetDelay();

    // 클린업 함수에서는 받은 타이머 ID를 사용하여 clearTimeout을 호출합니다.
    return () => clearTimeout(timerId);
  }, [resetDelay]);

  return [isVisible, resetDelay];
};
