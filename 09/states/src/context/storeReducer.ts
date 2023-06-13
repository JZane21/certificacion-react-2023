export const types = {
  gradesDeleteAll: 'grades - delete all',
  gradeChange: 'grades - changed',
  gradesCreate: 'grades - created',
  changeAuthTrue: 'true',
  changeAuthFalse: 'false'
};

export const initialValues={
  grades: [
    {
      id: 1,
      grade: 20,
    },
    {
      id: 2,
      grade: 30,
    },
    {
      id: 3,
      grade: 40,
    }
  ],
  auth:false
};

export const storeReducer = (state:any,action:any) => {
  switch(action.type){
    case types.gradeChange:
      return {
        ...state,
        grades: [{id:3,grade:50}],
      };
    case types.gradesDeleteAll:
      return {
        ...state,
        grades: []
      };
    case types.gradesCreate:
      return {
        ...state,
        grades:[...initialValues.grades]
      };
    case types.changeAuthTrue:
      return {
        ...state,
        auth:true
      };
    case types.changeAuthFalse:
      return {
        ...state,
        auth:false
      };
    default:
      return state;
  }
};
