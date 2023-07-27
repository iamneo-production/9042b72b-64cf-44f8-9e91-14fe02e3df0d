// /  const handleSubmit = async(e) => {
    //   try{
    //     axios.post("http://localhost:8080/api/v1/auth/authenticate",{
    //         "email":username,
    //         "password":password
    //     })
    //     .then(res=>{
    //         console.log(res.data);
    //         localStorage.setItem("token",res.data.token);
    //         updateValue(username);
    //         navigate("/home");
    //     })
    //     .catch(function (error) {
    //         if(error && error.response && error.response.status!=403)
    //             navigate("/home");
    //         else
    //             setAuthError("Account doesn't exist");
    //       })
    // }
    // catch(error){
    //     console.log("Error"+error.response.status);
    // }
    //  }
    
    
    
    // if (this.validateForm()) {
    //   const data = {
    //     user : this.state.fields.username,
    //     email : this.state.fields.email,
    //     mobile : this.state.fields.mobile,
    //     gender : this.state.fields.gender,
    //     password : this.state.fields.password        
    //   }
    //     axios.post('http://127.0.0.1:8080/addnew',data);
    //     let fields = {};
    //     fields["mobile"] = "";
    //     fields["password"] = "";
    //     this.setState({fields:fields});
    //     alert("Your Form has been submitted successfully.");
    // }
    // }
    // validateForm() {
    
    // let fields = this.state.fields;
    // let errors = {};
    // let formIsValid = true;
    
    // if (fields["mobile"]) {
    // if (!fields["mobile"].match(/^[0-9]{10}$/)) {
    //   formIsValid = false;
    //   errors["mobile"] = "*Please enter a valid mobile no.";
    // }
    // }
    
    // if (fields["password"]) {
    // if (!fields["password"].match(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*_=+-]).{8,}$/)) {
    //   formIsValid = false;
    //   errors["password"] = "*Please enter secure and strong password.";
    // }
    // }
    
    // this.setState({
    // errors: errors
    // });
    // return formIsValid;
    
    // }
    