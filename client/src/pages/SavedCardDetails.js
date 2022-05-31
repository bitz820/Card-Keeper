import React from 'react'

function SavedCardDetails({card}) {
    console.log(card.credit_card)

    const {name, img_url, benefits, welcome_bonus} = card.credit_card
    
    return (
        <div key={name}>
            <h1>{name}</h1>
            <img src={img_url} alt={name} />
            <h3>Benefits: {benefits}</h3>
            <h3>Welcome Bonus! {welcome_bonus}</h3>
        </div>
    )
}

export default SavedCardDetails