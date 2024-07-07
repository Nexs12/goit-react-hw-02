import css from "../Profile/Profile.module.css";

export default function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.father}>
      <div className={css.children}>
        <img className={css.descendantImg} src={image} alt="User avatar" />
        <p className={css.fatherParagraf}>{name}</p>
        <p className={css.descendantParagraf}>{tag}</p>
        <p className={css.descendantParagraf}>{location}</p>

        <ul className={css.descendantUl}>
          <li className={css.descendantLi}>
            <span className={css.span}>Followers</span>
            <span className={css.descendantNumber}>{followers}</span>
          </li>
          <li className={css.descendantLiBorder}>
            <span className={css.span}>Views</span>
            <span className={css.descendantNumber}>{views}</span>
          </li>
          <li className={css.descendantLi}>
            <span className={css.span}>Likes</span>
            <span className={css.descendantNumber}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
