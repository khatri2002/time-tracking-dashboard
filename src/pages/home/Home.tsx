import { useState } from "react";

import cn from "classnames";

import { buttons, data } from "../../data";
import { Duration, Item } from "../../types";
import { iconEllipsis, imageJeremy } from "../../assets/images";
import styles from "./Home.module.scss";

const Home = () => {
  const [selectedDuration, setSelectedDuration] = useState<Duration>("daily");
  const [animation, setAnimation] = useState<boolean>(false);

  const getCurrentValue = (item: Item) => {
    if (selectedDuration === "daily")
      return `${item.timeframes.daily.current}hrs`;
    if (selectedDuration === "weekly")
      return `${item.timeframes.weekly.current}hrs`;
    return `${item.timeframes.monthly.current}hrs`;
  };

  const getPreviousValue = (item: Item) => {
    if (selectedDuration === "daily")
      return `Last day - ${item.timeframes.daily.previous}hrs`;
    if (selectedDuration === "weekly")
      return `Last week - ${item.timeframes.weekly.previous}hrs`;
    return `Last month - ${item.timeframes.monthly.previous}hrs`;
  };

  const handleChangeDuration = (duration: Duration) => {
    if (duration === selectedDuration) return;
    setAnimation(true);

    // update the values when animation is half completed
    setTimeout(() => {
      setSelectedDuration(duration);
    }, 500);

    // update animation to false when it gets completed
    setTimeout(() => {
      setAnimation(false);
    }, 1000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.userCard}>
          <div className={styles.header}>
            <img src={imageJeremy} alt="image-jeremy" />
            <div className={styles.textContainer}>
              <h2 className={styles.subText}>Report for</h2>
              <h1 className={styles.heroText}>
                <span>Jeremy</span> <span>Robson</span>
              </h1>
            </div>
          </div>
          <div className={styles.footer}>
            <ul className={styles.itemsContainer}>
              {buttons.map((button, index) => (
                <li key={index} className={styles.item}>
                  <button
                    className={cn({
                      [styles.active]: selectedDuration === button.key,
                    })}
                    onClick={() => handleChangeDuration(button.key)}
                    type="button"
                  >
                    {button.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${styles.itemCard} ${styles[item.classname]}`}
          >
            <img
              className={styles.icon}
              src={item.icon}
              alt={`Icon ${item.title}`}
            />
            <div className={styles.content}>
              <div className={styles.labelContainer}>
                <span>{item.title}</span>
                <button type="button">
                  <img src={iconEllipsis} alt="icon-ellipsis" />
                </button>
              </div>
              <div
                className={cn({
                  [styles.valuesContainer]: true,
                  [styles.animate]: animation,
                })}
              >
                <span className={styles.heroText}>{getCurrentValue(item)}</span>
                <span className={styles.subText}>{getPreviousValue(item)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
