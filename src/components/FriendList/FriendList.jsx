import PropTypes from 'prop-types';

// А тут ми імпортуємо нашу форму LI і звісно ж через MAP всавляємо в LI необхідку кількість
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map((friend) => 
            <FriendListItem key={friend.id} friend={friend}/>
            )}
        </ul>
    );
    };
    
// А вже нашу FriendList будемо рендерити у APP

// Виглядає так: FriendListItem ======>>>> FriendList ======>>>> App

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  
  
  
  
  