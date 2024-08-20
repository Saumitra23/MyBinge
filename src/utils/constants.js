export const initialFilter = {
  data: [
    {
      type: "Genre",
      selected: false,
      vals: [
        { type: "Action", selected: false },
        { type: "Comedy", selected: false },
        { type: "Romance", selected: false },
        { type: "Thriller", selected: false },
        { type: "Horror", selected: false },
        { type: "Mystery", selected: false },
        { type: "Drama", selected: false },
        { type: "War", selected: false },
        { type: "Family", selected: false },
        { type: "Sci-Fi", selected: false },
        { type: "Animation", selected: false },
      ],
    },
    {
      type: "Year",
      selected: false,
      vals: [
        { type: "2023", selected: false },
        { type: "2022", selected: false },
        { type: "2021", selected: false },
        { type: "2020", selected: false },
        { type: "2019", selected: false },
        { type: "2018", selected: false },
        { type: "2017", selected: false },
      ],
    },
    {
      type: "Rating",
      selected: false,
      vals: [
        { type: 5, selected: false },
        { type: 4, selected: false },
        { type: 3, selected: false },
      ],
    },
  ],
};
