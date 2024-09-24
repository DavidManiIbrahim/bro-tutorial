import react from'./assets/react.svg'



function Card () {

    return (
        <div className="card">
            <img className="cacrd-img" src={react} alt="profile picture" />
            <h2 className='card-title'>Bro code</h2>
            <p className='card-text'>I make youtube videos and play games</p>
        </div>

    )
}

export default Card