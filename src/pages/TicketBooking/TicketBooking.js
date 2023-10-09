import { Link, useParams } from "react-router-dom";
import "./TicketBooking.css";
import { useDispatch, useSelector } from "react-redux";
import { ticketDetailsSliceActions } from "../../store/features/ticketDetailsSlice";

const TicketBooking = () => {
  const dispatch = useDispatch();
  const movieName = useParams().movieName;
  const { count, date } = useSelector((state) => state.tcktDetails);
  return (
    <div className="page ticketBooking__page">
      <div className="ticketBooking__content">
        <h1>Ticket Booking</h1>

        <div>
          <label htmlFor="">Select Date :</label>
          <input
            value={date}
            type="date"
            className="showDate"
            onChange={(e) => {
              dispatch(ticketDetailsSliceActions.updateDate(e.target.value));
            }}
          />
        </div>
        <div>
          <label htmlFor="">Select Show Timing : </label>
          <select
            name="ShowTimings"
            id="ShowTimings"
            className="ShowTimings"
            onChange={(e) => {
              dispatch(ticketDetailsSliceActions.updateTime(e.target.value));
            }}
          >
            <option value="10:00 AM">10:00 AM</option>
            <option value="01:30 PM">01:30 PM</option>
            <option value="04:15 PM"> 04:15 PM</option>
            <option value="08:00 PM"> 08:00 PM</option>
            <option value="11:00 PM"> 11:00 PM</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Choose No. of Seats : </label>
          <div className="noOfTickets">
            <button
              onClick={() => dispatch(ticketDetailsSliceActions.decrement())}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => dispatch(ticketDetailsSliceActions.increment())}
            >
              +
            </button>
          </div>
        </div>
        <Link to={`/finalBooking/${movieName}`}>
          <button className="bookNow-btn ticketBookBtn">Book Now</button>
        </Link>
      </div>
    </div>
  );
};
export default TicketBooking;
