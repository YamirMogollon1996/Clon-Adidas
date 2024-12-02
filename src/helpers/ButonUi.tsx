import React from "react";
interface PropsButonIcons
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[];
}
export const ButonUi = ({ children, ...props }: PropsButonIcons) => {
  return (
    <button
      {...props}
      className="border p-4 rounded-lg bg-slate-200  shadow-lg m-4"
    >
      {children}
    </button>
  );
};
export const ModalChildren = ({ children }: PropsButonIcons) => {
  return (
    <>
      <div className="w-screen h-full fixed top-0 left-0 backdrop-blur-sm">
        <div className="border bg-white backdrop-blur-none p-4 m-auto w-full max-w-md">
          {children}
        </div>
      </div>
    </>
  );
};
