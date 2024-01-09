var contador = 0;

        function incrementar() {
            contador++;
            document.getElementById('contador').innerHTML = contador;
        }

        function decrementar() {
            if (contador > 0) {
                contador--;
                document.getElementById('contador').innerHTML = contador;
            }
        }