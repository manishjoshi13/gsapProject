import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants/index'

const Cocktails = () => {
  return (
    <section id='cocktails' className='noisy'>
        {/* <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' /> */}
        <div className="list">
            <div className="popular">
                <h2>Most Popular Cocktails:</h2>
                <ul>
                    {cocktailLists.map((drink)=>{
                        return(<li key={drink.name}>
                            <div className='me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country}|{drink.detail}</p>

                            </div>
                            <span>-{drink.price}</span>
                        </li>)
                    })}
                </ul>
            </div>
        
            <div className="loved">
                <h2>Most Loved Mocktails:</h2>
                <ul>
                    {mockTailLists.map((drink)=>{
                        return(<li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country}|{drink.detail}</p>

                            </div>
                            <span>-{drink.price}</span>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
      
    </section>
  )
}

export default Cocktails
