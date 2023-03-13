const cars = [
    {
      make: "Toyota",
      model: "Corolla",
      year: 2018,
      price: 12000,
      mileage: 50000,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2015,
      price: 15000,
      mileage: 75000,
    },
    {
      make: "Ford",
      model: "F-150",
      year: 2010,
      price: 20000,
      mileage: 100000,
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 25000,
      mileage: 25000,
    },
  ];
  
  const filterBtn = document.getElementById("filter-btn");
  const carList = document.getElementById("car-list");
  
  function renderCars(cars) {
    carList.innerHTML = "";
    cars.forEach((car) => {
      const li = document.createElement("li");
      li.innerText = `${car.make} ${car.model} (${car.year}) - $${car.price}`;
      carList.appendChild(li);
    });
  }
  
  renderCars(cars);
  
  filterBtn.addEventListener("click", () => {
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;
    const mileage = document.getElementById("mileage").value;
  
    let filteredCars = cars.filter((car) => {
      if (make && car.make !== make) {
        return false;
      }
      if (model && car.model !== model) {
        return false;
      }
      if (price && car.price > price) {
        return false;
      }
      if (year && car.year < year) {
        return false;
      }
      if (mileage && car.mileage > mileage) {
        return false;
      }
      return true;
    });
  
    renderCars(filteredCars);
  });
  