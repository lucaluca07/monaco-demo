import React from "react";
import { Tree } from "antd";

import styles from "./index.module.scss";

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: "parent 0",
    key: "0-0",
    children: [
      { title: "leaf 0-0", key: "0-0-0", isLeaf: true },
      { title: "leaf 0-1", key: "0-0-1", isLeaf: true },
    ],
  },
  {
    title: "parent 1",
    key: "0-1",
    children: [
      { title: "leaf 1-0", key: "0-1-0", isLeaf: true },
      { title: "leaf 1-1", key: "0-1-1", isLeaf: true },
    ],
  },
];

const Sider: React.FC<{}> = () => {
  const onSelect = (keys: React.Key[], event: any) => {
    console.log("Trigger Select", keys, event);
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return (
    <div className={styles.sider}>
      <div>Lessons</div>
      <DirectoryTree
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData}
      />
    </div>
  );
};

export default Sider;
