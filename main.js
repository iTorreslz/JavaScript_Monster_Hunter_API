let list = document.querySelector("#ul");

window.onload = function () {
    fetch("mh.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la información de los monstruos');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(monster => {
                let li = document.createElement("li");
                li.textContent = monster.id + " - " + monster.name + " is a " + monster.species + ".";
                li.className = "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out";
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Se produjo un error al obtener la información de los monstruos:', error);
        });
};