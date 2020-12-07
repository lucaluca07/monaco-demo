import React from "react";
import Sider from '../component/sider'
import Editor from "../pages/editor";
import styles from "./index.module.scss";


function App() {
  return (
    <div className={styles.app}>
      <Sider selected={"editor"} />
      <div className={styles.content}>
        <Editor />
      </div>
    </div>
  );
}

export default App;
