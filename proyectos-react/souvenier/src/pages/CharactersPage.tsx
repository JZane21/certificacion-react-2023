import { Box, Button, Card, List, ListItem, ListItemText,
  ListSubheader } from "@mui/material";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const CharactersPage = () => {
  const {data} = useLoaderData();

  const [personajes,setPersonajes] = 
  useState<[]>([]);
  // {
  //   name:"",
  //   description:{
  //     status:"",
  //     species:"",
  //     gender:""
  //   },
  //   image:""
  // }

  useEffect(() => {
    return setPersonajes(
      [...Object.values(data.results)]
    );
  },[]);

  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey', 
      display:'flex',flexDirection:'column',maxWidth:'max-content',
      justifyContent:'space-around', minHeight:'300px'}}>
      
      <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 540,
        '& ul': { padding: 0 }
      }}
      subheader={<li />}
      >
        {[1].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>Personajes:</ListSubheader>
              {Object.values(personajes).map((personaje) => (
                <Card variant="outlined" key={personaje.name}
                sx={{marginTop:3, p:1}}>
                  <Card variant="outlined">
                    <Box
                      component="img"
                      sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                      }}
                      alt={personaje.name}
                      src={personaje.image}
                    />
                  </Card>

                  <Card variant="outlined" sx={{marginTop:2}}>
                    <Card variant="outlined" sx={{p:1}}>
                      Nombre: {personaje.name}
                    </Card>
                    <List
                    sx={{
                      width: '100%',
                      maxWidth: 360,
                      bgcolor: 'background.paper',
                      position: 'relative',
                      overflow: 'auto',
                      maxHeight: 150,
                      '& ul': { padding: 0 },
                    }}
                    subheader={<li />}
                    >
                      {[personaje.id].map((sectionId) => (
                        <li key={`section-${sectionId}`}>
                          <ul>
                            <ListSubheader>Description:</ListSubheader>
                            {
                            [
                              personaje.status,
                              personaje.species,
                              personaje.origin.name,
                              personaje.gender
                            ].map((item) => (
                              <ListItem key=
                              {`item-${sectionId}-${item}${uuidv4()}`}>
                                <ListItemText primary={item} />
                              </ListItem>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </List>
                  </Card>

                  <Card
                  sx={{display:'flex', flexDirection:'row-reverse'
                  ,marginTop:2,boxShadow:'none',borderBlockColor:'none'}}>
                    <Button variant="outlined" sx={{width:'max-content'}}>BOTON</Button>
                  </Card>

                </Card>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Box>
  );
};
