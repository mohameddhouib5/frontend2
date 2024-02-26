import React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box } from "@mui/material";
import { Button } from "react-bootstrap";
const Affichearticle = ({ products,deleteProduct }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'imageart', 
        header: 'Image',
        Cell: ({ cell}) => (
        <Box
        sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        }}
        >
        <img
        alt=""
        height={100}
        src={cell.getValue()}
        loading="lazy"
        style={{ borderRadius: '20%' }}
        />
        </Box>),
        },
      {
        accessorKey: "reference", 
        header: "reference",
        size: 150,
      },
      {
        accessorKey: "designation",
        header: "designation",
        size: 150,
      },
      {
        accessorKey: "marque", 
        header: "marque",
        size: 200,
      },
      {
        accessorKey: "prix",
        header: "prix",
        size: 150,
      },
      {
        accessorKey: "qtestock",
        header: "qtestock",
        size: 150,
      },{
        accessorKey: '_id',
        header: 'actions',
        size: 100,
        Cell: ({ cell, row }) => (
        <div >
        <Button
        onClick={() => {
        console.log("modification ...")
        }}
        variant="warning"
        size="md"
        className="text-warning btn-link edit"
        >
        <i class="fa-solid fa-pen-to-square"></i>
        </Button>
        <Button
        onClick={(e) => {
        deleteProduct(cell.row.original._id,cell.row.original.reference, e);
        }}
        variant="danger"
        size="md"
        className="text-danger btn-link delete"
        >
        <i className="fa fa-trash" />
        </Button>
        </div>
        ),
        },
        ],
        [products]
        );

  const table = useMaterialReactTable({
    columns,
    data: products, 
  });

  return (
    <div>
      <MaterialReactTable table={table}/>;
    </div>
  );
};

export default Affichearticle;
