
    
    const textos = ["HOLA", "Que hacen", "Re tarde es"];
    let index = 0;

    function cambiarTexto() {
      index = (index + 1) % textos.length;
      document.getElementById("carousel-text-line").innerText = textos[index];
    }

    setInterval(cambiarTexto, 2000);
