import { Component } from "@/types/index";

const Container: React.FC<Component> = (props) => (
  <div className="container md:mx-auto px-4">{props.children}</div>
);

export default Container;
