import React from "react";
function Getintouch() {
  return (
    <>
    <div className="sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h2>Get In Touch</h2>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6 s1">
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="col-lg-6 col-md-6 s1">
                  <input type="text" placeholder="Your Email" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 s1">
                  <input type="text" placeholder="Your Subjects" />
                </div>

                <div className="col-lg-6 col-md-6 s1">
                  <input type="text" placeholder="Your Phonenum" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12 s2">
                <textarea placeholder="Comments" rows="7" col="100" />
              </div>
              <div className="btn">
                <button type="button" class="btn btn-warning">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2926784469655!2d78.40067247462925!3d17.49353669973956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935a51321733%3A0x774ea48ce5b015f8!2sAmbitiousLifz%20-%20Java%20Fullstack%20Training%20in%20Kphb%20-%20Java%20Developer%20course%20in%20KPHB%20Hyderabad%20.!5e0!3m2!1sen!2sin!4v1745053807749!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Getintouch;
