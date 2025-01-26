let obj = {
  name: 'hayat singh',
  rollno: 12,
  newObj: {
    data: 'Valid',
    newData: {
      okvalid: 'yes',
    },
  },
};

let newData = JSON.parse(JSON.stringify(obj));

newData.newObj.newData.okvalid = 'No';

console.log(newData, obj);
