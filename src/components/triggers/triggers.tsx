import React from 'react';
import './triggers.scss'
import TriggersItem from './triggersItem.tsx';
import { TriggersList } from '../../routes/triggerRoutes.tsx';
// import TriggerData from '../../fakeData/triggersData.json';
// import {TriggersList} from '../../route/triggers'


export default function Triggers() {

  return (
      <div className="triggers">
          <div className="container">
              <div className="triggersContent">
                      {TriggersList.map((card:any, index:number) =>(
                          <TriggersItem 
                            key={index}
                            card={card}
                            />
                      ))}
              </div>
          </div>
      </div>
  )
}