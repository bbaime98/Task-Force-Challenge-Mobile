const state = {
  auth: {
    signInError: '',
    isAuth: false,
    isAdminAuthenticated: false,
    isClientAuthenticated: false,
    isClientLoggedOut: false,
    isAdminLoggedOut: false,
  },
  drawer: {
    isToggled: true,
  },
  tasks:{
     availableTasks: [],
     getTasksError: null,
  },
  newTask:{
     success: null,
     error: null,
  },
};

export default state;
