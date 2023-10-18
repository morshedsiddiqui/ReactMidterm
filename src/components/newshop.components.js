import React,{Component} from "react";

export default class NewShop extends Component{

    constructor(props){
        super(props);

        this.handleFileChangeN = this.handleFileChange.bind(this);
        this.onChangeName = this.onChangeShopName.bind(this);
        this.onChangeDescription = this.onChangeShopDescription.bind(this);
        this.onSubmitShop = this.onSubmitShop.bind(this);

        



        this.state={
            'selectedFile': null,

            "ShopDescription": '',
            "ShopName": ''
        }
    }
    
    handleFileChange = (e) => {
        this.setState({
          selectedFile: e.target.files[0],
        });
      }
    
     
  
      
    onChangeShopName(e){
        this.setState({
            ShopName:e.target.value
        })  
    }



    onChangeShopDescription(e){
        this.setState({
            ShopDescription:e.target.value
        })  
    }

    onSubmitShop(event) {
        alert('The form was submitted');

        const { selectedFile } = this.state;

        event.preventDefault();

          console.log(`Selected file: ${this.state.selectedFile.name}`);
        
    






        console.log("shop Logo:" + this.state.selectedFile.name);
        console.log("shop name:" + this.state.ShopName);
        console.log("Shop description: " + this.state.ShopDescription);


        
      }
    
      onClickCancel() {
        alert('The form was reset ');
        
      }





    render(){
        return(
            <div>

                <form >
                <h1>New Shop</h1>
               <label class="form-label" for="customFile">Upload Photo</label>
                <input type="file" class="form-control" id="customFile"  onChange={this.handleFileChangeN} />

                <label class="form-label" for="customFile">Name</label>
                <input type="text" class="form-control" id="customFile"  onChange={this.onChangeName} />

                <label class="form-label" for="customFile">Description</label>
                <input type="text" class="form-control" id="customFile" onChange={this.onChangeDescription} />
                



                <button class="button button2" onClick={this.onSubmitShop}>Submit</button>
                <button class="button button3" onClick={this.onClickCancel}>Cancel</button>
                </form>
            </div>
        )
    }


}