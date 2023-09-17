const dogImageContainer = document.getElementById("dog-image-container");
const fetchDogButton = document.getElementById("fetch-dog-btn");

fetchDogButton.addEventListener("click", fetchRandomDogImage);

function fetchRandomDogImage() {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
    
      const img = document.createElement("img");
      img.src = data.message;
      dogImageContainer.innerHTML = "";
      dogImageContainer.appendChild(img);
    })
    .catch((error) => {
      console.error("There was a problem fetching the dog image:", error);
    });
}


fetchRandomDogImage();
