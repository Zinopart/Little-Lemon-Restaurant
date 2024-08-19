import React from "react";
import React, {useState} from 'react';
import "./Styles/BookingForm.css";

const BookingForm = () => {
    return (
            <form>
                <label for="res-date">Choose date</label>
                    <input type="date" id="res-date" />
                <label for="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>Select Time</option>
                        <option>10:30AM</option>
                        <option>11:00AM</option>
                        <option>11:30AM</option>
                        <option>12:00PM</option>
                        <option>12:30PM</option>
                        <option>1:00PM</option>
                        <option>1:30PM</option>
                        <option>2:00PM</option>
                        <option>2:30PM</option>
                        <option>3:00PM</option>
                        <option>3:30PM</option>
                        <option>4:00PM</option>
                        <option>4:30PM</option>
                        <option>5:00PM</option>
                        <option>5:30PM</option>
                        <option>6:00PM</option>
                        <option>6:30PM</option>
                        <option>7:00PM</option>
                        <option>7:30PM</option>
                        <option>8:00PM</option>
                        <option>8:30PM</option>
                        <option>9:00PM</option>
                        <option>9:30PM</option>
                        <option>10:00PM</option>
                        <option>10:30PM</option>
                        <option>11:00PM</option>
                     </select>
                <label for="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" />
                <label for="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Select Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                <label for="othertext"></label>
                    <input type="textarea" placeholder="If other, please specify"></input>
                <input type="submit" value="Make Your reservation" />
            </form>
    )
    }

    export default BookingForm;