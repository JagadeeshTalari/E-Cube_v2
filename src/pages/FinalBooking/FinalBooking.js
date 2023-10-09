import "./FinalBooking.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FinalBooking = () => {
  const { count, totalAmount, date, showTiming, movieName } = useSelector(
    (state) => state.tcktDetails
  );

  let [linkimg, setLinkImg] = useState("");
  const xdata = JSON.stringify({
    Name: "CustomerName",
    MovieName: movieName,
    Tickets: count,
    ShowDate: date,
    ShowTiming: showTiming,
  });
  useEffect(() => {
    async function logMovies() {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${xdata}`
      );
      setLinkImg(response.url);
    }
    logMovies();
  }, [xdata]);
  return (
    <div className="finalBooking_page">
      <p style={{ fontSize: "20px", fontWeight: "600" }}>Your Ticket</p>
      <div className="yourTicket">
        <h2>You booking is confirmed! Enjoy the movie.</h2>
        <div className="ticketDetails">
          <div className="QrCode_Content">
            <img src={linkimg} alt="" />
            <div>Scan this QR at the entrance</div>
          </div>

          <div className="ticketDetails__content">
            <p>{count} Ticket(s)</p>
            <h3>{movieName}</h3>
            <p>{date}</p>
            <p>{showTiming}</p>
          </div>
        </div>
      </div>
      <div className="totalAmount">
        <div>Total Amount :</div>
        <div>
          <b>Rs.{totalAmount}</b>
        </div>
      </div>
    </div>
  );
};
export default FinalBooking;
