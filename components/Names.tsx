import { useMemo } from 'react';
import orderBy from 'lodash.orderby';

import s from './Names.module.css';

interface Person {
  name: string;
  location: string;
  position?: string;
  company?: string;
}

interface NamesProps {
  names: Person[];
}

const Names = ({ names = [] }: NamesProps) => {
  const ordered = useMemo(() => {
    return orderBy(names, 'name', 'asc');
  }, [names]);

  return (
    <div className={s.Names}>
      {ordered.map((person) => (
        <div key={person.name} className={s.Name}>
          <h3>{person.name}</h3>
          {[person.company, person.position, person.location]
            .filter(Boolean)
            .join(' / ')}
        </div>
      ))}
    </div>
  );
};

export { Names };
