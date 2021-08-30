import PropTypes from "prop-types";
import s from "./Friend.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline} />
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
