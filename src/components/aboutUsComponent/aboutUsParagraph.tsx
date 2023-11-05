import React from "react";

interface IProps{
    text: string;
}

export default function AboutUsParagraph(props: IProps){
    return(
        <p className="description">
            {/* {props.paragraph.text} */}
            {props.text}
        </p>
    );
} 