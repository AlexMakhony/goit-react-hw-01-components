import { Profile } from "./Profile";
import user from "../Data/user.json"
import { Statistics } from "./Statistics";
import data from "../Data/data.json"

// ШАГ №2 Обьявляем наш компонент, импорт автоматом
// подтянулся, если нет ручками делаем

export const App = () => {
// ШАГ №3 Делаем как у репеты, берем весь обьект
  return (
    <div>
      <Profile info={user}/>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};






// По ТЗ вот так (см.вниз)
// // <Profile username={user.username}
// tag={user.tag}
// location={user.location}
// avatar={user.avatar}
// stats={user.stats} />