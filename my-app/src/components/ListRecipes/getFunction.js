getEquipment=()=>{
    var apiUrl = 'http://127.0.0.1:5000/showEquipment?userID=user1'
    
      fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
            var data =result['recipeList'];
         this.loading = false;
         var recipe =[];
         
         Object.keys(data).forEach(function(key) {
             if(key!="userID" && key!="_id"){
              recipe.push([
                key,data[key]
             ]);
             }
                 
        });
       
             this.setState({
              recipe: recipe
            });

            const dataArray = Object.keys(this.state.recipe).map(i => this.state.recipe[i])
            this.recipe = dataArray;
            console.log(this.recipe[0]);
           },
           (error) => {
             this.setState({ error });
           }
         )
        

   }

   handleSubmit=(event)=> {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://127.0.0.1:5000/')

    event.preventDefault();
  }