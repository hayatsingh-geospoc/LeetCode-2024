
// const cluster = require('node:cluster');
// const os = require('os');
// const noCPUs = os.cpus().length;
// const express = require('express');

// const app = express()


// if(cluster.isPrimary){
//   for(let i = 0; i < noCPUs; i++){
//     cluster.fork();
//   };

//   cluster.on('exit' , (worker , code , signal)=>{
//     console.log(`work  ${worker.process.id} died`);
//   })
// }else{
//     app.get('/', (req,res)=>{
//   return res.status(200).send({msg: `working on ${process.pid}`})
//     })

// app.listen(4040 , ()=>{
//     console.log("port is running on 4040")
// })

// };



  

const object = {
    name: "Rima",
    getName: () => {
      console.log(this);
    },
  };

  object.getName()


















// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;



// if (cluster.isMaster) {
//   // Fork workers for each CPU core
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//   });
// } else {
//   // Worker processes have a HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello, world!');
//   }).listen(8000);
// }
