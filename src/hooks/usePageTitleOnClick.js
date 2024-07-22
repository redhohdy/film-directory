// src/hooks/usePageTitleOnClick.js
import { useEffect } from 'react';

const usePageTitleOnClick = (title) => {
  useEffect(() => {
    const handleTitleChange = () => {
      document.title = title;
    };

    document.addEventListener('click', handleTitleChange);

    return () => {
      document.removeEventListener('click', handleTitleChange);
    };
  }, [title]);
};

export default usePageTitleOnClick;