const divSaludo = document.getElementById('saludo');


const getName = async() =>{
    const url = 'http://localhost:8080/login';
    const nombre = await fetch(url); 
    const nombreJSON = await nombre.json()

    return nombreJSON;
}

const Saludar = async(divSaludo) =>{
    const nombre = await getName(); 
    divSaludo.innerHTML = `
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title animate__animated animate__fadeInLeftBig">Bienvenido ${nombre.nombre}</h3>
                                    <button id="log-out-button" class="animate__animated animate__fadeInLeftBig btn btn-secondary">
                                        <a href="/productos/logout">Log Out</>
                                </button>
                                </div>
                            </div>
    `
}
Saludar(divSaludo);


