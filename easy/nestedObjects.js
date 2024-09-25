let person = [
  {
    name: 'John',
    contact: {
      phone: '987-654-3210',
      email: 'johnz.com',
      address: {
        city: 'Berlin',
        country: 'Germany',
      },
    },
  },
  {
    name: 'John',
    contact: {
      phone: '987-654-3210',
      email: 'john123@xyz.com',
      address: {
        city: 'Berlin',
        country: 'Haridwar',
      },
    },
  },
  {
    name: 'John',
    contact: {
      phone: '987-654-3210',
      email: 'john123@.com',
      address: {
        city: 'Berlin',
        country: 'Kaithal',
      },
    },
  },
];

let data = person.filter((ele, arr) => {
  return ele.contact.address.country === 'Kaithal';
});

console.log(data);
//console.log(person.contact.address.city);

var new_array = arr.map(
  function callback(element, index, array) {
    // Return value for new_array
  }[thisArg]
);
