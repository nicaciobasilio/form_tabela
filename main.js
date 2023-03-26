const product = document.getElementById('nome');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const radios = document.querySelectorAll('input[type="radio"]');
const selects = document.querySelector('select');
const button = document.getElementById('botao');
const table = document.getElementById('table');
const span = document.querySelector('span');
const icon = document.querySelector('i');


const datas = [];

// Pega os itens do formulário e coloca em um array
button.onclick = function() {
    icon.classList.add('d-none');
    span.classList.remove('d-none');
    datas.push(product.value);

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            datas.push(checkbox.value);
        }
    });
    
    radios.forEach((radio) => {
        if (radio.checked) {
            datas.push(radio.value);
        }
    });

    datas.push(selects.value);

    if (datas.length > 4) {
        alert('Selecione apenas um tipo de produto!');
        datas.splice(0, datas.length);
        icon.classList.remove('d-none');
        span.classList.add('d-none');
    } 

    else if (datas.length < 4) {
        alert('Selecione os campos faltantes');
        datas.splice(0, datas.length);
        icon.classList.remove('d-none');
        span.classList.add('d-none');
    } 
    
    // Limpa os campos e adiciona os valores na tabela
    else if (datas.length = 4) {
        setTimeout(function() {
            icon.classList.remove('d-none');
            span.classList.add('d-none');

            product.value='';
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false; 
            });
            radios.forEach((radio) => {
                radio.checked = false;
            });
            
            const novaLinha = table.insertRow();
            datas.forEach((valor, indice) => {
                const novaCelula = novaLinha.insertCell(indice); 
                novaCelula.textContent = valor;
            });
            
            datas.splice(0, datas.length);
        }, 500)
    }
}


// Impede de carregar a página
button.addEventListener("click", function(event){
    event.preventDefault();

})

