import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendsStatusOnline,
  FriendsStatusOffline,
} from './FriendList.styled';

// тут ми експортуємо наш компонент ЛІ, який ми зарендеримо у нашому UL FriendList

export const FriendListItem = ({ friend }) => {
    return (
      <FriendsItem key={friend.id}>
        {friend.isOnline ? 
        (
          <FriendsStatusOnline></FriendsStatusOnline>
        ) 
        : 
        (
          <FriendsStatusOffline></FriendsStatusOffline>
        )}
        <img
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className="name">{friend.name}</p>
      </FriendsItem>
    );
  };
  
  FriendListItem.propTypes = {
    friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };