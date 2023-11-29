import Tooltip from "@mui/material/Tooltip";
import "./card.css"

const Card = ({ imgSrc, followersCount, label, songs }) => {
  console.log("songsData", songs)
    const totalSongs = Array.isArray(songs) ? songs.length : 0;
    console.log(totalSongs)
 
  return (
    <div className="card-wrapper">
      <div className="card">
        <Tooltip title={`${totalSongs} Songs`} placement="top" arrow>
          <div className="card-img-frame">
            <img className="card-img" src={imgSrc} alt="Album cover" />
          </div>
          <div className="card-content">
            <span className="card-content-pill">
              {followersCount} follows
            </span>
          </div>
        </Tooltip>
      </div>
      <p className="card-label">{label}</p>
    </div>
  );
};

export default Card;

