import React from "react";
import cx from "classnames";
import { Breadcrumb } from "antd";
import styles from "./index.module.scss";
const panes = [
  { title: "Tab 1", content: "Content of Tab Pane 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab Pane 2", key: "2" },
  { title: "Tab 3", content: "Content of Tab Pane 2", key: "3" },
  { title: "Tab 4", content: "Content of Tab Pane 2", key: "4" },
];

const Header = () => {
  return (
    <div className={styles["header"]}>
      <ul className={styles["tabs"]}>
        {panes.map((pane) => (
          <li
            className={cx(styles["pane"], {
              [styles["pane-active"]]: pane.key === "2",
            })}
            key={pane.key}
          >
            {pane.title}
            <i className={cx("iconfont", "icon-close", styles['close'])}></i>
          </li>
        ))}
      </ul>
      <div className={styles['breadcrumb']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default Header;
