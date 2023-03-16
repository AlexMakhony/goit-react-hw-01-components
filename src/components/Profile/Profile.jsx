
import { 
  ProfileWraper, 
  DisriptionWraper, 
  ListWraper,
} from './Profile.styled';
import PropTypes from 'prop-types';
// Props это свойство!!!!
// Можно удобно вставлять иконки
import { BsPeople } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { SlLike } from "react-icons/sl";


// ШАГ №1 делаем экспорт нашего компонента!!

export const Profile = ({info:{ username, tag, location, avatar, stats}}) => {
    return <ProfileWraper>
    <DisriptionWraper>
      <img
        src={avatar}
        alt={tag}
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </DisriptionWraper>
  
    <ListWraper>
      <li>
        <BsPeople /> 
        <span className="quantity"> {stats.followers}</span>
      </li>
      <li>
        <VscEye />
        <span className="quantity"> {stats.views}</span>
      </li>
      <li>
        <SlLike />
        <span className="quantity"> {stats.likes}</span>
      </li>
    </ListWraper>
  </ProfileWraper>;
};

Profile.propTypes = {
  info: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};








