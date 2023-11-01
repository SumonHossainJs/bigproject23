import "./Products.scss";
import { DataTable } from "../../components/Export";
import  {GridColDef} from '@mui/x-data-grid';
import { products} from "../../Data";

const columns: GridColDef[] =[
  {field:'id', headerName:"ID", width:80},
  {
    field:"img",
    headerName:"Image",
    width:100,
    renderCell: (params) =>{
      return <img src={params.row.img || "/noavater.png"} alt=""/>;
    }
  },
  {
    field:"title",
    headerName:"Title",
    width:200,
    type:'string',
  },
  {
    field:"color",
    type:"string",
    headerName:"Color",
    width:150,
  }, 
  {
    field:'price', 
    type:'string', 
    headerName:"Price", 
    width:100,
  }, 
  {
    field:"producer", 
    type:'string', 
    headerName:'Producer', 
    width:150, 
  },
  {
    field:'createdAt',
    type:'string', 
    headerName:'Cteated At',
    width:100,
  },
  {
    field:"inStock",
    type:'string', 
    headerName:'In Stock',
    width:150,
  }
];

const Products = () => {
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button>
          Add new Products
        </button>
      </div>

      <DataTable slug='products' columns={columns} rows={products}/>
    </div>
  )
}

export default Products