import { createSlice } from "@reduxjs/toolkit";
import movieData from "../data.json";
import { initialFilter } from "../utils/constants";

const initialState = {
  currentTab: "Home",
  isSearch: false,
  isFilter: false,
  filterType: 0,
  filterVal: "Select Value",
  filterConfig: initialFilter.data,
  movieData: movieData.movies,
  searchData: [],
  filterData: [],
};

export const dataSlice = createSlice({
  name: "MyBinge",
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state.currentTab = action.payload;
    },
    toggleSearch: (state) => {
      state.isSearch = !state.isSearch;
    },
    updateSearch: (state, action) => {
      state.searchData = action.payload;
    },
    updateFilterType: (state, action) => {
      state.filterType = action.payload;
    },
    updateFilterConfig: (state, action) => {
      state.filterConfig = action.payload.config;
      state.filterVal = action.payload.val;
    },
    updateFilter: (state, action) => {
      state.isFilter = action.payload.toggle;
      state.filterData = action.payload.value;
    },
    updateMovies: (state, action) => {
      state.movieData = action.payload;
    },
  },
});

export const {
  updateTab,
  toggleSearch,
  updateSearch,
  updateFilterType,
  updateFilterConfig,
  updateFilter,
  updateMovies,
} = dataSlice.actions;
export default dataSlice.reducer;
