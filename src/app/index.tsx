import React from "react";
import cx from "classnames";
import Editor from "../containers/editor";
import styles from "./index.module.scss";

const siderList = [
  { name: "editor", icon: "file-copy" },
  { name: "search", icon: "search" },
];

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.sider}>
        {siderList.map(({ name, icon }, i) => (
          <div
            key={name}
            className={cx(styles.icon, { [styles["icon-active"]]: i === 0 })}
          >
            <i className={cx("iconfont", `icon-${icon}`)}></i>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <Editor />
      </div>
    </div>
  );
}

export default App;
