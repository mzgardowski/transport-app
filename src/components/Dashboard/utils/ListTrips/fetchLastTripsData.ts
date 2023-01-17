const fetchLastTripsData = () => {
  // ! TODO : fetch api data
  const data = [
    {
      id: 1,
      title: "Elektronika",
      date: "12.06.2022",
      tripTime: "12h",
      startingPoint: "Wroclaw",
      destination: "Lodz",
      client: "RTV",
      worker: "Paweł",
      tripStatus: "error",
    },
    {
      id: 2,
      title: "Media",
      date: "12.02.2018",
      tripTime: "8h",
      startingPoint: "Warsaw",
      destination: "Wroclaw",
      client: "Media",
      worker: "Kamil",
      tripStatus: "warning",
    },
    {
      id: 3,
      title: "Budowlane",
      date: "01.22.2022",
      tripTime: "4h",
      startingPoint: "Warsaw",
      destination: "Wroclaw",
      client: "Kamikadze",
      worker: "Piotr",
      tripStatus: "info",
    },
    {
      id: 4,
      title: "Budowlane",
      date: "10.04.2023",
      tripTime: "20h",
      startingPoint: "Warsaw",
      destination: "Wroclaw",
      client: "TransBud",
      worker: "Mateusz",
      tripStatus: "success",
    },
    {
      id: 5,
      title: "Elektronika",
      date: "06.01.2022",
      tripTime: "72h",
      startingPoint: "Warsaw",
      destination: "Madryt",
      client: "Metaless",
      worker: "Tomek",
      tripStatus: "warning",
    },
  ];

  return { data };
};

export default fetchLastTripsData;
