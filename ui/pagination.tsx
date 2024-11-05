'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const createArrayPages = (countPage: number, activePage: number) => {
  const array: (string | number)[] = [1];

  for (let i = 2; i < countPage; i++) {
    const diff = i - activePage;
    if (diff > 2 || diff < -2) continue;
    if (diff === 2 || diff === -2) {
      array.push('...');
      continue;
    }
    array.push(i);
  }
  array.push(countPage);

  return array;
};

type TPaginationProps = {
  countPage: number;
  changePageFn: (page: number) => void;
};

export default function Pagination({ countPage, changePageFn }: TPaginationProps) {
  const params = useParams();
  const [activePage, setActivePage] = useState(params?.stepId ? Number(params?.stepId) : 0);
  const [arrayPages, setArrayPages] = useState<(string | number)[]>([]);

  const onClickPage = (item: number) => {
    setActivePage(item);
    changePageFn(item);
  };

  useEffect(() => {
    const array = createArrayPages(countPage, activePage);

    if (activePage === 0) {
      setActivePage(array[0] as number);
    }

    setArrayPages(array);
  }, [countPage, activePage]);

  return (
    <div className='flex'>
      {arrayPages.map((item) => (
        <div
          key={item}
          className={`border w-10 h-10 cursor-pointer flex items-center rounded-full justify-center transition-[border] delay-100 ${activePage !== item ? 'border-white opacity-50' : 'border-gray'} ${item === '...' ? 'pointer-events-none' : ''}`}
          onClick={() => onClickPage(item as number)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
