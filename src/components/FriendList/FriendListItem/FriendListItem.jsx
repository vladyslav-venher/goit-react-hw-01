import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const FriendListItemClsx = clsx(
    css.FriendListItem,
    isOnline ? css.isOnline : css.isOffline
  );
  return (
    <div className={css.card}>
      <img src={avatar} alt="Avatar" width="96" />
      <p className={css.name}>{name}</p>
      <p className={FriendListItemClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
