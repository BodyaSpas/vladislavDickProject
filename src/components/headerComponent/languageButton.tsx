import React from "react";

interface IProps{
  button: ILanguageButton;
  setLanguage:(buttonValue:string) => void;
    setActive: () => void;
    isActive: boolean;
}

export default function LanguageButton(props: IProps) {
    const {buttonText, value} = props.button;


    const handleSetLanguage = () => {
      props.setLanguage(value);
      props.setActive();
    }

  return (
    <button className={`languageButton ${props.isActive ? 'active' : ''}`} onClick={handleSetLanguage}>
      {buttonText}
    </button>
    // <button className={`blogList__button ${props.isActive ? 'active' : ''}`} onClick={handleSetBlogs}>
    //     {buttonText}
    // </button>
  )
}