const express = require('express');
const cors = require('cors');
const axios = require('axios');


const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  let port = process.env.PORT || 8000;
  app.get('/register', async (req, res) => {
    
    try {
      const response = await axios({
        method: 'post',
        url: 'https://hash.immunie.org/hash-register',
        data: {
          userData: "USERDATA",
          userVaccines: ["AA", "BBC"],
          lastAppliedDate: Date.now().toString(),
        }
      });
      res.send(response.data);
    } catch (error) {
      console.log("ERROR")
      res.send(error)
    }
  });

  app.listen(port, () => {
    console.log(`(TEST) - Listening to port ${port}`);
  });
}

main().catch((error)=>console.log(error));