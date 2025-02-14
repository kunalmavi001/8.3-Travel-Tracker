import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const result = await db.query ("SELECT country_code from visited_countries")
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  
});
console.log(result.rows);
res.render("index.ejs", { countries: countries, total: countries.length });
db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
