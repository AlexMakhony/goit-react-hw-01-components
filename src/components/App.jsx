import { Profile } from "./Profile";
import user from "../Data/user.json"
import { Statistics } from "./Statistics";
import data from "../Data/data.json";
import { FriendList } from "./FriendList";
import friends from "../Data/friends.json";
import { TransactionHistory } from "./TransactionHistory";
import transactions from "../Data/transactions.json";

// ШАГ №2 Обьявляем наш компонент, импорт автоматом
// подтянулся, если нет ручками делаем

export const App = () => {
// ШАГ №3 Делаем как у репеты, берем весь обьект
  return (
    <div>
      <Profile info={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};


