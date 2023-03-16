
export const Statistics = ({title, stats}) => {
return (
<section class="statistics">
  {/* Пилим условия для титульной через тернарник */}
  {title && <h2 class="title">{title}</h2>}
  <ul class="stat-list">
    {/* Дальше методом МАП перебираем DATA проп и создаём необходимое кол-во LI!!! */}
    {stats.map((stat) => 
      <li class="item" key={stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage"> {stat.percentage}%</span>
    </li>
    )}
  </ul>
</section>
);
};



