import * as React from "react";

export const Button = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className="bg-red-500 hover:bg-red-600 px-4 py-2.5 text-white rounded-full">{props.children}</button>;
};
