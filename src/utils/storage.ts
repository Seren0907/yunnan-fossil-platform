import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'yunnan-fossil-favorites';
const TASKS_KEY = 'yunnan-fossil-completed-tasks';
const VIEWED_EXHIBITS_KEY = 'yunnan-fossil-viewed-exhibits';

function readArray(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeArray(key: string, value: string[]) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event('learning-storage-change'));
}

export function useStoredIds(key: string) {
  const [ids, setIds] = useState<string[]>(() => readArray(key));

  useEffect(() => {
    const sync = () => setIds(readArray(key));
    window.addEventListener('storage', sync);
    window.addEventListener('learning-storage-change', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('learning-storage-change', sync);
    };
  }, [key]);

  const toggle = (id: string) => {
    const next = ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id];
    writeArray(key, next);
    setIds(next);
  };

  const add = (id: string) => {
    if (ids.includes(id)) return;
    const next = [...ids, id];
    writeArray(key, next);
    setIds(next);
  };

  return { ids, toggle, add };
}

export const storageKeys = {
  favorites: FAVORITES_KEY,
  tasks: TASKS_KEY,
  viewedExhibits: VIEWED_EXHIBITS_KEY,
};
