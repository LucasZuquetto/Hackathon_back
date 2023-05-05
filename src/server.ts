import app from "./app";

const port = process.env.PORT || 4000;

app.listen(port, () => {
   console.log(`${process.env.NODE_ENV} environment`);
   console.log(`Server is listening on port ${port}`);
});
