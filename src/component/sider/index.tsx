import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

const top = [
  { name: "editor", icon: "file-copy" },
  { name: "search", icon: "search" },
];

const bottom = [
  { name: "user", icon: "user" },
  { name: "profiles", icon: "setting" },
];

interface Props {
  selected: string;
}

function Sider({ selected }: Props) {
  return (
    <div className={styles.sider}>
      <ul className={styles.top}>
        {top.map(({ name, icon }) => (
          <li
            key={name}
            className={cx(styles.icon, {
              [styles["icon-active"]]: name === selected,
            })}
          >
            <i className={cx("iconfont", `icon-${icon}`)}></i>
          </li>
        ))}
      </ul>
      <ul className={styles.bottom}>
        {bottom.map(({ name, icon }, i) => (
          <li
            key={name}
            className={cx(styles.icon, {
              [styles["icon-active"]]: name === selected,
            })}
          >
            <i className={cx("iconfont", `icon-${icon}`)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sider;
