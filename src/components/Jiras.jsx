import React, { useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";
import { format } from "date-fns";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const userItems = [
    {
      _id: 1234,
      caseNumber: 182394,
      createdAt: new Date(),
    },
  ];

export default function Jiras() {
 
  return (
    <div>
      {userItems.length === 0 ? (
        <Typography
          variant="body2"
          textAlign={"center"}
          marginTop={5}
          style={{ fontWeight: 700 }}
        >
          No items available
        </Typography>
      ) : (
        <Box sx={{ flexGrow: 1, marginTop: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {userItems.map((data) => (
              <Grid item xs={2} sm={4} md={4} key={data._id}>
                <Card elevation={3}>
                  {/* <CardMenu data={data} /> */}
                  <CardContent>
                    <Link
                      to={`/trip/${data._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography sx={{ fontSize: 20 }} gutterBottom noWrap>
                        {data.caseNumber}
                      </Typography>
                    </Link>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary">
                      Created: {format(new Date(data.createdAt), "MM-dd-yyyy")}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </div>
  );
}
