const fetchTrucksAndWorkers = () => {
  // ! TODO : fetch api data
  const data = [
    {
      id: 1,
      photo: "asd",
      worker: "Paweł",
      startDate: "05.06.2022",
      endDate: "06.06.2022",
      destination: "Warsaw",
    },
    {
      id: 2,
      photo: "asd",
      worker: "Kamil",
      startDate: "12.05.2022",
      endDate: "14.05.2022",
      destination: "Wroclaw",
    },
    {
      id: 3,
      photo: "asd",
      worker: "Mateusz",
      startDate: "10.08.2022",
      endDate: "14.08.2022",
      destination: "Praga",
    },
    {
      id: 4,
      photo: "asd",
      worker: "Tomek",
      startDate: "02.02.2022",
      endDate: "12.02.2022",
      destination: "Berlin",
    },
  ];

  return { data };
};

export default fetchTrucksAndWorkers;
