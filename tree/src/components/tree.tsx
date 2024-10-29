import { fakeData } from "./constant";
import { TreeProps } from "./type";
import "./tree.css";
import { CSSProperties, useState } from "react";
import { DownOutlined, LineOutlined, RightOutlined } from "@ant-design/icons";

const styles: CSSProperties = { width: 12, height: 12 };

const Tree = () => {
  return (
    <div>
      {/* fakeData为设定的fake数据 */}
      {fakeData.map((item) => {
        return <TreeItem item={item} key={item.key} />;
      })}
    </div>
  );
};

const TreeItem = ({ item }: { item: TreeProps }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tree-item">
      <div className="content" onClick={() => setIsOpen(!isOpen)}>
        <>
          {item.children.length > 0 ? (
            <>
              {isOpen ? (
                <DownOutlined style={styles} />
              ) : (
                <RightOutlined style={styles} />
              )}
            </>
          ) : (
            <LineOutlined style={styles} />
          )}
        </>
        <div>{item.content}</div>
      </div>
      {/* 如果子组件存在多个元素，就进行递归调用item子组件，不断渲染其内容 */}
      {item.children.length > 0 && isOpen && (
        <>
          {item.children.map((child) => {
            return <TreeItem item={child} key={child.key} />;
          })}
        </>
      )}
    </div>
  );
};

export default Tree;
