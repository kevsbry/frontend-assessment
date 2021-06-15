import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContentCard, Banner } from "../components";
import { Container, Grid } from "@material-ui/core";

interface CardData {
  title: string;
  content: string;
}

const HomePage = () => {
  const data = useData();
  const [cardData, setCardData] = useState<CardData[] | undefined>(undefined);

  useEffect(() => {
    data.then((res) => {
      setCardData(res);
    });
  }, []);

  return (
    <>
      <Banner />
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="center">
          {cardData &&
            cardData.map((data, i) => (
              <Grid item xs={12} md={4} key={i}>
                <ContentCard title={data.title} content={data.content} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

const useData = async (): Promise<CardData[] | undefined> => {
  let data: CardData[];

  await axios
    .get("./data.json")
    .then((res) => {
      data = res.data;
    })
    .catch((err) => console.log(err));

  return new Promise((resolve) => resolve(data));
};

export default HomePage;
