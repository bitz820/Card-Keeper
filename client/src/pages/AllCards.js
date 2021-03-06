import React, { useState } from "react"
import CardPreview from "../Components/CardPreview"
import Error from '../styles/Error'


function AllCards({ setCreditCards, creditCards, grabSelectedCard, addToFavorites, error }) {
    // FIGURE OUT HOW TO RENDER CC UPON REFRESH
    console.log(creditCards)
    const [company, setCompany] = useState("All")

    const filteredByCompany = company === "All" ? creditCards : creditCards.filter(card => card.company === company)

    const renderCards = filteredByCompany.map((card) => <CardPreview key={card.id} addToFavorites={addToFavorites} grabSelectedCard={grabSelectedCard} card={card} />)

    const renderError = <Error key={error}>{error}</Error>

    return (
        <>
            <div className="card__container">
                <h1>Current HOT Deals!</h1>
                <form>
                    <select  onChange={e => setCompany(e.target.value)} value={company}>
                        <option value="All">See Our Goods</option>
                        <option value="Amazon">Amazon</option>
                        <option value="American Express">American Express</option>
                        <option value="Capital One">Capital One</option>
                        <option value="Chase">Chase</option>
                        <option value="Discover">Discover</option>
                        <option value="Hyatt">Hyatt</option>
                        <option value="United">United</option>
                    </select>
                </form>
                {error ? renderError : null}
                <div 
                className="card__grid"
                >
                    {renderCards}
                </div>
            </div>
        </>
    )
}

export default AllCards