import React, { useEffect } from "react";
import * as monaco from "monaco-editor";
import light from './themes/light';
import dark from './themes/dark';
import monokai from './themes/dark';
import './index.scss'

monaco.editor.defineTheme('light', light);
monaco.editor.defineTheme('dark', dark);
monaco.editor.defineTheme('monokai', monokai);

const getLanguage = (path: string) => {
  if (path.includes('.')) {
    switch (path.split('.').pop()) {
      case 'js':
        return 'javascript';
      case 'jsx':
        return 'javascript';
      case 'ts':
        return 'typescript';
      case 'json':
        return 'json';
      case 'css':
        return 'css';
      case 'html':
        return 'html';
      case 'md':
        return 'markdown';
      case 'yaml':
        return 'yaml';
      case 'yml':
        return 'yaml';
      default:
        return undefined;
    }
  }
};

const Editor = () => {
  useEffect(() => {
    const monacoEditor = monaco.editor.create(
      document.querySelector(".editor") as HTMLDivElement,
      {
        value: "",
        language: getLanguage(".yaml"), // 语言
        theme: "dark", // 主题    vs-dark
        lineNumbers: 'on',
        wordWrap: 'off',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        glyphMargin: true,
        fontSize: 16,
        // quickSuggestions: true, // 默认的提示
        fixedOverflowWidgets: true, // 超出编辑器大小的使用fixed属性显示
        // selectOnLineNumbers: true,
        // roundedSelection: false,
        // cursorStyle: "line", // 光标样式
        // automaticLayout: true, // 自动布局
        // glyphMargin: true, // 字形边缘
        // useTabStops: false,
        // fontSize: 16, // 字体大小
        // minimap: {
        //   // 代码缩略图
        //   enabled: true,
        // },
      }
    );
    return () => monacoEditor.dispose();
  }, []);
  return <div className="editor"></div>;
};

export default Editor;
