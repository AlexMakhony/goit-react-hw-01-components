// тут ми експортуємо наш компонент ЛІ, який ми зарендеримо у нашому UL FriendList

export const FriendListItem = ({ friend }) => {
    return (
      <li className="item" key={friend.id}>
        {friend.isOnline ? 
        (
          <span className="status-green">green</span>
        ) 
        : 
        (
          <span className="status-red">red</span>
        )}
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </li>
    );
  };
  