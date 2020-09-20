import React from "react";
import "../Gallery/Gallery.scss";
import {Link} from "gatsby"


export default function Gallery(props) {
  return (
    <div>
      <div class="responsive mb-5">
        <div class="gallery">
          <Link className="g-link" target="_blank" to={props.link}>
            <img src={props.image} alt="" width="600" height="400" />
          </Link>
          
        </div>
      </div>
      
    </div>
  );
}
