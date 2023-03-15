// Props это свойство!!!!
// Можно удобно вставлять иконки
import { BsPeople } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { SlLike } from "react-icons/sl";



// ШАГ №1 делаем экспорт нашего компонента!!

export const Profile = ({info:{ username, tag, location, avatar, stats}}) => {
    return <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt={tag}
        class="avatar"
      />
      <p class="name">{username}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>
  
    <ul class="stats">
      <li>
        <BsPeople /> 
        <span class="quantity"> {stats.followers}</span>
      </li>
      <li>
        <VscEye />
        <span class="quantity"> {stats.views}</span>
      </li>
      <li>
        <SlLike />
        <span class="quantity"> {stats.likes}</span>
      </li>
    </ul>
  </div>;
};












// ПОПЫТКА НУМБЕР 1

// export const Profile = ({ username, tag, location, avatar, stats }) => {
//     return (
//         <div class="profile">
//   <div class="description">
//     <img
//       src={avatar}
//       alt={username}
//       class="avatar"
//     />
//     <p class="name">{username}</p>
//     <p class="tag">@{tag}</p>
//     <p class="location">{location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{stats.likes}</span>
//     </li>
//   </ul>
// </div>
//     );
// };