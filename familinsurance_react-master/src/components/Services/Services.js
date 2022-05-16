import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Services() {
  const [serviceList, setServiceList] = useState([]);

  // const services = ["tarjeta de crédito", "CDT"];
  const services = [{Id:'', Nombre: '', Imagen: '', Descripcion: '' ,Categoria:''}];
  {/*fetch("http://localhost:5000/",{
      method: "GET",
      headers:{"Content-Type":"application/json"},
      body:JSON. stringify(services)
  }).then( ()=>{
    console.log("se ingreso un servicio ")
  })*/}

  useEffect(() => {
    console.log(`pintando componente servicios`);
    getServices();
  }, []);

  const getServices = async () => {
    const URL = "http://localhost:5000/";
    const services = await fetch(URL);
    const servicesList_ = await services.json();
    setServiceList(servicesList_);
  };
  return (
    <div>
     {/* <ul>
        {serviceList.filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
          <li key={aseguradora}>
            <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
          </li>
        ))}
        </ul>*/}
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
                <div class="col-lg-4 col-md-6 col-12">
                   {serviceList.filter(x => x.id == 1).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}
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

                </div>

                <div class="col-lg-4 col-md-6 col-12 item">
                {serviceList.filter(x => x.id == 2).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}
                 {/*  <a href="chatea-nosotros.html" class="iitem item-style">
                    <div class="iitem-icon">
                      <img src='/img/icons/chat.png' width="75" height="75" alt="PathSoft" />
                      {/*<i class="material-icons material-icons-outlined md-48">support_agent</i> 
                    </div>
                    <div class="iitem-icon-bg">
                      <i class="material-icons material-icons-outlined">support_agent</i>
                    </div>
                    <h2 class="iitem-heading item-heading-large">Chatea con Nosotros</h2>
                    <div class="iitem-desc"> Accede a nuestros canales de atencion con facilidad   </div>
                  </a>
                   */}
                </div>
                <div class="col-lg-4 col-md-12 col-12 item">
                {serviceList.filter(x => x.id == 3).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

                 {/* <a href="facturaelec.html" class="iitem item-style">
                    <div class="iitem-icon">
                      <img src='/img/icons/factura.png' width="75" height="75" alt="PathSoft" />
                      {/*	<i class="material-icons material-icons-outlined md-48">cloud_download</i> 
                    </div>
                    <div class="iitem-icon-bg">
                      <i class="material-icons material-icons-outlined">cloud_download</i>
                    </div>
                    <h2 class="iitem-heading item-heading-large">Factura Electrónica</h2>
                    <div class="iitem-desc">Descarga tu factura electronica y realiza tu pago.</div>
                  </a>*/}
                </div>
                <div class="col-lg-4 col-md-6 col-12 item ">
                {serviceList.filter(x => x.id == 4).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

                  {/* <a href="ExperienciaFamilin.html" class="iitem item-style">
                    <div class="iitem-icon">
                      <img src='/img/icons/experiencia.png' width="75" height="75" alt="PathSoft" />
                      {/*<i class="material-icons material-icons-outlined md-48">laptop_mac</i>
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
                   */}
                </div>

                <div class="col-lg-4 col-md-6 col-12 item">
                {serviceList.filter(x => x.id == 5).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

                 {/* <a href="E-cliente.html" class="iitem item-style">
                    <div class="iitem-icon">
                      <img src='/img/icons/web.png' width="70" height="70" alt="PathSoft" />
                      {/*<i class="material-icons material-icons-outlined md-48">phone_android</i> 
                    </div>
                    <div class="iitem-icon-bg">
                      <i class="material-icons material-icons-outlined">phone_android</i>
                    </div>
                    <h2 class="iitem-heading item-heading-large">E - Cliente</h2>
                    <div class="iitem-desc">Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</div>
                  </a>
                   */}
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
                {serviceList.filter(x => x.id == 6).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}
               {/* <a href="centros-medicos.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/salud.png' width="80" height="80" alt="PathSoft" />
                    {/* <i class="material-icons material-icons-outlined md-48">corporate_fare</i>
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">corporate_fare</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Centro médicos Familinsurance</h2>
                  <div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                </a>*/}
              </div> 
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 7).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}
              {/*  <a href="directorio-medico.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/directorio.png' width="75" height="75" alt="PathSoft" />
                    {/*<i class="material-icons material-icons-outlined md-48">support_agent</i> 
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">support_agent</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Directorio médico</h2>
                  <div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it.</div>
                  </a>*/}
              </div>
              <div class="col-lg-4 col-md-12 col-12 item">
              {serviceList.filter(x => x.id == 8).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               {/* <a href="reembolsos-autorizaciones.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/reembolso.png' width="75" height="75" alt="PathSoft" />
                    {/*	<i class="material-icons material-icons-outlined md-48">cloud_download</i>  
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">cloud_download</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Reembolsos y Autorizaciones</h2>
                  <div class="iitem-desc">There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised word.</div>
                </a>*/}
              </div>
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 9).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

              {/*  <a href="especialistas.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/cell.png' width="75" height="75" alt="PathSoft" />
                    {/*<i class="material-icons material-icons-outlined md-48">laptop_mac</i> 
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">laptop_mac</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Especialistas virtuales</h2>
                  <div class="iitem-desc">Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</div>
                </a>*/}
              </div>
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 10).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               {/* <a href="orientacion.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/call2.png' width="75" height="75" alt="PathSoft" />
                    {/*<i class="material-icons material-icons-outlined md-48">phone_android</i>
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">phone_android</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Orientación en casa</h2>
                  <div class="iitem-desc">Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.</div>
                </a>*/}
              </div>
              <div class="col-lg-4 col-md-12 col-12 item">
              {serviceList.filter(x => x.id == 11).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

              {/*  <a href="centro-ayuda.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/ayuda.png' width="75" height="75" alt="PathSoft" />
                    {/*	<i class="material-icons material-icons-outlined md-48">tv</i>
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">tv</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Centro de Ayudas Diagnósticas</h2>
                  <div class="iitem-desc">Cdictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.</div>
                </a>*/}
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
              {serviceList.filter(x => x.id == 12).filter(x=>x.Categoria ==='Autos').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               {/* <a href="E-car.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/cell.png' width="80" height="80" alt="PathSoft" />
                    {/* <i class="material-icons material-icons-outlined md-48">corporate_fare</i>
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">corporate_fare</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Familinsurance E - Card Autos</h2>
                  <div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                </a>*/}
              </div>
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 13).filter(x=>x.Categoria ==='Autos').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

              {/*  <a href="caso-accidente.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/car.png' width="100" height="100" alt="PathSoft" />
                    {/*<i class="material-icons material-icons-outlined md-48">support_agent</i>  
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">support_agent</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">¿Qué hacer en caso de accidente?</h2>
                  <div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it.</div>
                </a>*/}
              </div>
              <div class="col-lg-4 col-md-12 col-12 item">
              {serviceList.filter(x => x.id == 14).filter(x=>x.Categoria ==='Autos').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               {/* <a href="talleres.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/taller.png' width="75" height="75" alt="PathSoft" />
                    {/*	<i class="material-icons material-icons-outlined md-48">cloud_download</i> 
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">cloud_download</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Talleres Familinsurance</h2>
                  <div class="iitem-desc">There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised word.</div>
                </a>*/}
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
              {serviceList.filter(x => x.id == 15).filter(x=>x.Categoria ==='Hogar').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               {/* <a href="peritacion.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/home.png' width="80" height="80" alt="PathSoft" />
                    {/* <i class="material-icons material-icons-outlined md-48">corporate_fare</i> 
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">corporate_fare</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Peritación Digital</h2>
                  <div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                </a>*/}
              </div>
              <div class="col-lg-4 col-md-6 col-12 item seguro-home2">
              {serviceList.filter(x => x.id == 16).filter(x=>x.Categoria ==='Hogar').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               {/* <a href="E-car-hogar.html" class="iitem item-style">
                  <div class="iitem-icon">
                    <img src='/img/icons/home2.png' width="75" height="75" alt="PathSoft" />
                    {/*<i class="material-icons material-icons-outlined md-48">support_agent</i> 
                  </div>
                  <div class="iitem-icon-bg">
                    <i class="material-icons material-icons-outlined">support_agent</i>
                  </div>
                  <h2 class="iitem-heading item-heading-large">Familinsurance E-Card Hogar</h2>
                  <div class="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it.</div>
                </a>*/}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
