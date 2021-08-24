import s from './Names.module.css';

export interface Person {
  name: string;
  location: string;
  position?: string;
  company?: string;
}

interface NamesProps {
  names: Person[];
}

const Names = ({ names = [] }: NamesProps) => {
  return (
    <div className={s.Names}>
      {names.map((person) => (
        <div key={person.name} className={s.Name}>
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
