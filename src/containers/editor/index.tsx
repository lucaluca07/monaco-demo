import React from "react";
import MonacoEditor from "../../component/editor";
import { Layout } from "antd";
import styles from "./index.module.scss";
import EditorHeader from "./components/header";
import EditorSider from "./components/sider";

const { Header, Sider, Content } = Layout;

const LayoutCom = () => {
  return (
    <Layout className={styles.editor} style={{ height: "100%" }}>
      <Sider className={styles["sider"]}>
        <EditorSider />
      </Sider>
      <Layout>
        <Header className={styles["header"]}>
          <EditorHeader />
        </Header>
        <Content className={styles["content"]}>
          <MonacoEditor />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutCom;
