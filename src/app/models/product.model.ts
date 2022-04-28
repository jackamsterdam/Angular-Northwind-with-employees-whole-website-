class ProductModel {
  id: number
  name: string 
  price: number
  stock: number 
  imageName: string 
  image: File //but in react its in FileList but in Angular we get teh direct File 
}

export default ProductModel  //in angular use named exports instead in react export default 