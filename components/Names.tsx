import cx from 'classnames';
import s from './Names.module.css';

export interface Person {
  name: string;
  location: string;
  position?: string;
  company?: string;
}

interface NamesProps {
  names: Person[];
  mentors?: boolean;
}

const Names = ({ names = [], mentors }: NamesProps) => {
  return (
    <div className={s.Names}>
      {names.map((person) => (
        <div key={person.name} className={cx(s.Name, { [s.Mentor]: mentors })}>
          <h3>{person.name}</h3>
          <p>
            {[person.company, person.position, person.location]
              .filter(Boolean)
              .join(' / ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export { Names };
