import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { NavigationContext } from "@react-navigation/core";
import { useContext, useEffect, useState } from "react";
import { ShelfFactory } from "../../domain/Shelf/ShelfFactory";
import { ShelfInfo } from "../ShelfInfo";
import {
  beginSortingProcess,
  finishSortingProcess,
  sortShelfs,
} from "./queries";

export function ShelfList(props: any) {
  const navigation = useContext(NavigationContext);
  const [shelfs, setShelfs] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedShelfs, setSelectedShelfs] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const { data: initialData } = useQuery(beginSortingProcess, {
    variables: { role: localStorage.getItem("role") },
  });
  const [sort, { data: sortData }] = useMutation(sortShelfs);
  const [finishSort, { data: finishData }] = useMutation(finishSortingProcess);

  useEffect(() => {
    if (initialData) setShelfs(initialData.beginSortingProcess);
    console.log("SHELFS ->->->-> ", shelfs);
  }, [initialData]);

  const handleOnSort = async () => {
    setIsSorting(true);
    const tobesorted = shelfs.map((shelf: any) => {
      return shelf.id;
    });
    const response = await sort({
      variables: { shelfIds: tobesorted },
    });

    const newShelfsOrder = response.data.sortShelfs.map((sortedshelf: any) => {
      return sortedshelf.shelf;
    });

    setShelfs(newShelfsOrder);

    console.log("SORTED **** ", response);
  };

  const handleOnCancel = () => {
    console.log("atras", navigation);
    navigation?.goBack();
  };

  const handleOnFinishSorting = async () => {
    const sortOrder: any[] = [];
    const newStoredProducts: any[] = [];
    const newUnStoredProducts: any[] = [];
    const sortedShelfs = sortData.sortShelfs;

    for (var i = 0; i < sortedShelfs.length; i++) {
      const sorted = sortedShelfs[i];

      console.log("**", sorted, "**");

      for (var j = 0; j < sorted.newStoredProducts.length; j++) {
        newStoredProducts.push(sorted.newStoredProducts[j].id);
      }

      for (var j = 0; j < sorted.newUnStoredProducts.length; j++) {
        newUnStoredProducts.push(sorted.newUnStoredProducts[j].id);
      }

      const shelfId = sorted.shelf.id;
      const sections = sorted.shelf.sections;

      for (var j = 0; j < sections.length; j++) {
        const sectionNumber = sections[j].sectionNumber;
        const productId = sections[j].product.id;
        sortOrder.push({
          shelfId,
          sectionNumber,
          productId,
        });
      }
    }
    console.log(
      "FINISHED ->->->->-> ",
      sortOrder,
      newStoredProducts,
      newUnStoredProducts
    );

    const response = await finishSort({
      variables: {
        sortOrder,
        newStoredProducts,
        newUnStoredProducts,
      },
    });
    if (!response) {
      navigation?.goBack();
    } else {
      setOpen(true);
    }
  };

  return (
    <Container>
      {isSorting ? (
        <Stack margin={6}>
          <Typography variant="h4">You are sorting shelfs...</Typography>
          <Typography variant="h6" color="gray">
            Once you physically rearrange the products click on "Finished
            sorting"
          </Typography>
          <Stack direction="row" spacing={2} marginY={2}>
            <Button
              variant="contained"
              color="success"
              onClick={handleOnFinishSorting}
            >
              Finished sorting
            </Button>
            <Button variant="contained" color="error" onClick={handleOnCancel}>
              Cancel
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Button variant="contained" sx={{ margin: 6 }} onClick={handleOnSort}>
          Sort Shelfs
        </Button>
      )}
      {isSorting && (
        <Typography variant="h5" color="gray" margin={6} marginBottom={2}>
          New order of products on shelfs:
        </Typography>
      )}

      {shelfs?.map((shelf: any) => (
        <Stack direction="column" spacing={0}>
          <ShelfInfo shelf={shelf} />
        </Stack>
      ))}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sorting process succeded
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              navigation?.goBack();
            }}
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
