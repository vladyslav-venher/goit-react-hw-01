import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.topWrap}>
        <img src={image} alt="User avatar" className={css.image} />
        <p className={`${css.text} ${css.title}`}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={`${css.text} ${css.location}`}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={`${css.listItem} ${css.firstLi}`}>
          <span className={css.text}>Followers</span>
          <span className={css.text}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.text}>Views</span>
          <span className={css.text}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.text}>Likes</span>
          <span className={css.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
