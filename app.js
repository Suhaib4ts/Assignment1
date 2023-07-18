var Cars = {
    Honda: {
      Civic: {
        color: "Red",
        Price: 8000000
      },
      City: {
        color: "Black",
        Price: 8500000
      },
      Accord: {
        color: "White",
        Price: 4500000
      }
    },
    Toyota: {
      Corolla: {
        color: "Red",
        Price: 6900000
      },
      Camry: {
        color: "Blue",
        Price: 5500000
      },
      Hilux: {
        color: "Black",
        Price: 10500000
      }
    },
    Hyundai: {
      Elantra: {
        color: "Grey",
        Price: 3000000
      },
      Sonata: {
        color: "Black",
        Price: 3750000
      },
      Accent: {
        color: "Red",
        Price: 7000000
      }
    }
  };

  var companyDropdown = document.getElementById("company");
  for (var company in Cars) {
    var option = document.createElement("option");
    option.value = company;
    option.text = company;
    companyDropdown.add(option);
  }
  
  function populateModels() {
    var company = document.getElementById("company").value;
    var modelDropdown = document.getElementById("model");
    modelDropdown.innerHTML = "<option value=''>Select a model</option>";
  
    if (company !== "") {
      var models = Cars[company];
      for (var model in models) {
        var option = document.createElement("option");
        option.value = model;
        option.text = model;
        modelDropdown.add(option);
      }
    }
  }
  
  function displayCarDetails() {
    var company = document.getElementById("company").value;
    var model = document.getElementById("model").value;
    var carDetailsDiv = document.getElementById("carDetails");
  
    if (company !== "" && model !== "") {
      var car = Cars[company][model];
      carDetailsDiv.innerHTML = "<b>Color:</b> " + car.color + "<br>" + "<b>Price:</b> " + car.Price;
    } else {
      carDetailsDiv.innerHTML = "";
    }
  }
  