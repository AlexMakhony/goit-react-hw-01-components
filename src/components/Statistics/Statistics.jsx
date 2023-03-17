import PropTypes from 'prop-types';
import {
  StatisticWraper,
  StatisticTitle,
  StatisticList,
  StatisticItem,
} from './Statistisc.styled';

export const Statistics = ({title, stats}) => {
return (
<StatisticWraper>
  {/* Пилим условия для титульной через тернарник */}
  {title && <StatisticTitle>{title}</StatisticTitle>}
  <StatisticList>
    {/* Дальше методом МАП перебираем DATA проп и создаём необходимое кол-во LI!!! */}
    {stats.map((stat) => 
      <StatisticItem key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage"> {stat.percentage}%</span>
    </StatisticItem>
    )}
  </StatisticList>
</StatisticWraper>
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

