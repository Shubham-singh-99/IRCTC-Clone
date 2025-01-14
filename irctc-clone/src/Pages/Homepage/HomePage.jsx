import React from "react";
import Navbar from "../../components/Navbar/navbar";
import './HomePage.css';
const HomePage = () =>{
    return (
        <div className="homepage">
            <Navbar/>
            <h2>Book Your Train Ticket</h2>
            <form>
            <div className="form-group">
                <label htmlFor="from">From</label>
                <input type="text"
                id="from"
                name="from"
                placeholder="Enter Depature Station"
                required />
            </div>
            <div className="form-group">
                <label htmlFor="to">To</label>
                <input type="text"
                id="to"
                name="to"
                placeholder="Enter Arrival Station"
                required />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date"
                id="date"
                required />
            </div>
            <button type="submit">Search Trains</button>
            </form>
        </div>
    )
}
export default HomePage;