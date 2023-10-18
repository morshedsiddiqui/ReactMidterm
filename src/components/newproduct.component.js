import React,{Component} from "react";

export default class NewProduct extends Component{


    constructor(props){
        super(props);


       this.handleFileChangeP = this.handleFileChangePro.bind(this);
        this.onChangeName = this.onChangeProductName.bind(this);
        this.onChangeDescription = this.onChangeProcustDescription.bind(this);
        this.onChangeCategory = this.onChangeProductCategory.bind(this);
        this.onChangeQuantity = this.onChangeProductQuantity.bind(this);
        this.onChangePrice = this.onChangeProductPrice.bind(this);
        this.onSubmitP = this.onSubmitProduct.bind(this);
        


        



        this.state={

           'selectedFilePrdt': null,
            "ProductName": '',
            "ProcustDescription": '',
            "ProductCategory": '',
            "ProductQuantity": '',
            "ProductPrice": ''
            
        }
    }
    

    handleFileChangePro = (e) => {
        this.setState({
            selectedFilePrdt: e.target.files[0],
          });
      }




      

    onChangeProductName(e){
        this.setState({
            ProductName:e.target.value
        })  
    }


    onChangeProcustDescription(e){
        this.setState({
            ProcustDescription:e.target.value
        })  
    }

    onChangeProductCategory(e){
        this.setState({
            ProductCategory:e.target.value
        })  
    }

    onChangeProductQuantity(e){
        this.setState({
            ProductQuantity:e.target.value
        })  
    }

    onChangeProductPrice(e){
        this.setState({
            ProductPrice:e.target.value
        })  
    }







   

    onSubmitProduct(event) {
        alert('The form was submitted');


        console.log(`Selected file: ${this.state.selectedFilePrdt.name}`);



         
        console.log("Product name:" + this.state.ProductName);
        console.log("Product description: " + this.state.ProcustDescription);
        console.log("Product Category:" + this.state.ProductCategory);
        console.log("Product Quantity:" + this.state.ProductQuantity);
        console.log("Product Price:" + this.state.ProductPrice);
        event.preventDefault();
        this.state={

            'selectedFilePrdt': null,
             "ProductName": '',
             "ProcustDescription": '',
             "ProductCategory": '',
             "ProductQuantity": '',
             "ProductPrice": ''
             
         }
        
      }
    
      onClickCancelP() {
      
      }



    render(){
        return(
            <div>
                <form>
               <h1>New Product</h1>
               <label class="form-label" for="customFile">Upload Photo</label>
                <input type="file" class="form-control" id="customFile" onChange={this.handleFileChangeP} />

                <label class="form-label" for="customFile">Name</label>
                <input type="text" class="form-control" id="customFile"  onChange={this.onChangeName}/>

                <label class="form-label" for="customFile">Description</label>
                <input type="text" class="form-control" id="customFile" onChange={this.onChangeDescription} />

                <label class="form-label" for="customFile">Category</label>
                <input type="text" class="form-control" id="customFile" onChange={this.onChangeCategory} />

                <label class="form-label" for="customFile">Quantity</label>
                <input type="number" class="form-control" id="customFile" onChange={this.onChangeQuantity} />

                <label class="form-label" for="customFile">Price</label>
                <input type="number" class="form-control" id="customFile" onChange={this.onChangePrice} />


                <button class="button button2" onClick={this.onSubmitP}>Submit</button>
                <button class="button button3" onClick={this.onClickCancelP}>Cancel</button>
                </form>
            </div>
        )
    }
    
}