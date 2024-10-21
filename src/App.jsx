import React from "react"
import "./app.css"

const invoke = () => {
    return (
        <div>
                <div className="container">
            <div className="wrapper">
                    <div className="card1">
                        <img src="/jordan.png" alt="" />
                        <h1>Air Jordan 1</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h2>222$</h2>
                        <div className="card__box">
                            <button className="btn1">Buy Now</button>
                            <button className="btn2">⭐</button>
                        </div>
                    </div>

                    <div className="card1 card2">
                        <img src="/jordan2.png" alt="" />
                        <h1>Air Jordan 2</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h2>333$</h2>
                        <div className="card__box">
                            <button className="btn1">Buy Now</button>
                            <button className="btn2">⭐</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default invoke
