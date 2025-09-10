import React from "react";
import Block from "dxc-flex";

export default class Button extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <Block
        horizontal="center"
        vertical="center"
        style={{
          userSelect: "none",
          cursor: "pointer",
          marginRight: 12,
          background: "var(--primary)",
          height: 32,
          padding: "0 18px",
          color: "#fff",
          borderRadius: 6,
          boxShadow: "0 2px 6px rgba(27,154,247,0.35)",
          transition: "all .2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 10px rgba(27,154,247,0.45)")}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 6px rgba(27,154,247,0.35)")}
        {...rest}
      >
        {children || "按钮"}
      </Block>
    );
  }
}
