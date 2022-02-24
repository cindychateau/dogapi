async function perritoAsync() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJson = await response.json();
    var img = responseJson.message;
    console.log(img);
    var containerImg = document.querySelector('.containerImg');
    containerImg.innerHTML = `<img src='${img}'>`;
}

function perritoPromesa() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            var img = responseJson.message;
            console.log(img);
            var containerImg = document.querySelector('.containerImg');
            //containerImg.innerHTML = `<img src='${img}'>`;
            containerImg.innerHTML = "<img src='" +img+ "'>";
        });
}

perritoPromesa();