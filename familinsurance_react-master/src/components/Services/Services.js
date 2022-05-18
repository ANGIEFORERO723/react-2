import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Services() {
  const [serviceList, setServiceList] = useState([]);

  // const services = ["tarjeta de crédito", "CDT"];
  const services = [{Id:'', Nombre: '', Imagen: '', Descripcion: '' ,Categoria:''}];
 

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
     <br/> <br/> <br/>
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
                

                </div>

                <div class="col-lg-4 col-md-6 col-12 item">
                {serviceList.filter(x => x.id == 2).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}
                
                </div>
                <div class="col-lg-4 col-md-12 col-12 item">
                {serviceList.filter(x => x.id == 3).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

                 
                </div>
                <div class="col-lg-4 col-md-6 col-12 item ">
                {serviceList.filter(x => x.id == 4).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

                
                </div>

                <div class="col-lg-4 col-md-6 col-12 item">
                {serviceList.filter(x => x.id == 5).filter(x=>x.Categoria ==='Servicios principales').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

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
            
              </div> 
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 7).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}
              
              </div>
              <div class="col-lg-4 col-md-12 col-12 item">
              {serviceList.filter(x => x.id == 8).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

        
              </div>
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 9).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

              </div>
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 10).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               
              </div>
              <div class="col-lg-4 col-md-12 col-12 item">
              {serviceList.filter(x => x.id == 11).filter(x=>x.Categoria ==='Salud').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

             
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

              
              </div>
              <div class="col-lg-4 col-md-6 col-12 item">
              {serviceList.filter(x => x.id == 13).filter(x=>x.Categoria ==='Autos').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

              </div>
              <div class="col-lg-4 col-md-12 col-12 item">
              {serviceList.filter(x => x.id == 14).filter(x=>x.Categoria ==='Autos').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

             
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="container">
            <div class="row items">
              <div class="col-12">
                <div class="section-heading heading-center">
                  <h4>Servicios del seguro de Hogar</h4>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-12 item seguro-home">
              {serviceList.filter(x => x.id == 15).filter(x=>x.Categoria ==='Hogar').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

              </div>
              <div class="col-lg-4 col-md-6 col-12 item seguro-home2">
              {serviceList.filter(x => x.id == 16).filter(x=>x.Categoria ==='Hogar').map((item, aseguradora) => (
                   <div key={aseguradora}>
                   <Card Imagen={item.Imagen} Nombre={item.Nombre} Descripcion={item.Descripcion} />
                   </div>
                     ))}

               
              </div>
            </div>
          </div>

        </div>
      </div>
  
  );
}
