import DetailProduct from "../pages/product/detailProduct";
import EditProduct from '../pages/product/editProduct';
import AddNewProduct from '../pages/product/addNewProduct'

const product = {
  name: 'Product',
  path: '/product',
  key: 'sub1',
  icon: '',
  children: [
    {
      path: '/product/detail-product',
      name: 'Detail Product',
      component: DetailProduct,
    },
    {
      path: '/product/add-product',
      name: 'Add New Product',
      component: AddNewProduct,
    },
    {
      path: '/product/edit-product',
      name: 'Edit Product',
      component: EditProduct,
    }
  ]
}

export const routes = [ product ];