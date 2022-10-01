// components/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = (props) => {
  return /* @__PURE__ */ jsx("button", {
    ...props,
    className: "bg-red-500 hover:bg-red-600 px-4 py-2.5 text-white rounded-full",
    children: props.children
  });
};
export {
  Button
};
