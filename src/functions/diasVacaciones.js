const diasVacaciones = (años,promedio) => {
    switch (true) {
      case años < 6 && años>0:
        return 15;
      case años > 5 && años < 10:
        return 20;
      case años >= 10:
        return 30;
      default:
        return "rellenar todos los datos anteriores";
    }
  };
  
  export default diasVacaciones;
  