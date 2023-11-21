(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  
  const materialTemplate = document.querySelector("#material-template");
  const materialList = document.querySelector("#material-list");

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



  const materialListData = [
    {
      heading: "Charging pod",
      description:
      "Charge for 10 min and use for 10 hrs",
    },
    {
      heading: "Volume up Button",
      description:
      "Press once to increase volume and and press twice to receive incoming call",
    },
    {
      heading: "Volume down Button",
      description:
      "Press once to decrease volume",
    },
    {
      heading: "Sweat-free eartips",
      description:
      "Sweat free eartips for all usage",
    },
    {
      heading: "Glossy-finish body",
      description:
      "Glossy finishing, which looks nice and smooth",
    },
  ];

  //functions
  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfoBoxes() {
   

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

  
  function loadMaterialInfo() {
    // AJAX CALL
    

    
    materialListData.forEach((material) => {
      // clone the template - copy of the template
      const clone = materialTemplate.content.cloneNode(true);

      // populating the template - HEADING
      const materialHeading = clone.querySelector(".material-heading");
      materialHeading.textContent = material.heading;

      //  Populating DESCRIPTION
      const materialDescription = clone.querySelector(".material-description");
      materialDescription.textContent = material.description;

      
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


// spinner
document.addEventListener("DOMContentLoaded", function () {
  // Show the spinner on page load
  document.getElementById("spinner-container").style.display = "flex";

  setTimeout(function () {
    document.getElementById("spinner-container").style.display = "none";
  }, 30);
});
