class Contacto{
    constructor(name, number, year){
        this.name = name;
        this.number = number;
        this.year = year;
    }
}

class UI{
    agregarContacto(contacto){
        const agendalista = document.getElementById('agenda-lista');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        <strong>Nombre de Contacto</strong>: ${contacto.name}
                        <strong>Numero de Contacto</strong>: ${contacto.number}
                        <strong>Año de registro</strong>: ${contacto.year}
                        <a href="#" class="btn btn-danger" name="eliminar">Eliminar</a>
                    </div>
                </div>
            `;

        agendalista.appendChild(elemento);
        //this.resetForm();
    }
    resetForm(){
        document.getElementById('agenda-form').reset();

    }

    eliminarContacto(elemento){
       // document.getElementsByName(eliminar);
        if(elemento.name === 'eliminar'){
            elemento.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Producto eliminado satisfactoriamente', 'info')
        }

    }
    mostrarMensaje(mensaje, cssClass){
        const mens = document.createElement('div');
        mens.className = `alert alert-${cssClass} mt-4`;
        mens.appendChild(document.createTextNode(mensaje));
        // Mostrando en el DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(mens, App);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// Eventos del DOM
document.getElementById('agenda-form')
    .addEventListener('submit', function(e){
        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const year = document.getElementById('year').value;


        const contacto = new Contacto(name, number, year);
        const ui = new UI();
        // Validar
        if(name === '' || number ==='' || year === ''){
            return ui.mostrarMensaje('Complete los campos', 'danger');
        }
        ui.agregarContacto(contacto);
        ui.resetForm();
        ui.mostrarMensaje('Contacto Agregado Satisfactoriamente', 'success');
        e.preventDefault();
    });

document.getElementById('agenda-lista').addEventListener('click', function(e){
    // console.log(e.target);
    const ui = new UI();
    ui.eliminarContacto(e.target);
});
