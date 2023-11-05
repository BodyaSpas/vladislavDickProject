import React from "react";
import { Link } from "react-router-dom";
import Image from '../../images/predmets/math.png';

interface IProps{
    predmet: IPredmet;
}

export default function PredmetCard(props: IProps){
    const {description, predmet, image} = props.predmet
    return(
        <div className="predmetCard">
                <img className="predmetImage" src={Image} alt={predmet} />
            <div className="predmetInfo">
                <h3 className="predmetName">
                    {predmet}
                </h3>
                <p className="predmetDescription">
                    {description}
                </p>
                <Link className="predmetLink" to='/'>Більше</Link>
            </div>
        </div>
    )
}