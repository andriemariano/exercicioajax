var ajax; // Declare a variável ajax no escopo global

// Função para carregar mais imagens
function carregarImagens() {
  
    ajax = new XMLHttpRequest(); // Remova a palavra 'var' para tornar a variável global
    ajax.open("GET", "imagens.json", true);
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200) {
            var divImagens = document.getElementById("imagens");
            var images = JSON.parse(ajax.responseText);

            for (const image of images.animals) {
                var img = document.createElement("img");
                img.src = image.imagemUrl;
                img.alt = image.name;
                divImagens.appendChild(img);
            }
        }
    };
    ajax.send();
}

// Detecta quando o usuário chegou no final da página e carrega mais imagens
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        carregarImagens();
    }
};

// Chame a função para carregar imagens quando a página for carregada
window.onload = function() {
    carregarImagens();
};
