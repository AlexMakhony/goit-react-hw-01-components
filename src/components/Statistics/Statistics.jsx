import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
return (
<section className="statistics">
  {/* Пилим условия для титульной через тернарник */}
  {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
    {/* Дальше методом МАП перебираем DATA проп и создаём необходимое кол-во LI!!! */}
    {stats.map((stat) => 
      <li className="item" key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage"> {stat.percentage}%</span>
    </li>
    )}
  </ul>
</section>
);
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

