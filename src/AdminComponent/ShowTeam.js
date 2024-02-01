import React from 'react'

const ShowTeam = (props) => {
  return (
    <div>
      <div className="team-wrapper team">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <div className="team-wrap">
          <div className="thumbnail thumbnail-model">
            <figure className="thumbnail-image"><img src={`${props.data.Image?props.data.Image:"images/team1.jpg"}`} alt=""/> </figure>
            <div className="thumbnail-inner">
              <div className="link-group"><i className="fa fa-phone" /><a href="#" className="link-white">{`${props.data.Phone?props.data.Phone:"+91XXXXXXXXXX"}`}</a></div>
              <div className="link-group"><i className="fa fa-envelope" /><a href="#" className="link-white">{`${props.data.Email?props.data.Email:"abc@gmail.com"}`}</a></div>
            </div>
            <div className="thumbnail-caption">
              <p className="text-header"><a href="#">{`${props.data.Name?props.data.Name:"Doris Wilson"}`}</a></p>
              <div className="divider divider-md bg-teak" />
              <p className="text-caption">{`${props.data.Designation?props.data.Designation:"Professor"}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ShowTeam
