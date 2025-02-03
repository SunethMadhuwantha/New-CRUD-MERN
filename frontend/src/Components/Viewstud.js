import React from "react";
import { Link } from "react-router-dom";

export default function Viewstud() {
  return (
    <div className="container mt-5">
      <Link className="btn btn-primary mt-5" to="/">
        Home
      </Link>
      <div className="row mt-3">
        <div className="col-md-6">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">
              Student Details
            </li>
            <li class="list-group-item">Student Name</li>
            <li class="list-group-item">Student Address</li>
            <li class="list-group-item">Student Mobile</li>
            <li class="list-group-item">Student Subject</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
