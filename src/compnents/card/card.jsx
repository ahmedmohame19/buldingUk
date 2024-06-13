import React from 'react';
import './card.scss';

export default function Card({ Title, Desc }) {
    return <div class="card text-center">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{Title}</h5>
            <p class="card-text">{Desc}</p>
        </div>
    </div>

}
