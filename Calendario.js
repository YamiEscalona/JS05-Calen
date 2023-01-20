const evaluarDia = () => {
    let day = document.getElementById("Día").value;
    let month = document.getElementById("Mes").value;
    let year = document.getElementById("Año").value;
    return [year, month, day];
  };

  const trabajoONo = () => {
    const [year, month, day] = evaluarDia();
    let date = new Date(year, month, day).getDay();
    switch (date) {
      case 0:
        return (document.getElementById("result").innerHTML =
          "Domingo no se trabaja");
      case 1:
        return (document.getElementById("result").innerHTML =
          "Lunes se trabaja");
      case 2:
        return (document.getElementById("result").innerHTML =
          "Martes se trabaja ");
      case 3:
        return (document.getElementById("result").innerHTML =
          "Miércoles se trabaja ");
      case 4:
        return (document.getElementById("result").innerHTML =
          "Jueves se trabaja ");
      case 5:
        return (document.getElementById("result").innerHTML =
          "Viernes se trabaja");
      case 6:
        return (document.getElementById("result").innerHTML =
          "Sábado no se trabaja");
    }
};
