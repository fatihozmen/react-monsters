import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';  

export const CardList = probs => (
        <div className='card-list'>
            {probs.monsters.map(
                monster => (
                    <Card key={monster.id} monster ={monster} /> 
                    )
                )
            }
        </div>
        );
