
// Define your project data directly as a JavaScript object
var projectData = [
  {
    "Title": "Blanc' Home - 2023",
    "Images": [
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1dJK9z60DNiXw9Lac95qNe7mjG4-OVLXl",
      "https://drive.google.com/uc?id=1F9ZSaG_JwZpCAWsZ_SwhHvADiU7Xrbxm",  
      "https://drive.google.com/uc?id=1upwsw03rDynVYtAKlQNezDy2EP1lwghx" 
    ]
  },
  {
    "Title": "Project 2",
    "Images": [
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6"
    ]
  },
  {
    "Title": "Project 3",
    "Images": [
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6",
      "https://drive.google.com/uc?id=1ey4p511hRKeWQfOywYMCuO0cne3WKVz6"
    ]
    }
    // Add more project entries as needed
  ];
  
  // Function to generate project HTML dynamically
  function generateProjectHTML(data) {
    var projectContainer = document.getElementById("project-container");

    data.forEach(function (project) {
      var projectItem = document.createElement("div");
      projectItem.className = "project";

      var titleParagraph = document.createElement("p");
      titleParagraph.className = "text-title text-center";
      titleParagraph.textContent = "Project: " + project.Title;

      var imagesContainer = document.createElement("div");
      imagesContainer.className = "image-grid";

      project.Images.forEach(function (imageSrc) {
        var img = document.createElement("img");
        img.src = imageSrc;
        img.alt = project.Title;
        img.onclick = function () {
          openPopup(imageSrc);
        };
        imagesContainer.appendChild(img);
      });

      projectItem.appendChild(titleParagraph);
      projectItem.appendChild(imagesContainer);
      projectContainer.appendChild(projectItem);
    });
  }

  // Function to open the popup with the clicked image
  function openPopup(imageSrc) {
    var popup = document.getElementById("image-popup");
    var popupImg = document.getElementById("popup-image");
    popup.style.display = "block";
    popupImg.src = imageSrc;
  }

  // Function to close the popup
  function closePopup() {
    var popup = document.getElementById("image-popup");
    popup.style.display = "none";
  }

  // Generate HTML using the predefined project data
  generateProjectHTML(projectData);
