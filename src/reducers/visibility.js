const initialState = {
  filters: {
    status: "Active",
    colors: ["red", "blue"],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/statusFilterChanged": {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
