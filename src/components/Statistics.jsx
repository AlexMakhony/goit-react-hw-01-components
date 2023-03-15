
export const Statistics = ({title, stats}) => {
return <section class="statistics">
<h2 class="title">{title}</h2>
<ul class="stat-list">
    {stats.map(({ id, label, percentage }) => 
        
    )};
</ul>
</section>
};




{/* <li class="item">
    <span class="label">.docx</span>
    <span class="percentage">4%</span>
  </li>
  <li class="item">
    <span class="label">.mp3</span>
    <span class="percentage">14%</span>
  </li>
  <li class="item">
    <span class="label">.pdf</span>
    <span class="percentage">41%</span>
  </li>
  <li class="item">
    <span class="label">.mp4</span>
    <span class="percentage">12%</span>
  </li> */}

// // return (<StatisticsCard>
// {title && <Title>{title}</Title>}
// <StatList>
//     {stats.map(({ id, label, percentage }) =>
//         <StatisticsItem key={id}>
// <StatText>{label}</StatText>
// <StatText>{percentage}%</StatText>
//         </StatisticsItem>
//     )}
// </StatList>
// </StatisticsCard>)