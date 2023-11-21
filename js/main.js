(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  // materials by ekam
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/infoboxes"

  const infoBoxes = [
    {
      title: "Noise-cancelling microphones",
      text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience.",
      image: "images/ear-piece.jpg",
    },
    {
      title: "Comfortable fit",
      text: "Three pairs of ultra comfortable silicone tips are included. The tips create an acoustic seal that blocks outside audio and secures the earbuds in place.",
      image: "images/ear-piece.jpg",
    },
    {
      title: "360 AUDIO",
      text: "360 Audio places sound all around you, while Dolby Head Tracking™ technology delivers an incredible three-dimensional listening experience.",
      image: "images/ear-piece.jpg",
    },
    {
      title: "Ultra Fast Charging",
      text: "Charge your earbuds in 30 minutes or less with our hyper charging technology.",
      image: "images/ear-piece.jpg",
    },
  ];

  //This information needs to be removed then pulled with an AJAX Call using the Fetch API
  //this is the api url https://swiftpixel.com/earbud/api/materials"

  const materialListData = [
    {
      heading: "Precision-Crafted Polymers",
      description:
        "Our earbuds are meticulously molded from high-quality plastics, ensuring a blend of elegance, comfort, and resilience that's second to none.",
    },
    {
      heading: "Luxurious Silicone Harmony",
      description:
        "Our uniquely engineered ear tips are cocooned in plush silicone, delivering an opulent embrace for your ears, ensuring an unrivaled fit and exquisite audio experience.",
    },
    {
      heading: "Rubberized Cables",
      description:
        "Experience the unparalleled freedom of movement with our flexible rubber cables that promise durability without compromise.",
    },
    {
      heading: "Enhanced Comfort Sensors",
      description:
        "A touch of magic in the form of built-in microphones and sensors empowers your earbuds to obey your every command, making your audio journey seamless and enchanting.",
    },
    {
      heading: "Artistic Mesh Guard",
      description:
        "Shielded by artful mesh screens, our speakers remain untarnished, keeping your listening experience pristine.",
    },
  ];

  //functions
  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfoBoxes() {
    //make AJAX call here

    //   infoBoxes.forEach((infoBox, index) => {
    //     let selected = document.querySelector(`#hotspot-${index+1}`);

    //     const titleElement = document.createElement('h2');
    //     titleElement.textContent = infoBox.title;

    //     const textElement = document.createElement('p');
    //     textElement.textContent = infoBox.text;

    //     selected.appendChild(titleElement);
    //     selected.appendChild(textElement);
    //   });
    // }

    // SIDHU MOOSA
    fetch("https://swiftpixel.com/earbud/api/infoboxes")
      .then((response) => response.json())
      .then((infoBoxes) => {
        console.log(infoBoxes);

        infoBoxes.forEach((infoBox, index) => {
          let selected = document.querySelector(`#hotspot-${index + 1}`);

          const titleElement = document.createElement("h3");
          titleElement.textContent = infoBox.heading;

          const imgElement = document.createElement("img");
          imgElement.src = `images/${infoBox.thumbnail}`;

          const textElement = document.createElement("p");
          textElement.textContent = infoBox.description;

          selected.appendChild(imgElement);
          selected.appendChild(titleElement);
          selected.appendChild(textElement);
        });
      })
      .catch((error) => console.error(error)); //catch and report any errors
  }

  loadInfoBoxes();

  // function showInfo() {
  //   let selected = document.querySelector(`#${this.slot}`);
  //   gsap.to(selected, 1, { autoAlpha: 1 });
  // }

  // function hideInfo() {
  //   let selected = document.querySelector(`#${this.slot}`);
  //   gsap.to(selected, 1, { autoAlpha: 0 });
  // }

  // materials-sidhumoosewala
  function loadMaterialInfo() {
    // AJAX CALL
    // https://swiftpixel.com/earbud/api/materials"

    // take every entry in the materialListData then put it in the material li
    materialListData.forEach((material) => {
      // clone the template - copy of the template
      const clone = materialTemplate.content.cloneNode(true);

      // populating the template - HEADING
      const materialHeading = clone.querySelector(".material-heading");
      materialHeading.textContent = material.heading;

      //  Populating DESCRIPTION
      const materialDescription = clone.querySelector(".material-description");
      materialDescription.textContent = material.description;

      // now adding back to the list
      // append the populated template to the list
      materialList.appendChild(clone);
    });
  }
  loadMaterialInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();

//  jera fetch ala akshpreet
// document.addEventListener("DOMContentLoaded", function () {
//   fetchData();
// });

// function fetchData() {
//   fetch("https://swiftpixel.com/earbud/api/infoboxes/")
//     .then((response) => response.json())
//     .then((data) => displayData(data))
//     .catch((error) => console.error("Error fetching data:", error));
// }

// function displayData(data) {
//   console.log(data);

//   if (Array.isArray(data)) {
//     const listContainer = document.getElementById("jsonList");

//     data.forEach((item) => {
//       const listItem = document.createElement("div");
//       listItem.innerHTML = `
//               <h2>${item.heading}</h2>
//               <p>${item.description}</p>
//               <img src="images/${item.thumbnail}" alt="${item.heading}" style="max-width: 100px; height: auto;">
//           `;

//       listContainer.appendChild(listItem);
//     });
//   } else {
//     console.error("Invalid data format. Expected an array.");
//   }
// }

// spinner
document.addEventListener("DOMContentLoaded", function () {
  // Show the spinner on page load
  document.getElementById("spinner-container").style.display = "flex";

  setTimeout(function () {
    document.getElementById("spinner-container").style.display = "none";
  }, 30);
});
