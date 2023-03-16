// А тут ми імпортуємо нашу форму LI і звісно ж через MAP всавляємо в LI необхідку кількість
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((friend) => 
            <FriendListItem key={friend.id} friend={friend}/>
            )}
        </ul>
    );
    };
    
// А вже нашу FriendList будемо рендерити у APP

// Виглядає так: FriendListItem ======>>>> FriendList ======>>>> App

