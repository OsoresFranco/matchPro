export interface Match {
  id: number,
  fase: string,
  fecha: string,
  hora: string,
  estadio: string,
  equipo1: {
    nombre: string,
    bandera: string,
  },
  equipo2: {
    nombre: string,
    bandera: string
  }
}
