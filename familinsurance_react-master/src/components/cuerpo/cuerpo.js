import React, { Component } from 'react'

export default class Cuerpo extends Component {
  render() {
    return (
        <nav className="bread-crumbs">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<ul className="bread-crumbs-list">
								<li>
									<a href="index.html">Inicio</a>
									<i className="material-icons md-18">chevron_right</i>
								</li>
								<li><a href="#!">Servicios</a></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
    )
  }
}


