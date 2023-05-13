const express = require("express");
const app = express();
const biodataModule = require("./biodataModule");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/biodata", (req, res) => {
  const {
    name,
    "tempat-lahir": tempatLahir,
    "tanggal-lahir": tanggalLahir,
    alamat,
  } = req.query;
  const biodata = biodataModule.createBiodata(
    name,
    tempatLahir,
    tanggalLahir,
    alamat
  );
  res.status(200).json({
    status: "success",
    data: biodata,
  });
});

app.post("/biodata", (req, res) => {
  const { name, tempatLahir, tanggalLahir, alamat } = req.body;
  const biodata = biodataModule.createBiodata(
    name,
    tempatLahir,
    tanggalLahir,
    alamat
  );
  res.status(201).json({
    status: "success",
    data: biodata,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
