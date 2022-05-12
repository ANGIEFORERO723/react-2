import React, { Component } from 'react'
import Card from '../Card/Card'


export default class contenedores extends Component {
	services = [{ title: '', image: '', description: '' }, { title: '', image: '', description: '' }];

	render() {
		return (
			<div class="section">
				<div class="container">
					<div class="row items">
						<div class="col-12">
							<div class="section-heading heading-center">
								<div class="section-subheading">Áreas que atendemos</div>
								<h1>Nuestros Servicios</h1>
							</div>
						</div>
						<div class="col-12">
							<div class="section-heading heading-center">
								<h4>Todos los clientes cuentan con acceso a los siguientes servicios</h4>
							</div>
						</div>

						{/*	<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
									in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div> */}

					</div>

					<div class="section">
						<div class="container">
							<div class="row items justify-content-center">
								{serviceList.map((item, perro) => (
									<li key={perro}>
										<Card image={item.image} title={item.name} description={item.description} />
									</li>
								))}
								<div class="col-lg-4 col-md-6 col-12 item">

									{/*<a href="chatea-nosotros.html" class="iitem item-style">
								<div class="iitem-icon">
                                    <img src= {require('../../img/icons/credit-card.png')} width="75" height="75" alt="PathSoft"/>
								{<i class="material-icons material-icons-outlined md-48">support_agent</i> }
								</div>
								<div class="iitem-icon-bg">
									<i class="material-icons material-icons-outlined">support_agent</i>
								</div>
								<h2 class="iitem-heading item-heading-large">pagos</h2>
								<div class="iitem-desc"></div>
							</a>*/}
									<Card image="/logo192.png" title="pagos" description="Pague sus productos y consulte el historial de sus transaciones con facilidad." />
									<Card image="/logo192.png" title="pagos" description="Pague sus productos y consulte el historial de sus transaciones con facilidad." />
									<Card image="/logo192.png" title="pagos" description="Pague sus productos y consulte el historial de sus transaciones con facilidad." />
									<Card image="/logo192.png" title="pagos" description="Pague sus productos y consulte el historial de sus transaciones con facilidad." />
								</div>

								<div class="col-lg-4 col-md-6 col-12 item">


									<a href="chatea-nosotros.html" class="iitem item-style">
										<div class="iitem-icon">
											<img src={require('../../img/icons/chat.png')} width="75" height="75" alt="PathSoft" />
											{/*<i class="material-icons material-icons-outlined md-48">support_agent</i> */}
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">support_agent</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Chatea con Nosotros</h2>
										<div class="iitem-desc"> Accede a nuestros canales de atencion con facilidad   </div>
									</a>
								</div>
								<div class="col-lg-4 col-md-12 col-12 item">

									<a href="facturaelec.html" class="iitem item-style">
										<div class="iitem-icon">
											<img src={require('../../img/icons/factura.png')} width="75" height="75" alt="PathSoft" />
											{/*	<i class="material-icons material-icons-outlined md-48">cloud_download</i> */}
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">cloud_download</i>
										</div>
										<h2 class="iitem-heading item-heading-large">Factura Electrónica</h2>
										<div class="iitem-desc">Descarga tu factura electronica y realiza tu pago.</div>
									</a>
								</div>
								<div class="col-lg-4 col-md-6 col-12 item ">

									<a href="ExperienciaFamilin.html" class="iitem item-style">
										<div class="iitem-icon">
											<img src={require('../../img/icons/experiencia.png')} width="75" height="75" alt="PathSoft" />
											{/*<i class="material-icons material-icons-outlined md-48">laptop_mac</i>*/}
										</div>
										<dir /> <dir />
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">laptop_mac</i>
										</div>
										<div class="row items justify-content-center"></div>
										<dir /> <dir />
										<h2 class="iitem-heading item-heading-large">Experiencia Familinsurance</h2>
										<div class="iitem-desc">Dejamos tus comentarios y tu experiencia vivida en nuestro servicio</div>
									</a>
								</div>

								<div class="col-lg-4 col-md-6 col-12 item">

									<a href="E-cliente.html" class="iitem item-style">
										<div class="iitem-icon">
											<img src={require('../../img/icons/web.png')} width="70" height="70" alt="PathSoft" />
											{/*<i class="material-icons material-icons-outlined md-48">phone_android</i> */}
										</div>
										<div class="iitem-icon-bg">
											<i class="material-icons material-icons-outlined">phone_android</i>
										</div>
										<h2 class="iitem-heading item-heading-large">E - Cliente</h2>
										<div class="iitem-desc">Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div class="section">
					<div class="container">
						<div class="row items">
							<div class="col-12">
								<div class="section-heading heading-center">
									<h4>Servicios del Seguro de Salud Familinsurance</h4>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item">


								<a href="centros-medicos.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/salud.png')} width="80" height="80" alt="PathSoft" />
										{/* <i class="material-icons material-icons-outlined md-48">corporate_fare</i> */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">corporate_fare</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Centro médicos Familinsurance</h2>
									<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item">


								<a href="directorio-medico.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/directorio.png')} width="75" height="75" alt="PathSoft" />
										{/*<i class="material-icons material-icons-outlined md-48">support_agent</i>  */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">support_agent</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Directorio médico</h2>
									<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classical Latin literature from 45 BC, making it.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-12 col-12 item">

								<a href="reembolsos-autorizaciones.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/reembolso.png')} width="75" height="75" alt="PathSoft" />
										{/*	<i class="material-icons material-icons-outlined md-48">cloud_download</i>  */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">cloud_download</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Reembolsos y Autorizaciones</h2>
									<div class="iitem-desc">There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration in some form, by injected humour, or randomised word.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item">

								<a href="especialistas.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/cell.png')} width="75" height="75" alt="PathSoft" />
										{/*<i class="material-icons material-icons-outlined md-48">laptop_mac</i> */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">laptop_mac</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Especialistas virtuales</h2>
									<div class="iitem-desc">Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item">

								<a href="orientacion.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/call2.png')} width="75" height="75" alt="PathSoft" />
										{/*<i class="material-icons material-icons-outlined md-48">phone_android</i> */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">phone_android</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Orientación en casa</h2>
									<div class="iitem-desc">Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-12 col-12 item">

								<a href="centro-ayuda.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/ayuda.png')} width="75" height="75" alt="PathSoft" />
										{/*	<i class="material-icons material-icons-outlined md-48">tv</i> */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">tv</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Centro de Ayudas Diagnósticas</h2>
									<div class="iitem-desc">Cdictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</div>
								</a>
							</div>
						</div>
					</div>
				</div>


				<div class="section">
					<div class="container">
						<div class="row items">
							<div class="col-12">
								<div class="section-heading heading-center">
									<h4>Servicios del Seguro de Autos</h4>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item">

								<a href="E-car.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/cell.png')} width="80" height="80" alt="PathSoft" />
										{/* <i class="material-icons material-icons-outlined md-48">corporate_fare</i> */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">corporate_fare</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Familinsurance E - Card Autos</h2>
									<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item">

								<a href="caso-accidente.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/car.png')} width="100" height="100" alt="PathSoft" />
										{/*<i class="material-icons material-icons-outlined md-48">support_agent</i>  */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">support_agent</i>
									</div>
									<h2 class="iitem-heading item-heading-large">¿Qué hacer en caso de accidente?</h2>
									<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classical Latin literature from 45 BC, making it.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-12 col-12 item">

								<a href="talleres.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/taller.png')} width="75" height="75" alt="PathSoft" />
										{/*	<i class="material-icons material-icons-outlined md-48">cloud_download</i>  */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">cloud_download</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Talleres Familinsurance</h2>
									<div class="iitem-desc">There are many variations of passages of Lorem Ipsum available, but the majority
										have suffered alteration in some form, by injected humour, or randomised word.</div>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="section">
					<div class="container">
						<div class="row items">
							<div class="col-12">
								<div class="section-heading heading-center">
									<h4>Servicios del Seguro de Hogar</h4>
								</div>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item seguro-home">

								<a href="peritacion.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/home.png')} width="80" height="80" alt="PathSoft" />
										{/* <i class="material-icons material-icons-outlined md-48">corporate_fare</i> */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">corporate_fare</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Peritación Digital</h2>
									<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
								</a>
							</div>
							<div class="col-lg-4 col-md-6 col-12 item seguro-home2">

								<a href="E-car-hogar.html" class="iitem item-style">
									<div class="iitem-icon">
										<img src={require('../../img/icons/home2.png')} width="75" height="75" alt="PathSoft" />
										{/*<i class="material-icons material-icons-outlined md-48">support_agent</i>  */}
									</div>
									<div class="iitem-icon-bg">
										<i class="material-icons material-icons-outlined">support_agent</i>
									</div>
									<h2 class="iitem-heading item-heading-large">Familinsurance E-Card Hogar</h2>
									<div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
										in a piece of classical Latin literature from 45 BC, making it.</div>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>

		)
	}
}


