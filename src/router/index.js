//Product
import DetailProduct from "../pages/product/detailProduct";
import AddNewProduct from '../pages/product/addNewProduct'
import EditProduct from '../pages/product/editProduct';
import DeleteProduct from '../pages/product/addNewProduct'
//Supplier
import DetailSupplier from "../pages/supplier/detailSupplier";
import AddNewSupplier from '../pages/supplier/addNewSupplier';
import EditSupplier from '../pages/supplier/editSupplier'
import DeleteSupplier from '../pages/supplier/deleteSupplier'
//Customer
import DetailCustomer from "../pages/customer/detailCustomer";
import AddNewCustomer from '../pages/customer/addNewCustomer';
import EditCustomer from '../pages/customer/editCustomer'
import DeleteCustomer from '../pages/customer/deleteCustomer'
//Category
import DetailCategory from "../pages/category/detailCategory";
import AddNewCategory from '../pages/category/addNewCategory';
import EditCategory from '../pages/category/editCategory'
import DeleteCategory from '../pages/category/deleteCategory'

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
    },
    {
      path: '/product/delete-product',
      name: 'Delete Product',
      component: DeleteProduct,
    },
  ]
}

const supplier = {
  name: 'Supplier',
  path: '/supplier',
  key: 'sub2',
  icon: '',
  children: [
    {
      path: '/supplier/detail-supplier',
      name: 'Detail Supplier',
      component: DetailSupplier,
    },
    {
      path: '/supplier/add-supplier',
      name: 'Add New Supplier',
      component: AddNewSupplier,
    },
    {
      path: '/supplier/edit-supplier',
      name: 'Edit Supplier',
      component: EditSupplier,
    },
    {
      path: '/supplier/delete-supplier',
      name: 'Delete Supplier',
      component: DeleteSupplier,
    },
  ]
}

const customer = {
  name: 'Customer',
  path: '/customer',
  key: 'sub3',
  icon: '',
  children: [
    {
      path: '/customer/detail-customer',
      name: 'Detail Customer',
      component: DetailCustomer,
    },
    {
      path: '/customer/add-customer',
      name: 'Add New Customer',
      component: AddNewCustomer,
    },
    {
      path: '/customer/edit-customer',
      name: 'Edit Customer',
      component: EditCustomer,
    },
    {
      path: '/customer/delete-customer',
      name: 'Delete Customer',
      component: DeleteCustomer,
    },
  ]
}

const category = {
  name: 'Category',
  path: '/category',
  key: 'sub4',
  icon: '',
  children: [
    {
      path: '/category/detail-category',
      name: 'Detail Category',
      component: DetailCategory,
    },
    {
      path: '/category/add-category',
      name: 'Add New Category',
      component: AddNewCategory,
    },
    {
      path: '/category/edit-category',
      name: 'Edit Category',
      component: EditCategory,
    },
    {
      path: '/category/delete-category',
      name: 'Delete Category',
      component: DeleteCategory,
    },
  ]
}

const invoice = {
  name: 'Invoice',
  path: '/invoice',
  key: 'sub5',
  icon: '',
  submenu: [
    {
      name: 'Export Invoice',
      path: '/invoice/export-invoice',
      key: 'sub6',
      children: [
        {
          name: 'View Export Invoice',
          key: '17',
        },
        {
          name: 'Detail Export Invoice',
          key: '18',
        },
        {
          name: 'Export Invoice',
          key: '19',
        }
      ]
    },
    {
      name: 'Import Invoice',
      path: '/invoice/import-invoice',
      key: 'sub7',
      children: [
        {
          name: 'View Import Invoice',
          key: '20',
        },
        {
          name: 'Detail Import Invoice',
          key: '21',
        },
        {
          name: 'Import Product',
          key: '22',
        }
      ]
    }
  ],
}

export const routes = [ product, supplier, customer, category ];
export const routesSubmenu = [ invoice ];