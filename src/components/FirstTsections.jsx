import React, { Component } from 'react'

export default class FirstTsections extends Component {
  render() {
    return (
      <div>
        <section className="first-hightlight-wrapper">
		<div className="container">

			<div className="new-alert">
                {this.props.new}
			</div>

			<div className="title-wraper bold black">
				{this.props.title1} 
			</div> 

			<div className="links-wrapper">
				<ul>
					{this.props.learn}
					<li><a href="">Order</a></li>
				</ul> 
			</div>

			<div className="ipod-caption row">
				<div className="col-sm-12 col-md-6 text-md-right">iPad Pro available starting 3.25</div>
				<div className="col-sm-12 col-md-6 text-md-left">Magic Keyboard coming in May</div>
			</div>
		</div>
	</section>

	<section className="second-hightlight-wrapper">
		<div className="container">

			<div className="new-alert">
				{this.props.new}
			</div>

			<div className="title-wraper bold black">
				{this.props.title2} 
			</div> 

			<div className="description-wrapper black">
				Twice the speed. Twice the storage.
			</div>

			<div className="price-wrapper grey">
				From $999.
			</div>

			<div className="links-wrapper">
				<ul>
					{this.props.learn}
                    {this.props.buy}
				</ul> 
			</div>
		</div>
	</section>
	<section className="third-hightlight-wrapper">
		<div className="container">
			<div className="title-wraper bold">
				{this.props.title3}
			</div> 

			<div className="description-wrapper">
				Pro cameras. Pro display. Pro performance.
			</div>

			<div className="price-wrapper">
				From $24.95/mo. or $599 with trade‑in.
			</div>

			<div className="links-wrapper">
				<ul>
					{this.props.learn}
                    {this.props.buy}
				</ul> 
			</div>
		</div>
	</section>
      </div>
    )
  }
}
