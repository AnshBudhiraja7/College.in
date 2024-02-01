import React from 'react'

const AInquiryContent = () => {
  return (
    <div className="inner-page-wrapper contact-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-4">
        <div className="contact-social">
          <address>
            <ul>
              <li><i className="fa fa-home" />1980 Fulton Street San Diego</li>
              <li><i className="fa fa-phone" />0800 123 46 0000</li>
              <li><i className="fa fa-envelope-o" /><a href="javascript:void(0)">support@yourdomain.com</a></li>
              <li><i className="fa fa-twitter" /><a href="javascript:void(0)">Twitter</a></li>
              <li><i className="fa fa-dribbble" /><a href="javascript:void(0)">Dribbble</a></li>
              <li><i className="fa fa-youtube" /><a href="javascript:void(0)">You Tube</a></li>
              <li><i className="fa fa-pinterest" /><a href="javascript:void(0)">Pinterest</a></li>
              <li><i className="fa fa-linkedin" /><a href="javascript:void(0)">Linkedin</a></li>
              <li><i className="fa fa-instagram" /><a href="javascript:void(0)">Instagram</a></li>
            </ul>
          </address>
        </div>
      </div>
      <div className="col-md-9 col-sm-8">
        <div className="contact-text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
          <form>
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <input name="name" required className="form-control form-item" placeholder="First Name" type="text" />
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="form-group">
                  <input name="name" required className="form-control form-item" placeholder="Last Name" type="text" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input name="phone" required className="form-control form-item" placeholder="Phone Number" type="text" />
                </div>
              </div>
              <div className="col-xs-12">
                <div className="form-group">
                  <textarea placeholder="Message" name="Message" rows={3} className="form-control form-item" defaultValue={""} />
                </div>
              </div>
              <div className="col-xs-12">
                <button className="btn btn-1" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div id="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198710.35112897935!2d-98.51489117772236!3d38.904562823631146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1471865832140" allowFullScreen />
  </div>
</div>

  )
}

export default AInquiryContent
