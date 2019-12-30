import { useCallback, useState } from 'react';

export const getItem = function<T>(key: string, defaultValue: T): T {
  const result = window.localStorage.getItem(key);
  if (!result) {
    return defaultValue;
  }
  try {
    return JSON.parse(result) as T;
  } catch (err) {
    console.warn(err);
    return defaultValue;
  }
};

export const setItem = function(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const useStoredState = function<T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const value = getItem(key, defaultValue);
  const [state, setState] = useState(value);
  const setValue = useCallback(
    (changed) => {
      setState(changed);
      setItem(key, changed);
    },
    [key, setState],
  );
  return [state, setValue];
};
