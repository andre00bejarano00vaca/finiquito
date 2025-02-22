import dayjs from "dayjs";

const calcularDiferenciaEnDias = (inicio, fin) => {
  const fecha1 = dayjs(inicio);
  const fecha2 = dayjs(fin);
  return fecha2.diff(fecha1, "day");
};

export default calcularDiferenciaEnDias;