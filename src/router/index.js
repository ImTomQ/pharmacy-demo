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
//Export Invoice 
import DetailExportInvoice from "../pages/invoice/exportInvoice/detailExportInvoice";
import ViewExportInvoice from '../pages/invoice/exportInvoice/viewExportInvoice';
import ExportInvoice from '../pages/invoice/exportInvoice/exportInvoice';
//Import Invoice 
import DetailImportInvoice from "../pages/invoice/importInvoice/detailImportInvoice";
import ViewImportInvoice from '../pages/invoice/importInvoice/viewImportInvoice';
import ImportInvoice from '../pages/invoice/importInvoice/importProduct';

const product = {
  name: 'Product',
  path: '/product',
  key: 'sub1',
  icon: '',
  children: [
    {
      path: '/product/detail-product',
      name: 'Detail Product',
      key: '1',
      component: DetailProduct,
    },
    {
      path: '/product/add-product',
      name: 'Add New Product',
      key: '2',
      component: AddNewProduct,
    },
    {
      path: '/product/edit-product',
      name: 'Edit Product',
      key: '3',
      component: EditProduct,
    },
    {
      path: '/product/delete-product',
      name: 'Delete Product',
      key: '4',
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
      key: '5',
      component: DetailSupplier,
    },
    {
      path: '/supplier/add-supplier',
      name: 'Add New Supplier',
      key: '6',
      component: AddNewSupplier,
    },
    {
      path: '/supplier/edit-supplier',
      name: 'Edit Supplier',
      key: '7',
      component: EditSupplier,
    },
    {
      path: '/supplier/delete-supplier',
      name: 'Delete Supplier',
      key: '8',
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
      key: '9',
      component: DetailCustomer,
    },
    {
      path: '/customer/add-customer',
      name: 'Add New Customer',
      key: '10',
      component: AddNewCustomer,
    },
    {
      path: '/customer/edit-customer',
      name: 'Edit Customer',
      key: '11',
      component: EditCustomer,
    },
    {
      path: '/customer/delete-customer',
      name: 'Delete Customer',
      key: '12',
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
      key: '13',
      component: DetailCategory,
    },
    {
      path: '/category/add-category',
      name: 'Add New Category',
      key: '14',
      component: AddNewCategory,
    },
    {
      path: '/category/edit-category',
      name: 'Edit Category',
      key: '15',
      component: EditCategory,
    },
    {
      path: '/category/delete-category',
      name: 'Delete Category',
      key: '16',
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
          path: '/invoice/view-export-invoice',
          key: '17',
          component: ViewExportInvoice,
        },
        {
          name: 'Detail Export Invoice',
          path: '/invoice/detail-export-invoice',
          key: '18',
          component: DetailExportInvoice,
        },
        {
          name: 'Export Invoice',
          path: '/invoice/export-export-invoice',
          key: '19',
          component: ExportInvoice,
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
          path: '/invoice/view-import-invoice',
          component: ViewImportInvoice,
        },
        {
          name: 'Detail Import Invoice',
          key: '21',
          path: '/invoice/detail-import-invoice',
          component: DetailImportInvoice,
        },
        {
          name: 'Import Product',
          key: '22',
          path: '/invoice/import-import-invoice',
          component: ImportInvoice,
        }
      ]
    }
  ],
}

export const routes = [ product, supplier, customer, category ];
export const routesSubmenu = [ invoice ];