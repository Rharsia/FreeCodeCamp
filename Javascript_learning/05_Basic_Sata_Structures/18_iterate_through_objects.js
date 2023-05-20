const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let usersOnline = 0;
    for (const user in users) {
      if (allUsers[user].online === true) {
        usersOnline ++;
      }
    }
  
    return usersOnline;
    // Only change code above this line
  }
  
  console.log(countOnline(users));