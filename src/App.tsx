import './App.css';
import programacion from './assets/programacion.webp';
interface TarjetaPersonalProps {
  /** Nombre completo a mostrar */
  nombre: string;
  /** Rol o descripción corta */
  descripcion: string;
  /** URL de la imagen de perfil */
  imagen: string;
}

function TarjetaPersonal({ nombre, descripcion, imagen }: TarjetaPersonalProps) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} className="tarjeta-imagen" />
      <h1 className="tarjeta-nombre">{nombre}</h1>
      <p className="tarjeta-descripcion">{descripcion}</p>
      <div className="tarjeta-info">
        <p>📧 anaquiroga@isft220.edu.ar</p>
        <p>💻 github.com/AnaPaulaQG</p>
        <p>🎓 ISFT Nº220 </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <TarjetaPersonal
      nombre="Ana Paula Quiroga García"
      descripcion="Estudiante de Desarrollo de Software | En proceso"
      imagen={programacion}
    />
  );
}
