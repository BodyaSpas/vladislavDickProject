import React from 'react';
import PredmetData from '../../fakeData/fakeData.json';
import PredmetCard from './predmetCard.tsx';
import './predmetsListComponent.scss';


export default function PredmetsList() {
    const Predmets = PredmetData.predmets;
    return (
        <section id="predmetsList">
            <div className="container">
                <div className="predmetsListContent">
                    <h2 className="subTitle">Завжди готові допомогти!</h2>
                    <div className="predmetList_list">
                        {Predmets.map((item, index) => (
                            <PredmetCard key={index} predmet={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}