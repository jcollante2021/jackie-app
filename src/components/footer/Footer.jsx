import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="localidad">
                <RoomIcon/><p>Buenos Aires, Argentina</p> 
            </div>
            <div className="redes">
                <a href="https://www.instagram.com/jackie_jewelry21/"><InstagramIcon/></a>
                <FacebookIcon/>
                <TwitterIcon/>
                <YouTubeIcon/>
            </div>
            <div className="derechos">
                <p>Copyright Jackie Jewelry - 2021. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario">ingrese aquí</a></p>
                <p>Created by @JoseLeoCollante</p>
            </div>
        </div>
    )
}
