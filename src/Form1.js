import React, { Component } from 'react';
import "./Form1.css";
import tick from "./tick.png";
import OtpInput from 'react-otp-input';
import axios from "axios";
import $ from 'jquery';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import Modal from "react-responsive-modal";
import { Button } from 'react-bootstrap';
 
 

class Form1 extends Component {


  constructor(props) {
    super(props);

    this.state = {
      address: ["Name of Office", "Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      addressTwo: ["Flat / Room / Door / Block No.", "Name of Premises / Building / Village", "Road / Street / Lane / Post Office", "Area / Locality / Taluka / Sub-Division", "Town / City / District"],
      name: ["Last Name / Surname", "First Name", "Middle Name"],
      addressThree: ["Name of Premises / Building / Village", "Road / Street / Lane/Post Office", "Area / Locality / Taluka/ Sub- Division", "Town / City / District"],
      
      isModalEnabled: false,
      isEnabled : false,
      errors: {
         NameTitleOne : " ",
         OtherName : " ",
         NameTitleTwo : " ",
         Gender : " ",
         ParentName : " ",
         Communication : " ",
         Status : " ",
         Income : " ",
         NameTitleThree : " ",
         FirstName: " ",
         LastName : " ",
         MiddleName : " ",
         FatherFirstName : " ",
         FatherMiddleName: " ",
         FatherLastName: " ",
         MotherFirstName: " ",
         MotherMiddleName: " ",
         MotherLastName: " ",
         OtherFirstName: " ",
         OtherLastName: " ",
         OtherMiddleName: " ",
         RAFirstName: " ",
         RALastName: " ",
         RAMiddleName: " ",
         AbbreviationOne: " ",
         AbbreviationTwo: " ",
         ResidenceFlat: " ",
         ResidencePremises: " ",
         ResidenceRoad: " ",
         ResidenceArea: " ",
         ResidenceTown: " ",
         OfficeName: " ",
         OfficeFlat: " ",
         OfficePremises: " ",
         OfficeRoad: " ",
         OfficeArea: " ",
         OfficeTown: " ",
         RAFlat: " ",
         RAPremises: " ",
         RARoad: " ",
         RAArea: " ",
         RATown: " ",
         AadhaarFirstName: " ",
         AadhaarLastName: " ",
         AadhaarMiddleName: " ",
         AadhaarNumber: " ",
         EnrolmentId : " ",
         RegistrationNumber: " ",
         ResidenceState: " ",
         ResidencePincode: " ",
         ResidenceCountry: " ",
         OfficeState: " ",
         OfficePincode: " ",
         OfficeCountry: " ",
         RAState: " ",
         RAPincode: " ",
         CountryCode: " ",
         StdCode: " ",
         PhoneNumber: " ",
         Day: " ",
         Month: " ",
         Year: " ",
         POI: " ",
         POA: " ",
         POB: " ",
         Applicant: " ",
         Capacity: " ",
         Email: " ",
         BusinessCode: " ",
 

      },
      data : {
         NameTitleOne : " ",
         OtherName : " ",
         NameTitleTwo : " ",
         Gender : " ",
         ParentName : " ",
         Communication : " ",
         Status : " ",
         Income : " ",
         NameTitleThree : " ",
         FirstName: " ",
         LastName : " ",
         MiddleName : " ",
         FatherFirstName : " ",
         FatherMiddleName: " ",
         FatherLastName: " ",
         MotherFirstName: " ",
         MotherMiddleName: " ",
         MotherLastName: " ",
         OtherFirstName: " ",
         OtherLastName: " ",
         OtherMiddleName: " ",
         RAFirstName: " ",
         RALastName: " ",
         RAMiddleName: " ",
         AbbreviationOne: " ",
         AbbreviationTwo: " ",
         ResidenceFlat: " ",
         ResidencePremises: " ",
         ResidenceRoad: " ",
         ResidenceArea: " ",
         ResidenceTown: " ",
         OfficeName: " ",
         OfficeFlat: " ",
         OfficePremises: " ",
         OfficeRoad: " ",
         OfficeArea: " ",
         OfficeTown: " ",
         RAFlat: " ",
         RAPremises: " ",
         RARoad: " ",
         RAArea: " ",
         RATown: " ",
         AadhaarFirstName: " ",
         AadhaarLastName: " ",
         AadhaarMiddleName: " ",
         AadhaarNumber: " ",
         EnrolmentId : " ",
         RegistrationNumber: " ",
         ResidenceState: " ",
         ResidencePincode: " ",
         ResidenceCountry: " ",
         OfficeState: " ",
         OfficePincode: " ",
         OfficeCountry: " ",
         RAState: " ",
         RAPincode: " ",
         CountryCode: " ",
         StdCode: " ",
         PhoneNumber: " ",
         Day: " ",
         Month: " ",
         Year: " ",
         POI: " ",
         POA: " ",
         POB: " ",
         Applicant: " ",
         Capacity: " ",
         Email: " ",
         BusinessCode1: " ",
         BusinessCode2: " ",
         phonenumber:"",
         otpnumber:"",

      },
      show: false,
      check:0,
      otpverify:0,
      secoundcheck:0,
      number : {
          phonenumber:"",
      }
   
   }
  }

 state = {
   open: false,
 };

 onOpenModal = () => {

   if(this.state.data.LastName === " " || this.state.data.FirstName === " ")
   {
      this.state.errors.MiddleName = "*Fields are required";
      let val = this.state.errors.MiddleName;
      this.setState({val});
   }
   else if(this.state.data.Day === " " || this.state.data.Month === " " || this.state.data.Year === " " )
   {
      this.state.errors.Year = "*Fields are required";
      let val = this.state.errors.Year;
      this.setState({val});
   }
   else if(this.state.data.FatherLastName === " " || this.state.data.FatherFirstName === " ")
   {
       this.state.errors.FatherMiddleName = "*Fields are required";
       let val = this.state.errors.FatherMiddleName;
       this.setState({val});
   }
   else if (this.state.data.ResidenceFlat === " " || this.state.data.ResidencePremises === " " ||
   this.state.data.ResidenceRoad === " " || this.state.data.ResidenceArea === " " || 
   this.state.data.ResidenceTown === " " || this.state.data.ResidenceState === " " ||
   this.state.data.ResidencePincode === " " || this.state.data.ResidenceCountry === " ")
   {
      this.state.errors.ResidenceState = "*Fields are required";
      let val = this.state.errors.ResidenceState;
      this.setState ({val});
   }
   else if(this.state.data.OfficeName === " " || this.state.data.OfficeFlat === " " || 
   this.state.data.OfficePremises === " " || this.state.data.OfficeRoad === " " || 
   this.state.data.OfficeArea === " " || this.state.data.OfficeTown === " " ||
   this.state.data.OfficeState === " " || this.state.data.OfficePincode === " " || 
   this.state.data.OfficeCountry === " ")
   {
      this.state.errors.OfficeState = "*Fields are required";
      let val = this.state.errors.OfficeState;
      this.setState({val});
   }
   else if(this.state.data.CountryCode === " " || this.state.data.StdCode === " " ||
   this.state.data.PhoneNumber === " " || this.state.data.Email === " ")
   {
      this.state.errors.Email = "*Fields are required";
      let val = this.state.errors.Email;
      this.setState({val});
   }
   else if((this.state.data.AadhaarNumber === " " && this.state.data.EnrolmentId === " ") || 
   this.state.data.AadhaarFirstName === " " || this.state.data.AadhaarLastName === " ")
   {
      this.state.errors.AadhaarMiddleName = "*Fields are required";
      let val = this.state.errors.AadhaarMiddleName;
      this.setState ({val});
   }
   else if(this.state.data.RALastName === " " || this.state.data.RAFirstName === " ")
   {
      this.state.errors.RAMiddleName = "*Fields are required";
      let val = this.state.errors.RAMiddleName;
      this.setState({val});
   }
   else
   {
     this.setState({ open: true });
   }
 };

 onCloseModal = () => {
   this.setState({ open: false });
 };  

   

  componentDidMount() {
   $("input:checkbox").click(function () {
     if ($(this).is(":checked")) {
       var group = "input:checkbox[name='" + $(this).attr("name") + "']";
       $(group).prop("checked", false);
       $(this).prop("checked", true);
     }
     else 
     {
        $(this).prop("checked", false);
     }
   });

   $('#Yes').change(function(){
    if(this.checked) {
       $('#OtherNameDiv').show();
    }
   
   });

   $('#No').change(function(){
      if(this.checked) {
        $('#OtherNameDiv').hide();
      }
     });
   
     if(this.state.errors.FirstName === " " && this.state.errors.LastName === " " 
      && this.state.errors.MiddleName === " " && this.state.errors.AbbreviationOne === " " && 
      this.state.errors.AbbreviationTwo === " " && this.state.errors.FatherFirstName === " " &&
      this.state.errors.FatherLastName === " " && this.state.errors.FatherMiddleName === " " && 
      this.state.errors.MotherFirstName === " " && this.state.errors.MotherLastName === " " && 
      this.state.errors.MotherMiddleName === " " && this.state.errors.OtherFirstName === " " &&
      this.state.errors.OtherLastName === " " && this.state.errors.OtherMiddleName === " " && 
      this.state.errors.Day === " " && this.state.errors.Month === " " && 
      this.state.errors.Year === " " && this.state.errors.ResidenceFlat === " " &&
      this.state.errors.ResidencePremises === " " && this.state.errors.ResidenceRoad === " "&&
      this.state.errors.ResidenceState === " " && this.state.errors.ResidenceTown === " " && 
      this.state.errors.ResidenceArea === " " && this.state.errors.ResidenceCountry === " " && 
      this.state.errors.ResidencePincode === " " && this.state.errors.OfficeName === " " &&
      this.state.errors.OfficeFlat === " " && this.state.errors.OfficePremises === " " && 
      this.state.errors.OfficeRoad === " " && this.state.errors.OfficeArea === " " && 
      this.state.errors.OfficeTown === " " && this.state.errors.OfficeState === " " &&
      this.state.errors.OfficePincode === " " && this.state.errors.OfficeCountry === " " &&
      this.state.errors.CountryCode === " " && this.state.errors.StdCode === " " && 
      this.state.errors.PhoneNumber === " " && this.state.errors.Email === " " &&
      this.state.errors.RegistrationNumber === " " && this.state.errors.AadhaarNumber === " " && 
      this.state.errors.EnrolmentId === " " && this.state.errors.AadhaarFirstName === " " &&
      this.state.errors.AadhaarLastName === " " && this.state.errors.AadhaarMiddleName === " " &&
      this.state.errors.BusinessCode === " " && this.state.errors.RAFirstName === " " &&
      this.state.errors.RALastName === " " && this.state.errors.RAMiddleName === " " &&
      this.state.errors.RAFlat === " " && this.state.errors.RAPremises === " " && 
      this.state.errors.RARoad === " " && this.state.errors.RAArea === " " && 
      this.state.errors.RATown === " " && this.state.errors.RAState === " " && 
      this.state.errors.RAPincode === " " && this.state.errors.POI === " " &&
      this.state.errors.POA === " " && this.state.errors.POB === " " && 
      this.state.errors.Applicant === " " && this.state.errors.Capacity === " ")
     {
         this.state.isModalEnabled =  true;
     }
 
 }


 savepdf = () => {


   console.log("savepdf working...", this.state.data)
   axios.post('http://localhost:5000/saveData', 
       this.state.data
   )
       .then(function (response) {
           console.log(response);
       })
       .catch(function (error) {
           console.log(error);
       });
  

   const input = document.getElementById('Form1');
   html2canvas(input)
     .then((canvas) => {
         const imgData = canvas.toDataURL('image/png');
         const pdf = new jsPDF();
         pdf.addImage(imgData, 'JPEG', 0, 5, 215, 290);
         // pdf.output('dataurlnewwindow');
         pdf.save("download.pdf");
     });
 }
 
 sendmsg = () =>{
   let otpcheck ="" ;
    axios.get('http://localhost:5000/sendmsg')
       .then(async (response) => {
           otpcheck = response.data
           await this.setState({otpverify:response.data})
       })
       .catch(function (error) {
           console.log(error);
       });
    
       if(this.state.otpverify == this.state.data.otpnumber)
       {
         this.setState({secoundcheck:1});
         alert("Valid")
       }
       else{
         alert("Invalid OTP")
       }
     }
   
   sendno = ( )=> {
     this.setState({check:1});
     this.state.number.phonenumber = this.state.data.phonenumber;
     const dataa =  this.state.number.phonenumber;
     this.setState({dataa})
     console.log("sendno working...", this.state.number);
     axios.post('http://localhost:5000/sendnumber', 
     this.state.number
     )
         .then(function (response) {
             console.log(response);
         })
         .catch(function (error) {
             console.log(error);
         });
   
   }
   
   getdata =() =>{
       axios.get('http://localhost:5000/viewData')
     .then((response) => {
         console.log("testing" , response.data)
   
     })
     .catch(function (error) {
         console.log(error);
     });
   }
   
  

  handleCheckbox = (e,name) =>  {
    
    if(e.target.id === "IncomefromBusiness")
    {
       let val = !this.state.isEnabled;
       this.setState({isEnabled : val});
    }
    else {
       let val = false;
       this.setState({isEnabled : val});
    }
  
    const check = this.state.data;
    check[name] = e.target.id;
    this.setState({ check })
    
  }

  async validateLastName() {

   this.state.errors.LastName = " ";
   let tempLastName = this.state.errors.LastName;
   this.state.isModalEnabled =  true;
   this.setState ({tempLastName})
 
   if(this.state.data.LastName === " ")
   { 
       this.state.errors.LastName = "*Please enter your LastName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.LastName !== "undefined") {
       if (!this.state.data.LastName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.LastName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let errorLastName = this.state.errors.LastName;
   this.setState({errorLastName});

  }

  async validateFirstName() {
 
         
   this.state.errors.FirstName = " ";
   let temp = this.state.errors.FirstName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.FirstName === " ")
   { 
       this.state.errors.FirstName = "*Please enter your Firstname";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FirstName !== "undefined") {
       if (!this.state.data.FirstName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.FirstName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.FirstName;
   this.setState({val});
   
   
}

async validateMiddleName() {
         
   this.state.errors.MiddleName = " ";
   let temp = this.state.errors.MiddleName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.MiddleName === " ")
   { 
       this.state.errors.MiddleName = "*Please enter your MiddleName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.MiddleName !== "undefined") {
       if (!this.state.data.MiddleName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.MiddleName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.MiddleName;
   this.setState({val});
   
}

async validateAbbreviationOne() {
         
   this.state.errors.AbbreviationOne = " ";
   let temp = this.state.errors.AbbreviationOne;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.AbbreviationOne === " ")
   { 
       this.state.errors.AbbreviationOne = "*Please enter your AbbreviationOne";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.AbbreviationOne !== "undefined") {
       if (!this.state.data.AbbreviationOne.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.AbbreviationOne = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.AbbreviationOne;
   this.setState({val});
   
}


async validateAbbreviationTwo() {
         
   this.state.errors.AbbreviationTwo = " ";
   let temp = this.state.errors.AbbreviationTwo;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.AbbreviationTwo === " ")
   { 
       this.state.errors.AbbreviationTwo = "*Please enter your AbbreviationTwo";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.AbbreviationTwo !== "undefined") {
       if (!this.state.data.AbbreviationTwo.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.AbbreviationTwo = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.AbbreviationTwo;
   this.setState({val});
   
}

async validateOtherLastName() {
         
   this.state.errors.OtherLastName = " ";
   let temp = this.state.errors.OtherLastName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OtherLastName === " ")
   { 
       this.state.errors.OtherLastName = "*Please enter your Other LastName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OtherLastName !== "undefined") {
       if (!this.state.data.OtherLastName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.OtherLastName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OtherLastName;
   this.setState({val});
   
}

async validateOtherFirstName() {
         
   this.state.errors.OtherFirstName = " ";
   let temp = this.state.errors.OtherFirstName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OtherFirstName === " ")
   { 
       this.state.errors.OtherFirstName = "*Please enter your Other FirstName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OtherFirstName !== "undefined") {
       if (!this.state.data.OtherFirstName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.OtherFirstName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OtherFirstName;
   this.setState({val});
   
}

async validateOtherMiddleName() {
         
   this.state.errors.OtherMiddleName = " ";
   let temp = this.state.errors.OtherMiddleName;
   this.setState ({temp})
 
   if(this.state.data.OtherMiddleName === " ")
   { 
       this.state.errors.OtherMiddleName = "*Please enter your Other MiddleName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OtherMiddleName !== "undefined") {
       if (!this.state.data.OtherMiddleName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.OtherMiddleName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OtherMiddleName;
   this.setState({val});
   
}


async validateFatherFirstName() {
         
   this.state.errors.FatherFirstName = " ";
   let temp = this.state.errors.FatherFirstName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.FatherFirstName === " ")
   { 
       this.state.errors.FatherFirstName = "*Please enter your Father's FirstName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FatherFirstName !== "undefined") {
       if (!this.state.data.FatherFirstName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.FatherFirstName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.FatherFirstName;
   this.setState({val});
   
}


async validateFatherLastName() {
         
   this.state.errors.FatherLastName = " ";
   let temp = this.state.errors.FatherLastName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.FatherLastName === " ")
   { 
       this.state.errors.FatherLastName = "*Please enter your Father's LastName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FatherLastName !== "undefined") {
       if (!this.state.data.FatherLastName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.FatherLastName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.FatherLastName;
   this.setState({val});
   
}

async validateFatherMiddleName() {
         
   this.state.errors.FatherMiddleName = " ";
   let temp = this.state.errors.FatherMiddleName;
   this.state.isModalEnabled = true;
   this.setState ({temp})
 
   if(this.state.data.FatherMiddleName === " ")
   { 
       this.state.errors.FatherMiddleName = "*Please enter your Father's MiddleName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.FatherMiddleName !== "undefined") {
       if (!this.state.data.FatherMiddleName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.FatherMiddleName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.FatherMiddleName;
   this.setState({val});
   
}


async validateMotherFirstName() {
         
   this.state.errors.MotherFirstName = " ";
   let temp = this.state.errors.MotherFirstName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if (typeof  this.state.data.MotherFirstName !== "undefined") {
       if (!this.state.data.MotherFirstName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.MotherFirstName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.MotherFirstName;
   this.setState({val});
   
}


async validateMotherLastName() {
         
   this.state.errors.MotherLastName = " ";
   let temp = this.state.errors.MotherLastName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
  
   if (typeof  this.state.data.MotherLastName !== "undefined") {
       if (!this.state.data.MotherLastName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.MotherLastName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.MotherLastName;
   this.setState({val});
   
}

async validateMotherMiddleName() {
         
   this.state.errors.MotherMiddleName = " ";
   let temp = this.state.errors.MotherMiddleName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if (typeof  this.state.data.MotherMiddleName !== "undefined") {
       if (!this.state.data.MotherMiddleName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.MotherMiddleName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.MotherMiddleName;
   this.setState({val});
   
}


async validateRALastName() {
         
   this.state.errors.RALastName = " ";
   let temp = this.state.errors.RALastName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RALastName === " ")
   { 
       this.state.errors.RALastName = "*Please enter your Representative Aseessee's LastName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RALastName !== "undefined") {
       if (!this.state.data.RALastName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.RALastName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RALastName;
   this.setState({val});
   
}


async validateRAFirstName() {
      
   this.state.errors.RAFirstName = " ";
   let temp = this.state.errors.RAFirstName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RAFirstName === " ")
   { 
       this.state.errors.RAFirstName = "*Please enter your Representative Aseessee's FirstName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAFirstName !== "undefined") {
       if (!this.state.data.RAFirstName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.RAFirstName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RAFirstName;
   this.setState({val});
   
}


async validateRAMiddleName() {
         
   this.state.errors.RAMiddleName = " ";
   let temp = this.state.errors.RAMiddleName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RAMiddleName === " ")
   { 
       this.state.errors.RAMiddleName = "*Please enter your Representative Aseessee's MiddleName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAMiddleName !== "undefined") {
       if (!this.state.data.RAMiddleName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.RAMiddleName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.FatherMiddleName;
   this.setState({val});
   
}

async validateResidenceFlat() {
         
   this.state.errors.ResidenceFlat = " ";
   let temp = this.state.errors.ResidenceFlat;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.ResidenceFlat === " ")
   { 
       this.state.errors.ResidenceFlat = "*Please enter your Residence Flat / Room / Door / Block No.";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidenceFlat !== "undefined") {
       if (!this.state.data.ResidenceFlat.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.ResidenceFlat = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.ResidenceFlat;
   this.setState({val});
   
}

async validateResidencePremises() {
         
   this.state.errors.ResidencePremises = " ";
   let temp = this.state.errors.ResidencePremises;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.ResidencePremises === " ")
   { 
       this.state.errors.ResidencePremises = "*Please enter your Residence Premises / Building / Village";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.ResidencePremises !== "undefined") {
       if (!this.state.data.ResidencePremises.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.ResidencePremises = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.ResidencePremises;
   this.setState({val});
   
}

async validateResidenceRoad() {
         
   this.state.errors.ResidenceRoad = " ";
   let temp = this.state.errors.ResidenceRoad;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.ResidenceRoad === " ")
   { 
       this.state.errors.ResidenceRoad = "*Please enter your Residence Road / Street / Lane / Post Office";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.ResidenceRoad !== "undefined") {
       if (!this.state.data.ResidenceRoad.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.ResidenceRoad = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.ResidenceRoad;
   this.setState({val});
   
}


async validateResidenceArea() {
         
   this.state.errors.ResidenceArea = " ";
   let temp = this.state.errors.ResidenceArea;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.ResidenceArea === " ")
   { 
       this.state.errors.ResidenceArea = "*Please enter your Residence Area / Locality / Taluka / Sub-division";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.ResidenceArea !== "undefined") {
       if (!this.state.data.ResidenceArea.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.ResidenceArea = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.ResidenceArea;
   this.setState({val});
   
}

async validateResidenceTown() {
         
   this.state.errors.ResidenceTown = " ";
   let temp = this.state.errors.ResidenceTown;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.ResidenceTown === " ")
   { 
       this.state.errors.ResidenceTown = "*Please enter your Residence Town / City / District";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidenceTown !== "undefined") {
       if (!this.state.data.ResidenceTown.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.ResidenceTown = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.ResidenceTown;
   this.setState({val});
   
}


async validateOfficeName() {
         
   this.state.errors.OfficeName = " ";
   let temp = this.state.errors.OfficeName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficeName === " ")
   { 
       this.state.errors.OfficeName = "*Please enter your Office's Name";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeName !== "undefined") {
       if (!this.state.data.OfficeName.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.OfficeName = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficeName;
   this.setState({val});
   
}

async validateOfficeFlat() {
         
   this.state.errors.OfficeFlat = " ";
   let temp = this.state.errors.OfficeFlat;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficeFlat === " ")
   { 
       this.state.errors.OfficeFlat = "*Please enter your Office Flat / Room / Door / Block No.";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeFlat !== "undefined") {
       if (!this.state.data.OfficeFlat.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.OfficeFlat = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficeFlat;
   this.setState({val});
   
}

async validateOfficePremises() {
         
   this.state.errors.OfficePremises = " ";
   let temp = this.state.errors.OfficePremises;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficePremises === " ")
   { 
       this.state.errors.OfficePremises = "*Please enter your Office Premises / Building / Village";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficePremises !== "undefined") {
       if (!this.state.data.OfficePremises.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.OfficePremises = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficePremises;
   this.setState({val});
   
}

async validateOfficeRoad() {
         
   this.state.errors.OfficeRoad = " ";
   let temp = this.state.errors.OfficeRoad;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficeRoad === " ")
   { 
       this.state.errors.OfficeRoad = "*Please enter your Office Road / Street / Lane / Post Office";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeRoad !== "undefined") {
       if (!this.state.data.OfficeRoad.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.OfficeRoad = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficeRoad;
   this.setState({val});
   
}


async validateOfficeArea() {
         
   this.state.errors.OfficeArea = " ";
   let temp = this.state.errors.OfficeArea;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficeArea === " ")
   { 
       this.state.errors.OfficeArea = "*Please enter your Office Area / Locality / Taluka / Sub-division";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.OfficeArea !== "undefined") {
       if (!this.state.data.OfficeArea.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.OfficeArea = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficeArea;
   this.setState({val});
   
}

async validateOfficeTown() {
         
   this.state.errors.OfficeTown = " ";
   let temp = this.state.errors.OfficeTown;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficeTown === " ")
   { 
       this.state.errors.OfficeTown = "*Please enter your Office Town / City / District";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeTown !== "undefined") {
       if (!this.state.data.OfficeTown.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.OfficeTown = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficeTown;
   this.setState({val});
   
}


async validateRAFlat() {
         
   this.state.errors.RAFlat = " ";
   let temp = this.state.errors.RAFlat;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RAFlat === " ")
   { 
       this.state.errors.RAFlat = "*Please enter your Representative assesssee Flat / Room / Door / Block No.";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RAFlat !== "undefined") {
       if (!this.state.data.RAFlat.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.RAFlat = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RAFlat;
   this.setState({val});
   
}

async validateRAPremises() {
         
   this.state.errors.RAPremises = " ";
   let temp = this.state.errors.RAPremises;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RAPremises === " ")
   { 
       this.state.errors.RAPremises = "*Please enter your Representative assesssee Premises / Building / Village";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RAPremises !== "undefined") {
       if (!this.state.data.RAPremises.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.RAPremises = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RAPremises;
   this.setState({val});
   
}

async validateRARoad() {
         
   this.state.errors.RARoad = " ";
   let temp = this.state.errors.RARoad;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RARoad === " ")
   { 
       this.state.errors.RARoad = "*Please enter your Representative assesssee Road / Street / Lane / Post Office";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RARoad !== "undefined") {
       if (!this.state.data.RARoad.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.RARoad = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RARoad;
   this.setState({val});
   
}


async validateRAArea() {
         
   this.state.errors.RAArea = " ";
   let temp = this.state.errors.RAArea;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RAArea === " ")
   { 
       this.state.errors.RAArea = "*Please enter your Representative assesssee Area / Locality / Taluka / Sub-division";
       this.state.isModalEnabled =  false;
    }
   else if (typeof  this.state.data.RAArea !== "undefined") {
       if (!this.state.data.RAArea.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.RAArea = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RAArea;
   this.setState({val});
   
}

async validateRATown() {
         
   this.state.errors.RATown = " ";
   let temp = this.state.errors.RATown;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.RATown === " ")
   { 
       this.state.errors.RATown = "*Please enter your Representative assesssee Town / City / District";
       this.state.isModalEnabled =  false;
  }
   else if (typeof  this.state.data.RATown !== "undefined") {
       if (!this.state.data.RATown.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.RATown = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RATown;
   this.setState({val});
   
}


async validateAadhaarFirstName() {
         
   this.state.errors.AadhaarFirstName = " ";
   let temp = this.state.errors.AadhaarFirstName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.AadhaarFirstName === " ")
   { 
       this.state.errors.AadhaarFirstName = "*Please enter your FirstName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.AadhaarFirstName !== "undefined") {
       if (!this.state.data.AadhaarFirstName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.AadhaarFirstName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.AadhaarFirstName;
   this.setState({val});
   
}


async validateAadhaarLastName() {
         
   this.state.errors.AadhaarLastName = " ";
   let temp = this.state.errors.AadhaarLastName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.AadhaarLastName === " ")
   { 
       this.state.errors.AadhaarLastName = "*Please enter your LastName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.AadhaarLastName !== "undefined") {
       if (!this.state.data.AadhaarLastName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.AadhaarLastName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.AadhaarLastName;
   this.setState({val});
   
}

async validateAadhaarMiddleName() {
         
   this.state.errors.AadhaarMiddleName = " ";
   let temp = this.state.errors.AadhaarMiddleName;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.AadhaarMiddleName === " ")
   { 
       this.state.errors.AadhaarMiddleName = "*Please enter your MiddleName";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.AadhaarMiddleName !== "undefined") {
       if (!this.state.data.AadhaarMiddleName.match(/^[a-zA-Z ]*$/)) {
           this.state.errors.AadhaarMiddleName = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.AadhaarMiddleName;
   this.setState({val});
   
}


async validateAadhaarNumber() {
         
   this.state.errors.AadhaarNumber = " ";
   let temp = this.state.errors.AadhaarNumber;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
   
   
   if (typeof  this.state.data.AadhaarNumber !== "undefined") {
       if (!this.state.data.AadhaarNumber.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.AadhaarNumber = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.AadhaarNumber;
   this.setState({val});
   
}

async validateEnrolmentId() {
         
   this.state.errors.EnrolmentId = " ";
   let temp = this.state.errors.EnrolmentId;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if((this.state.data.AadhaarNumber === " ") && (this.state.data.EnrolmentId === " "))  
   { 
       this.state.errors.AadhaarNumber = "*Please enter your Aadhaar Number";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.EnrolmentId !== "undefined") {
       if (!this.state.data.EnrolmentId.match(/^[a-zA-Z0-9 ]*$/)) {
           this.state.errors.EnrolmentId = "*Please enter alphanumeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.EnrolmentId;
   this.setState({val});
   let val2 = this.state.errors.AadhaarNumber;
   this.setState({val2});
   
}


async validateRegistrationNumber() {
         
   this.state.errors.RegistrationNumber = " ";
   let temp = this.state.errors.RegistrationNumber;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if (typeof  this.state.data.RegistrationNumber !== "undefined") {
       if (!this.state.data.RegistrationNumber.match(/^[0-9 ]*$/)) {
           this.state.errors.RegistrationNumber = "*Please enter numeric characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RegistrationNumber;
   this.setState({val});
   
}

 

async validateResidencePincode() {
         
   this.state.errors.ResidencePincode = " ";
   let temp = this.state.errors.ResidencePincode;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.ResidencePincode === " ")
   { 
       this.state.errors.ResidencePincode = "*Please enter your Residence Pincode";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidencePincode !== "undefined") {
       if (!this.state.data.ResidencePincode.match(/^[0-9 ]*$/)) {
           this.state.errors.ResidencePincode = "*Please enter numbers only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.ResidencePincode;
   this.setState({val});
   
}

 

async validateOfficeState() {
         
   this.state.errors.OfficeState = " ";
   let temp = this.state.errors.OfficeState;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
   this.state.isModalEnabled =  true;
 
   if(this.state.data.OfficeState === " ")
   { 
       this.state.errors.OfficeState = "*Please enter your Office State";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeState !== "undefined") {
       if (!textPattern.test(this.state.data.OfficeState)) {
           this.state.errors.OfficeState = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
          
       }
   }

   let val = this.state.errors.OfficeState;
   this.setState({val});
   
}

async validateOfficePincode() {
         
   this.state.errors.OfficePincode = " ";
   let temp = this.state.errors.OfficePincode;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.OfficePincode === " ")
   { 
       this.state.errors.OfficePincode = "*Please enter your Office Pincode";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficePincode !== "undefined") {
       if (!this.state.data.OfficePincode.match(/^[0-9 ]*$/)) {
           this.state.errors.OfficePincode = "*Please enter numbers only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficePincode;
   this.setState({val});
   
}

async validateOfficeCountry() {
         
   this.state.errors.OfficeCountry = " ";
   let temp = this.state.errors.OfficeCountry;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
   this.state.isModalEnabled =  true; 
 
   if(this.state.data.OfficeCountry === " ")
   { 
       this.state.errors.OfficeCountry = "*Please enter your OfficeCountry";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeCountry !== "undefined") {
       if (!textPattern.test(this.state.data.OfficeCountry)) {
           this.state.errors.OfficeCountry = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.OfficeCountry;
   this.setState({val});
   
}

async validateRAState() {
         
   this.state.errors.RAState = " ";
   let temp = this.state.errors.RAState;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
   let checkdata = textPattern.test(this.state.data.RAState);
   this.state.isModalEnabled =  true;
 
   if(this.state.data.RAState === " ")
   { 
       this.state.errors.RAState = "*Please enter your Representative assessee's State";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAState !== "undefined") {
       if (!textPattern.test(this.state.data.RAState)) {
           this.state.errors.RAState = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RAState;
   this.setState({val});
   
}



async validateRAPincode() {
         
   this.state.errors.RAPincode = " ";
   let temp = this.state.errors.RAPincode;
   this.setState ({temp})
   this.state.isModalEnabled =  true;
 
   if(this.state.data.RAPincode === " ")
   { 
       this.state.errors.RAPincode = "*Please enter your Representative Assessee's Pincode";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAPincode !== "undefined") {
       if (!this.state.data.RAPincode.match(/^[0-9 ]*$/)) {
           this.state.errors.RAPincode = "*Please enter numbers only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.RAPincode;
   this.setState({val});
   
}

async validateCountryCode() {
         
   this.state.errors.CountryCode = " ";
   let temp = this.state.errors.CountryCode;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.CountryCode === " ")
   { 
       this.state.errors.CountryCode = "*Please enter your Country Code";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.CountryCode !== "undefined") {
       if (!this.state.data.CountryCode.match(/^[0-9 ]*$/)) {
           this.state.errors.CountryCode = "*Please enter numbers only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.CountryCode;
   this.setState({val});
   
}


async validateStdCode() {
         
   this.state.errors.StdCode = " ";
   let temp = this.state.errors.StdCode;
   this.setState ({temp})
   this.state.isModalEnabled =  true;
 
   if(this.state.data.StdCode === " ")
   { 
       this.state.errors.StdCode = "*Please enter your Std Code";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.StdCode !== "undefined") {
       if (!this.state.data.StdCode.match(/^[0-9 ]*$/)) {
           this.state.errors.StdCode = "*Please enter numbers only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.StdCode;
   this.setState({val});
   
}


async validatePhoneNumber() {
         
   this.state.errors.PhoneNumber = " ";
   let temp = this.state.errors.PhoneNumber;
   this.setState ({temp})
   this.state.isModalEnabled =  true;
 
   if(this.state.data.PhoneNumber === " ")
   { 
       this.state.errors.PhoneNumber = "*Please enter your Phone Number";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.PhoneNumber !== "undefined") {
       if (!this.state.data.PhoneNumber.match(/^[0-9 ]*$/)) {
           this.state.errors.PhoneNumber = "*Please enter numbers only.";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.PhoneNumber;
   this.setState({val});
   
}

async validateDay() {
         
   this.state.errors.Day = " ";
   this.state.isModalEnabled =  true;
   let temp = this.state.errors.Day;
   this.setState ({temp})
 
   if(this.state.data.Day === " ")
   { 
       this.state.errors.Day = "*Please enter your Birth Day";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Day !== "undefined") {
       if (!this.state.data.Day.match(/^(0?[1-9]|[12][0-9]|3[01])$/)) {
           this.state.errors.Day = "*Please enter valid Day";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.Day;
   this.setState({val});
   
}

async validateMonth() {
         
   this.state.errors.Month = " ";
   let temp = this.state.errors.Month;
   this.setState ({temp})
   this.state.isModalEnabled =  true;
 
   if(this.state.data.Month === " ")
   { 
       this.state.errors.Month = "*Please enter your Birth Month";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Month !== "undefined") {
       if (!this.state.data.Month.match(/^(0[1-9]|1[0-2])$/)) {
           this.state.errors.Month = "*Please enter valid month";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.Month;
   this.setState({val});
   
}

async validateYear() {
         
   this.state.errors.Year = " ";
   let temp = this.state.errors.Year;
   this.state.isModalEnabled =  true;
   this.setState ({temp})
 
   if(this.state.data.Year === " ")
   { 
       this.state.errors.Year = "*Please enter your Birth Year";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Year !== "undefined") {
       if (!this.state.data.Year.match(/^\d{4}$/)) {
           this.state.errors.Year = "*Please enter valid Year";
           this.state.isModalEnabled =  false;
       }
   }

   let val = this.state.errors.Year;
   this.setState({val});
   
}

  
   
  handleResidenceState = (event) => {

    let ResidenceState = this.state.data;
    let {name,value} =event.target;
    this.setState(ResidenceState);
    ResidenceState[name] = value;  
    this.state.isModalEnabled =  true;

    this.state.errors.ResidenceState = " ";
    let temp = this.state.errors.ResidenceState;
    this.setState ({temp})
    let textPattern = /^[a-zA-Z ]*$/ 
   

    if(this.state.data.ResidenceState === " ")
    { 
        this.state.errors.ResidenceState = "*Please enter your Residence State";
        this.state.isModalEnabled =  false;
    }
    else if (typeof  this.state.data.ResidenceState !== "undefined") {
        if (!textPattern.test(this.state.data.ResidenceState)) {
            this.state.errors.ResidenceState = "*Please enter alphabet characters only.";
            this.state.isModalEnabled =  false;
        }
    }

    let error = this.state.errors.ResidenceState;
    this.setState({error});
  }


  handleResidenceCountry = (event) => {

   let ResidenceCountry = this.state.data;
   let {name,value} =event.target;
   this.setState(ResidenceCountry);
   ResidenceCountry[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.ResidenceCountry = " ";
   let temp = this.state.errors.ResidenceCountry;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  

   if(this.state.data.ResidenceCountry === " ")
   { 
       this.state.errors.ResidenceCountry = "*Please enter your Residence Country";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.ResidenceCountry !== "undefined") {
       if (!textPattern.test(this.state.data.ResidenceCountry)) {
           this.state.errors.ResidenceCountry = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.ResidenceCountry;
   this.setState({error});
 }


 handleOfficeState = (event) => {

   let OfficeState = this.state.data;
   let {name,value} =event.target;
   this.setState(OfficeState);
   OfficeState[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.OfficeState = " ";
   let temp = this.state.errors.OfficeState;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  

   if(this.state.data.OfficeState === " ")
   { 
       this.state.errors.OfficeState = "*Please enter your Office State";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeState !== "undefined") {
       if (!textPattern.test(this.state.data.OfficeState)) {
           this.state.errors.OfficeState = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.OfficeState;
   this.setState({error});
 }


 handleOfficeCountry = (event) => {

   let OfficeCountry = this.state.data;
   let {name,value} =event.target;
   this.setState(OfficeCountry);
   OfficeCountry[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.OfficeCountry = " ";
   let temp = this.state.errors.OfficeCountry;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.OfficeCountry === " ")
   { 
       this.state.errors.OfficeCountry = "*Please enter your Office Country";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.OfficeCountry !== "undefined") {
       if (!textPattern.test(this.state.data.OfficeCountry)) {
           this.state.errors.OfficeCountry = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.OfficeCountry;
   this.setState({error});
 }

 handleRAState = (event) => {

   let RAState = this.state.data;
   let {name,value} =event.target;
   this.setState(RAState);
   RAState[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.RAState = " ";
   let temp = this.state.errors.RAState;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.RAState === " ")
   { 
       this.state.errors.RAState = "*Please enter your Representative Assessee's State";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.RAState !== "undefined") {
       if (!textPattern.test(this.state.data.RAState)) {
           this.state.errors.RAState = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.RAState;
   this.setState({error});
 }


 handlePOI = (event) => {

   let POI = this.state.data;
   let {name,value} =event.target;
   this.setState(POI);
   POI[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.POI = " ";
   let temp = this.state.errors.POI;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.POI === " ")
   { 
       this.state.errors.POI = "*Please enter your Proof Of Identity";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.POI !== "undefined") {
       if (!textPattern.test(this.state.data.POI)) {
           this.state.errors.POI = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.POI;
   this.setState({error});
 }


 handlePOA = (event) => {

   let POA = this.state.data;
   let {name,value} =event.target;
   this.setState(POA);
   POA[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.POA = " ";
   let temp = this.state.errors.POA;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.POA === " ")
   { 
       this.state.errors.POA = "*Please enter your Proof Of Address";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.POA !== "undefined") {
       if (!textPattern.test(this.state.data.POA)) {
           this.state.errors.POA = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.POA;
   this.setState({error});
 }


 handlePOB = (event) => {

   let POB = this.state.data;
   let {name,value} =event.target;
   this.setState(POB);
   POB[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.POB = " ";
   let temp = this.state.errors.POB;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.POB === " ")
   { 
       this.state.errors.POB = "*Please enter your Proof Of Birth";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.POB !== "undefined") {
       if (!textPattern.test(this.state.data.POB)) {
           this.state.errors.POB = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.POB;
   this.setState({error});
 }


 handleApplicant = (event) => {

   let Applicant = this.state.data;
   let {name,value} =event.target;
   this.setState(Applicant);
   Applicant[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.Applicant = " ";
   let temp = this.state.errors.Applicant;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.Applicant === " ")
   { 
       this.state.errors.Applicant = "*Please enter your Applicant's name";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Applicant !== "undefined") {
       if (!textPattern.test(this.state.data.Applicant)) {
           this.state.errors.Applicant = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.Applicant;
   this.setState({error});
 }

 handleCapacity = (event) => {

   let Capacity = this.state.data;
   let {name,value} =event.target;
   this.setState(Capacity);
   Capacity[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.Capacity = " ";
   let temp = this.state.errors.Capacity;
   this.setState ({temp})
   let textPattern = /^[a-zA-Z ]*$/ 
  
   
   if(this.state.data.Capacity === " ")
   { 
       this.state.errors.Capacity = "*Please enter your Capacity";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Capacity !== "undefined") {
       if (!textPattern.test(this.state.data.Capacity)) {
           this.state.errors.Capacity = "*Please enter alphabet characters only.";
           this.state.isModalEnabled =  false;
       }
   }

   let error = this.state.errors.Capacity;
   this.setState({error});
 }


 handleEmail = (event) => {

   let Email = this.state.data;
   let {name,value} =event.target;
   this.setState(Email);
   Email[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.Email = " ";
   let temp = this.state.errors.Email;
   this.setState ({temp})
   let textPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
  

   if(this.state.data.Email === " ")
   { 
       this.state.errors.Email = "*Please enter your Email";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.Email !== "undefined") {
       if (!textPattern.test(this.state.data.Email)) {
           this.state.errors.Email = "*Please enter valid Eamil-id";
           this.state.isModalEnabled =  false;
       }
   }
   
    
   let error = this.state.errors.Email;
   this.setState({error});
 }

 handleBusinessCode1 = (event) => {
 
   let BusinessCode1 = this.state.data;
   let {name,value} =event.target;
   this.setState(BusinessCode1);
   BusinessCode1[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.BusinessCode = " ";
   let temp = this.state.errors.BusinessCode;
   this.setState ({temp})
   let textPattern = /^[0-9]*$/ 
  
   
   if(this.state.data.BusinessCode1 === " ")
   { 
       this.state.errors.BusinessCode = "*Please enter your Business code";
       this.state.isModalEnabled =  false;
   }
   else if (typeof  this.state.data.BusinessCode1 !== "undefined") {
       if (!textPattern.test(this.state.data.BusinessCode1)) {
           this.state.errors.BusinessCode = "*Please enter valid Business Code";
           this.state.isModalEnabled =  false;
       }
   }
   let error = this.state.errors.BusinessCode;
   console.log(this.state.errors.BusinessCode);
   this.setState({error});
    
 }


 handleBusinessCode2 = (event) => {
 
   let BusinessCode2 = this.state.data;
   let {name,value} =event.target;
   this.setState(BusinessCode2);
   BusinessCode2[name] = value;  
   this.state.isModalEnabled =  true;

   this.state.errors.BusinessCode = " ";
   let temp = this.state.errors.BusinessCode;
   this.setState ({temp})
   let textPattern = /^[0-9]*$/ 
  
   
   if (typeof  this.state.data.BusinessCode2 !== "undefined") {
       if (!textPattern.test(this.state.data.BusinessCode2)) {
           this.state.errors.BusinessCode = "*Please enter valid Business Code";
           this.state.isModalEnabled =  false;
       }
   }
   let error = this.state.errors.BusinessCode;
   this.setState({error});

   this.state.data.BusinessCode = this.state.data.BusinessCode1 + this.state.data.BusinessCode2;
  
 }


  handleInput = (otp, name, id) => {
  
   if (id === "1") {
     let textPattern = /[!@#$%^&*(),.?":{}|<>]/ 
     let checkdata = textPattern.test(otp);
  
     if (checkdata !== "true") {
       const datainput = this.state.data;
       datainput[name] = otp;
       this.setState({ datainput })
       
     }

     if(name === "FirstName")
     {
        this.validateFirstName();
     }
     if(name === "LastName")
     {
        this.validateLastName();
     }
     if(name === "MiddleName")
     {
        this.validateMiddleName();
     }
     if(name === "AbbreviationOne")
     {
        this.validateAbbreviationOne();
     }
     if(name === "AbbreviationTwo")
     {
        this.validateAbbreviationTwo();
     }
     if(name === "OtherLastName")
     {
        this.validateOtherLastName();
     }
     if(name === "OtherFirstName")
     {
        this.validateOtherFirstName();
     }
     if(name === "OtherMiddleName")
     {
        this.validateOtherMiddleName();
     }
     if(name === "FatherLastName")
     {
        this.validateFatherLastName();
     }
     if(name === "FatherFirstName")
     {
        this.validateFatherFirstName();
     }
     if(name === "FatherMiddleName")
     {
        this.validateFatherMiddleName();
     }
     if(name === "MotherLastName")
     {
        this.validateMotherLastName();
     }
     if(name === "MotherFirstName")
     {
        this.validateMotherFirstName();
     }
     if(name === "MotherMiddleName")
     {
        this.validateMotherMiddleName();
     }
     if(name === "RALastName")
     {
        this.validateRALastName();
     }
     if(name === "RAFirstName")
     {
        this.validateRAFirstName();
     }
     if(name === "RAMiddleName")
     {
        this.validateRAMiddleName();
     }
     if(name === "ResidenceFlat")
     {
        this.validateResidenceFlat();
     }
     if(name === "ResidencePremises")
     {
        this.validateResidencePremises();
     }
     if(name === "ResidenceRoad")
     {
        this.validateResidenceRoad();
     }
     if(name === "ResidenceArea")
     {
        this.validateResidenceArea();
     }
     if(name === "ResidenceTown")
     {
        this.validateResidenceTown();
     }
     if(name === "OfficeName")
     {
        this.validateOfficeName();
     }
     if(name === "OfficeFlat")
     {
        this.validateOfficeFlat();
     }
     if(name === "OfficePremises")
     {
        this.validateOfficePremises();
     }
     if(name === "OfficeRoad")
     {
        this.validateOfficeRoad();
     }
     if(name === "OfficeArea")
     {
        this.validateOfficeArea();
     }
     if(name === "OfficeTown")
     {
        this.validateOfficeTown();
     }
     if(name === "RAFlat")
     {
        this.validateRAFlat();
     }
     if(name === "RAPremises")
     {
        this.validateRAPremises();
     }
     if(name === "RARoad")
     {
        this.validateRARoad();
     }
     if(name === "RAArea")
     {
        this.validateRAArea();
     }
     if(name === "RATown")
     {
        this.validateRATown();
     }
     if(name === "AadhaarLastName")
     {
        this.validateAadhaarLastName();
     }
     if(name === "AadhaarFirstName")
     {
        this.validateAadhaarFirstName();
     }
     if(name === "AadhaarMiddleName")
     {
        this.validateAadhaarMiddleName();
     }
     if(name === "AadhaarNumber")
     {
        this.validateAadhaarNumber();
     }
     if(name === "EnrolmentId")
     {
        this.validateEnrolmentId();
     }
     if(name === "RegistrationNumber")
     {
        this.validateRegistrationNumber();
     }
     if(name === "ResidencePincode")
     {
        this.validateResidencePincode();
     }
     if(name === "OfficePincode")
     {
        this.validateOfficePincode();
     }
     if(name === "RAState")
     {
        this.validateRAState();
     }
     if(name === "RAPincode")
     {
        this.validateRAPincode();
     }
     if(name === "CountryCode")
     {
        this.validateCountryCode();
     }
     if(name === "StdCode")
     {
        this.validateStdCode();
     }
     if(name === "PhoneNumber")
     {
        this.validatePhoneNumber();
     }
     if(name === "Day")
     {
        this.validateDay();
     }
     if(name === "Month")
     {
        this.validateMonth();
     }
     if(name === "Year")
     {
        this.validateYear();
     }
     
   }
    
 }

  handleSave = () => {
   console.log("handleSave works...", this.state.data)
   axios.post('http://localhost:5000/saveData', 
       this.state.data)
       .then(function (response) {
           console.log(response);
       })
       .catch(function (error) {
           console.log(error);
       });
  }
 

  render() {

    const { open } = this.state;
    return (

       <div>
       <div className="nav">
       <div className="navbar">
       <label className="navtitle">Panform</label>
       <button class="button button3 navbutton"  onClick={this.onOpenModal}>Download </button>
        </div>
        <Modal   open={open} onClose={this.onCloseModal} center>
            <br />
            <div className="modalhead container">
            <label>Enter your mobile number:</label><br />
            <div className="mobilenumber">
            <OtpInput
              className = ""
              value={this.state.data.phonenumber}
              onChange={otp => this.handleInput(otp,"phonenumber","1")}
              numInputs={10} 
            />
            </div>
            <br />
            <button onClick={this.sendno}>Send OTP</button><br /><br />
            {this.state.check === 1 ?  
              <div>
              <div className="otpnumber">
              <OtpInput
                className = ""
                value={this.state.data.otpnumber}
                onChange={otp => this.handleInput(otp,"otpnumber","1")}
                numInputs={6} 
              />
              </div>
              <br />
              <button onClick={this.sendmsg}>Verify OTP</button><br /><br />
              {this.state.secoundcheck === 1 ?
              <div>
               <button onClick={this.savepdf}>Save & Download</button> &nbsp; &nbsp; &nbsp; OR &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
               <button onClick={this.getdata}>Get data</button>
               </div>
               : 
               ""
               }
            </div> 
            :
            "" 
            }
            </div>
            </Modal>
                
            </div> <br />

        <div id = "Form1">    
        <div className="Form1" ><br />
           <div className = "box"> 

                <div>
                <table >
                  <col width="10%" />
                  <col width="50%" />
                  <col width="10%" />
                  <tr>
                    <td > 
                        <div className="tablebox1">
                        </div>
                        <div className="tablebox11">
                        <label></label></div> </td>
                    <td >
                    <div className="column2">
                      
                    <label className="row1"> Form No. 49A</label><br /> 
                    <label className="row2"> Application for Allotment of Permanent Account Number</label><br />
                    <label className="row3">[In the case of Indian Citizens/lndian Companies/Entities incorporated in India/</label><br />
                    <label className="row4">Unincorporated entities formed in India]</label><br />
                    <label className="row5">See Rule 114</label><br />
                    <label className="row6">To avoid mistake (s), please follow the accompanying instructions and examples before filling up the form</label>
                  
                  </div>  
                   </td>
                   <td>   <div className="tablebox2"></div></td>
                  </tr>
                </table>
                <label className = "FirstLabel">Sir, </label> <br/>
                <label className = "FirstLabel">I/We hereby request that a permanent account number be alloted to me/us. </label> <br/>
                <label className = "FirstLabel">I/We give below necessary particulars: </label> <br/>
 
                </div>

                <div className = "content">  
 
                   {/* First Component...... */}
                   <div className = "ColouredLabel"> 
                      <label > &nbsp; &nbsp;1 &nbsp; Full Name (Full expanded name to be mentioned as appearing in proof of identity/date of birth/address documents: initials are not permitted)</label>
                   </div>


                   <label className="FirstLabel"> Please select title,</label>
                   <img src= {tick} alt = "tick" className = "image"/>  
                   <label className="Label_with_no_space"> as applicable</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id="Shri" 
                       name="NameTitleOne[1][]"  
                       onClick={(e)=>this.handleCheckbox(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> Shri</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "Smt."
                      name = "NameTitleOne[1][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> Smt.</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "Kumari"
                      name = "NameTitleOne[1][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> Kumari</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "M/s"
                      name = "NameTitleOne[1][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleOne")}/>

                   <label className="Label_with_no_space"> M/s</label> <br />

                   <table>
                    <tbody> 
                      <tr>
                         <td className ="first_td">
                            {this.state.name.map((data, index) =>
                               <label className="elements"> {data} <br/> </label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                              name="LastName"
                              value={this.state.data.LastName}
                              onChange={otp => this.handleInput(otp, "LastName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.LastName}</span>
                            <OtpInput
                              name="FirstName"
                              value={this.state.data.FirstName}
                              onChange={otp => this.handleInput(otp, "FirstName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.FirstName}</span>
                            <OtpInput
                              name="MiddleName"
                              value={this.state.data.MiddleName}
                              onChange={otp => this.handleInput(otp, "MiddleName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.MiddleName}</span>

                         </td>
                      </tr>
                      </tbody>
                   </table>
                   

                   {/* Second Component */}

                   <div className = "ColouredLabel">
                      <label > &nbsp; &nbsp;2 &nbsp; Abbreviations of the above name, as you would like it, to be printed on the PAN card</label>
                     
                   </div>
                   
                   <div className = "box_left"> 
                      <OtpInput  
                         name="AbbreviationOne"
                         value={this.state.data.AbbreviationOne}
                         onChange={otp => this.handleInput(otp, "AbbreviationOne" , "1")}
                         numInputs={37}
                      />
                      <span className="ErrorMsg">{this.state.errors.AbbreviationOne}</span>
                      <OtpInput
                         name="AbbreviationTwo"
                         value={this.state.data.AbbreviationTwo}
                         onChange={otp => this.handleInput(otp, "AbbreviationTwo" , "1")}
                         numInputs={37}
                      />
                       <span className="ErrorMsg">{this.state.errors.AbbreviationTwo}</span>

                   </div>

                   {/* Third Component */}

                   <div className = "ColouredLabel"> 
                        
                        <label> &nbsp; &nbsp;3 &nbsp; Have you ever been known by any other name?  </label> 
                         &nbsp; &nbsp;
                        <input 
                           type="checkbox" 
                           className = "Check" 
                           id = "Yes"
                           name="OtherName[2][]"
                           onClick={(e)=>this.handleCheckbox(e,"OtherName")}/>
                        <label className="Label_with_no_space"> Yes</label> 

                         &nbsp; &nbsp;
                        <input 
                           type="checkbox" 
                           className = "Check"
                           id = "No" 
                           name="OtherName[2][]"
                           onClick={(e)=>this.handleCheckbox(e,"OtherName")}/>
                        <label className="Label_with_no_space"> No</label> 

                        
                        <label className="Label_with_no_space Move_End"> (please tick as applicable)</label> 
  
                   </div>

                   <div id = "OtherNameDiv" >
                   <label className="FirstLabel small_font"> If yes, please give that other name</label> <br/>
                   <label className="FirstLabel"> Please select title,</label>
                   <img src= {tick} alt = "tick" className = "image"/>  
                   <label className="Label_with_no_space"> as applicable</label>
          
                   
                   <input 
                       type="checkbox" 
                       className="Check" 
                       id="Shri" 
                       name="NameTitleTwo[3][]"  
                       onClick={(e)=>this.handleCheckbox(e,"NameTitleTwo")}/>
                   <label className="Label_with_no_space"> Shri</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id= "Smt."
                       name= "NameTitleTwo[3][]"
                       onClick = {(e) => this.handleCheckbox(e, "NameTitleTwo")}/>
                   <label className="Label_with_no_space"> Smt.</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id= "Kumari"
                       name= "NameTitleTwo[3][]"
                       onClick = {(e) => this.handleCheckbox(e, "NameTitleTwo")}/>
                   <label className="Label_with_no_space"> Kumari</label>

                   <input 
                       type="checkbox" 
                       className="Check" 
                       id= "M/s"
                       name= "NameTitleTwo[3][]"
                       onClick = {(e) => this.handleCheckbox(e, "NameTitleTwo")}/>
                   <label className="Label_with_no_space"> M/s</label> <br />
                    
                   <table>
                   <tbody>
                      <tr>
                         <td className ="first_td">
                           {this.state.name.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                              name="OtherLastName"
                              value={this.state.data.OtherLastName}
                              onChange={otp => this.handleInput(otp, "OtherLastName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OtherLastName}</span>

                            <OtpInput
                              name="OtherFirstName"
                              value={this.state.data.OtherFirstName}
                              onChange={otp => this.handleInput(otp, "OtherFirstName" , "1")}
                              numInputs={25}
                            />
                             <span className="ErrorMsg">{this.state.errors.OtherFirstName}</span>

                            <OtpInput
                              name="OtherMiddleName"
                              value={this.state.data.OtherMiddleName}
                              onChange={otp => this.handleInput(otp, "OtherMiddleName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OtherMiddleName}</span>

                         </td>
                      </tr>
                   </tbody>
                   </table>
                   </div>
                    
   

                  {/* Fourth Component */}
                  
                   <div className = "ColouredLabel">
                         <label>&nbsp;&nbsp; 4 &nbsp; Gender (for Individual applicants only)</label>

                         <input 
                           type="checkbox" 
                           className="Check" 
                           id= "Male"
                           name= "Gender[4][]"
                           onClick = {(e) => this.handleCheckbox(e, "Gender")}/>
                         <label className="Label_with_no_space"> Male</label>

                         <input 
                           type="checkbox" 
                           className="Check" 
                           id= "Female"
                           name= "Gender[4][]"
                           onClick = {(e) => this.handleCheckbox(e, "Gender")}/>
                         <label className="Label_with_no_space"> Female</label>

                         <input 
                           type="checkbox" 
                           className="Check" 
                           id= "Transgender"
                           name= "Gender[4][]"
                           onClick = {(e) => this.handleCheckbox(e, "Gender")}/>
                         <label className="Label_with_no_space"> Transgender</label>

                         <label className="Label_with_no_space Move_End1"> (please tick as applicable)</label> 
                   </div>

                   {/* Fifth Component */}

                   <div className = "ColouredLabel Top_space" > 
                        <label> &nbsp;&nbsp; 5 &nbsp; Date of Birth/Incorporation/Agreement/Partnership or 
                          Trust Deed/ Formation of Body of individuals or Association of Persons</label>
                   </div>

                   <div className= "divfive">
                       <table>
                       <tbody>
                          <tr>
                            <td  className ="Day_td">
                              <label  className ="Day" >Day </label>
                            </td>
                            <td className="Month_td" >
                               <label className = "Month">Month</label>
                            </td>
                            <td className = "Year_td">
                               <label className = "Year">Year</label>
                            </td>
                          </tr>

                          <tr>
                            <td >
                               <OtpInput
                                  className = "Day_td"
                                  name="Day"
                                  value={this.state.data.Day}
                                  onChange={otp => this.handleInput(otp, "Day" , "1")}
                                  numInputs={2} 
                               />
                           </td>  
                           <td >
                              <OtpInput
                                className = "Month_td"
                                name="Month"
                                value={this.state.data.Month}
                                onChange={otp => this.handleInput(otp, "Month" , "1")}
                                numInputs={2}
                              />
                           </td>
                           <td className = "Year_td">
                              <OtpInput
                                 name="Year"
                                 value={this.state.data.Year}
                                 onChange={otp => this.handleInput(otp, "Year" , "1")}
                                 numInputs={4}
                           />
                           </td>
                          </tr>
                       </tbody>
                       </table>
                       <span className="ErrorMsg">{this.state.errors.Day} </span> 
                       <span className="ErrorMsg">{this.state.errors.Month}</span> 
                       <span className="ErrorMsg">{this.state.errors.Year}</span> 
            
                    </div>

                   {/* Sixth Component */}

                   <div className = "ColouredLabel">

                      <label >&nbsp;&nbsp; 6 &nbsp;  Details of Parents (applicable only for individual applicants)</label>
                   </div>

                   <label className="FirstLabel Bold">Father’s Name (Mandatory. Even married women should fill in father’s name only)</label><br />
                   
                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.name.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                              name="FatherLastName"
                              value={this.state.data.FatherLastName}
                              onChange={otp => this.handleInput(otp, "FatherLastName" , "1")}
                              numInputs={25}
                            />
                           <span className="ErrorMsg">{this.state.errors.FatherLastName}</span>

                            <OtpInput
                              name="FatherFirstName"
                              value={this.state.data.FatherFirstName}
                              onChange={otp => this.handleInput(otp, "FatherFirstName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.FatherFirstName}</span>

                            <OtpInput
                              name="FatherMiddleName"
                              value={this.state.data.FatherMiddleName}
                              onChange={otp => this.handleInput(otp, "FatherMiddleName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.FatherMiddleName}</span>

                         </td>
                      </tr>
                    </tbody>
                    </table>
                    
                    <label className="FirstLabel Bold">Mother’s Name (optional)</label><br />

                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.name.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                             name="MotherLastName"
                             value={this.state.data.MotherLastName}
                             onChange={otp => this.handleInput(otp, "MotherLastName" , "1")}
                             numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.MotherLastName}</span> 

                            <OtpInput
                              name="MotherFirstName"
                              value={this.state.data.MotherFirstName}
                              onChange={otp => this.handleInput(otp, "MotherFirstName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.MotherFirstName}</span>

                            <OtpInput
                              name="MotherMiddleName"
                              value={this.state.data.MotherMiddleName}
                              onChange={otp => this.handleInput(otp, "MotherMiddleName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.MotherMiddleName}</span>

                         </td>
                      </tr>
                    </tbody>
                    </table>

                    <label className="FirstLabel">  Select the name of either father or mother which you may like to be printed on PAN card (Select one only)</label><br />
                    <label className="FirstLabel">(In case no option is provided then PAN card will be issued with father’s name)</label><br/>
               
                     
                    <input 
                      type="checkbox" 
                      className="Check Center_space"
                      id = "Father's name"
                      name = "ParentName[5][]"
                      onClick={(e)=>this.handleCheckbox(e,"ParentName")}/>
                    <label className="Label_with_no_space">Father’s name</label> 

                    <input 
                      type="checkbox" 
                      className="Check Left_space"
                      id = "Father's name"
                      name = "ParentName[5][]"
                      onClick={(e)=>this.handleCheckbox(e,"ParentName")}/>
                    <label className="Label_with_no_space">Mother’s name</label> 
                    <label className="Italic_text">(Please tick as applicable)</label>


                  {/* Seventh Component */}

                    <div  className = "ColouredLabel">
                       <label> &nbsp;&nbsp; 7 &nbsp; Address </label>
                    </div>

                    <label className="FirstLabel Bold"> Residence Address</label><br />

                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.addressTwo.map((data, index) =>
                               <label className="elements"> {data}  <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                               name="ResidenceFlat"
                               value={this.state.data.ResidenceFlat}
                               onChange={otp => this.handleInput(otp, "ResidenceFlat" , "1")}
                               numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.ResidenceFlat}</span> 

                            <OtpInput
                               name="ResidencePremises"
                               value={this.state.data.ResidencePremises}
                               onChange={otp => this.handleInput(otp, "ResidencePremises" , "1")}
                               numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.ResidencePremises}</span> 

                            <OtpInput
                              name="ResidenceRoad"
                              value={this.state.data.ResidenceRoad}
                              onChange={otp => this.handleInput(otp, "ResidenceRoad" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.ResidenceRoad}</span> 

                            <OtpInput
                               name="ResidenceArea"
                               value={this.state.data.ResidenceArea}
                               onChange={otp => this.handleInput(otp, "ResidenceArea" , "1")}
                               numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.ResidenceArea}</span> 

                            <OtpInput
                              name="ResidenceTown"
                              value={this.state.data.ResidenceTown}
                              onChange={otp => this.handleInput(otp, "ResidenceTown" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.ResidenceTown}</span> 

                         </td>
                      </tr>
                    </tbody>
                    </table>

                    <table cellPadding = "0" cellSpacing = "0"  className = "divState">
                    <tbody>
                        <tr>
                           <td >
                     
                             <label className = "StateId"> State / Union Territory </label>
                          </td>
                          <td >
                             <label className = "PincodeId"> Pincode / Zip code </label>
                          </td>
                          <td >
                             <label className = "CountryId"> Country Name </label>
                          </td>
                       </tr>
                       <tr>
                          <td >
                             
                             <input 
                                className = "StateValue"
                                name="ResidenceState"
                                value={this.state.data.ResidenceState}
                                onChange={event => this.handleResidenceState(event)}/>
                             
                          </td>
                          <td> 
                             <OtpInput
                                className = "PincodeValue"
                                name="ResidencePincode"
                                value={this.state.data.ResidencePincode}
                                onChange={otp => this.handleInput(otp, "ResidencePincode" , "1")}
                                numInputs={7}
                             />
                             

                           </td>
                           <td cellPadding = "0" cellSpacing = "0">
                             <input 
                                className = "CountryValue"
                                name="ResidenceCountry"
                                value={this.state.data.ResidenceCountry}
                                onChange={event => this.handleResidenceCountry(event)}/>
                             
                           </td>
                            
                       </tr>
                       <span className="ErrorMsg">{this.state.errors.ResidenceState}</span>
                       <span className="ErrorMsg">{this.state.errors.ResidencePincode}</span>
                       <span className="ErrorMsg">{this.state.errors.ResidenceCountry}</span>
                    </tbody>
                    </table>

                    </div>
                    <br /><br />

                    </div>
                    <br />
                    </div>
                    <br /><br />
                    <div className="Form2">
                    <br />
                    <div className="box2">
                     <div className="content2">

                    <label className = "FirstLabel Bold">Office Address </label> <br/>


                    <table>
                    <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.address.map((data, index) =>
                               <label className="elements"> {data} <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                               name="OfficeName"
                               value={this.state.data.OfficeName}
                               onChange={otp => this.handleInput(otp, "OfficeName" , "1")}
                               numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OfficeName}</span>

                            <OtpInput
                              name="OfficeFlat"
                              value={this.state.data.OfficeFlat}
                              onChange={otp => this.handleInput(otp, "OfficeFlat" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OfficeFlat}</span>

                            <OtpInput
                              name="OfficePremises"
                              value={this.state.data.OfficePremises}
                              onChange={otp => this.handleInput(otp, "OfficePremises" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OfficePremises}</span>

                            <OtpInput
                              name="OfficeRoad"
                              value={this.state.data.OfficeRoad}
                              onChange={otp => this.handleInput(otp, "OfficeRoad" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OfficeRoad}</span>

                            <OtpInput
                              name="OfficeArea"
                              value={this.state.data.OfficeArea}
                              onChange={otp => this.handleInput(otp, "OfficeArea" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OfficeArea}</span>

                            <OtpInput
                              name="OfficeTown"
                              value={this.state.data.OfficeTown}
                              onChange={otp => this.handleInput(otp, "OfficeTown" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.OfficeTown}</span>

                         </td>
                      </tr>
                    </tbody>
                    </table>
                     
                    <table cellPadding = "0" cellSpacing = "0"  className = "divState">
                    <tbody>
                        <tr>
                           <td >
                             <label className = "StateId"> State / Union Territory </label>
                          </td>
                          <td >
                             <label className = "PincodeId"> Pincode / Zip code </label>
                          </td>
                          <td >
                             <label className = "CountryId"> Country Name </label>
                          </td>
                       </tr>
                       <tr>
                          <td >
                             <input 
                                 className = "StateValue"
                                 name="OfficeState"
                                 value={this.state.data.OfficeState}
                                 onChange={event => this.handleOfficeState(event)}/>
                                
                          </td>
                          <td> 
                             <OtpInput
                                className = "PincodeValue"
                                name="OfficePincode"
                                value={this.state.data.OfficePincode}
                                onChange={otp => this.handleInput(otp, "OfficePincode" , "1")}
                                numInputs={7}
                             />
                               

                           </td>
                           <td cellPadding = "0" cellSpacing = "0">
                             <input 
                                className = "CountryValue"
                                name="OfficeCountry"
                                value={this.state.data.OfficeCountry}
                                onChange={event => this.handleOfficeCountry(event)}/>
                               
                           </td>
                       </tr>
                       <span className="ErrorMsg">{this.state.errors.OfficeState}</span>
                       <span className="ErrorMsg">{this.state.errors.OfficePincode}</span>
                       <span className="ErrorMsg">{this.state.errors.OfficeCountry}</span>
                    </tbody>
                    </table>

                    {/* Eight Component */}

                    <div className = "ColouredLabel"> 
                        <label >&nbsp;&nbsp; 8 &nbsp; Address for Communication</label>

                        
                        <input 
                           type="checkbox" 
                           className="Check Left_space"
                           id = "Residence"
                           name = "Communication[6][]"
                           onClick={(e)=>this.handleCheckbox(e,"Communication")}/>
                        <label className = "Label_with_no_space"> Residence</label> &nbsp; &nbsp;

                        <input 
                           type="checkbox" 
                           className="Check"
                           id = "Office"
                           name = "Communication[6][]"
                           onClick={(e)=>this.handleCheckbox(e,"Communication")}/>
                        <label className = "Label_with_no_space"> Office</label>

                        <label className="Label_with_no_space Move_End1"> (please tick as applicable)</label> 
                    </div>
                     
                     {/* Ninth Component */}

                     <div className = "ColouredLabel">
                       <label > &nbsp;&nbsp; 9 &nbsp; Telephone Number & Email ID details</label>
                     </div>

                     <div className= "divnine">
                         <table>
                         <tbody>
                            <tr>
                                <td  className ="Country_td">
                                   <label  className ="Country" >Country code </label>
                                </td>
                                <td className="Std_td" >
                                   <label className = "Std">Area/ STD Code</label>
                                </td>
                                <td className = "Telephone_td">
                                   <label className = "Telephone">Telephone / Mobile number</label>
                                </td>
                            </tr>
                            <tr>
                                <td >
                
                                  <OtpInput
                                     className = "Country_td"
                                     name="CountryCode"
                                     value={this.state.data.CountryCode}
                                     onChange={otp => this.handleInput(otp, "CountryCode" , "1")}
                                     numInputs={3} 
                                  />
                                  
                                </td>  
                                <td >
                                   <OtpInput
                                      className = "Std_td"
                                      name="StdCode"
                                      value={this.state.data.StdCode}
                                      onChange={otp => this.handleInput(otp, "StdCode" , "1")}
                                      numInputs={7}
                                    />
                                </td>
                                <td className = "Telephone_td">
                                   <OtpInput
                                      name="PhoneNumber"
                                      value={this.state.data.PhoneNumber}
                                      onChange={otp => this.handleInput(otp, "PhoneNumber" , "1")}
                                      numInputs={13}
                                   />
                                </td>
                            </tr>
                             
                         </tbody>
                         </table>
            
                     </div>
                      

                     <label className= "FirstLabel"> Email ID</label>
                     <input 
                        type= "text" 
                        className = "EmailInput"
                        name="Email"
                        value={this.state.data.Email}
                        onChange={event => this.handleEmail(event)}/>

                     <span className="ErrorMsg">{this.state.errors.CountryCode}</span>
                     <span className="ErrorMsg">{this.state.errors.StdCode}</span>
                     <span className="ErrorMsg">{this.state.errors.PhoneNumber}</span>
                     <span className="ErrorMsg">{this.state.errors.Email}</span>
                    
                    {/* Tenth Component */}

                    <div className = "ColouredLabel">
                       <label >&nbsp;&nbsp; 10 &nbsp; Status of applicant</label> <br/>
                    </div>

                    <label className="FirstLabel"> &nbsp;&nbsp;Please select status,</label>  
                    <img src = {tick} alt= "tick" className = "image"></img>
                    <label className="Label_with_no_space"> as applicable</label>&nbsp; 

                    <input 
                       type="checkbox" 
                       className="Check GovernmentCheck"
                       id = "Government"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>
                    <label className = "Label_with_no_space">Government</label> <br/>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "Individual"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>
                    <label className = "Label_with_no_space"> Individual</label> &nbsp; 

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "Hindu undivided family"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>
                    <label className = "Label_with_no_space"> Hindu undivided family</label> 

                    <input 
                       type="checkbox" 
                       className="Check "
                       id = "Company"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>
                    <label className = "Label_with_no_space"> Company</label> &nbsp;&nbsp;  

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "Patnership Firm"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>
                    <label className = "Label_with_no_space"> Patnership Firm</label> 
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 

                     <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = " Associations of Persons"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>  
                    <label className = "Label_with_no_space">  Associations of Persons</label>  <br/>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "Trusts"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Trusts</label>  &nbsp;&nbsp;  &nbsp;&nbsp; 

                     <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "Body of Individuals"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/>    
                    <label className = "Label_with_no_space"> Body of Individuals</label>&nbsp; 

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "Local Authority"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Local Authority</label> 

                    <input 
                       type="checkbox" 
                       className="Check "
                       id = "Artificial Juridical Persons"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Artificial Juridical Persons</label> 

                    <input 
                       type="checkbox" 
                       className="Check "
                       id = "Individual"
                       name = "Status[7][]"
                       onClick={(e)=>this.handleCheckbox(e,"Status")}/> 
                    <label className = "Label_with_no_space"> Individual</label> <br/>

                    {/* Eleventh Component */}

                    <div className = "ColouredLabel">
                        <label>&nbsp;&nbsp; 11 &nbsp; Registration Number (for company, firms, LLPs etc.)</label>
                    </div>
                    
                    <div className= "IndividualCheck">   

                       <OtpInput
                         name="RegistrationNumber"
                         value={this.state.data.RegistrationNumber}
                         onChange={otp => this.handleInput(otp, "RegistrationNumber" , "1")}
                         numInputs={30}
                       />  
                        <span className="ErrorMsg">{this.state.errors.RegistrationNumber}</span>
                    </div>

                    {/* Twelth Component */}

                    <div className = "ColouredLabel"> 
                    <label > &nbsp;&nbsp;12 &nbsp; In case of a person, who is required to quote Aadhaar number or the Enrolment ID of Aadhaar application form as per section 139 AA</label>
                    </div>
                   
                    <div className= "divtwelve">
                       <table>
                       <tbody>
                           <tr>
                              <td  className ="twelve_td">
                                 <label  className ="twelve" >Please mention your AADHAAR number (if allotted) </label>
                              </td>
                              <td >
                                 <OtpInput
                                     className = "twelve"
                                     name="AadhaarNumber"
                                     value={this.state.data.AadhaarNumber}
                                     onChange={otp => this.handleInput(otp, "AadhaarNumber" , "1")}
                                     numInputs={12}
                                  />
                                  <span className="ErrorMsg">{this.state.errors.AadhaarNumber}</span>

                              </td>
                            </tr>
                       </tbody>
                       </table>
            
                    </div>

                    <label className="FirstLabel"> If AADHAAR number is not allotted, please mention the enrolment ID of Aadhaar application form </label> <br/>

                    <div className= "Left_space_input">   
                       <OtpInput
                         name="EnrolmentId"
                         value={this.state.data.EnrolmentId}
                         onChange={otp => this.handleInput(otp, "EnrolmentId" , "1")}
                         numInputs={28}
                       />  
                       <span className="ErrorMsg">{this.state.errors.EnrolmentId}</span>

                    </div>

                    <label className="FirstLabel"> Name as per AADHAAR letter or card or as per the Enrolment ID of Aadhaar application form</label> <br/>
                    
                    <div className = "Left_space2">
                    
                        <OtpInput
                           name="AadhaarLastName"
                           value={this.state.data.AadhaarLastName}
                           onChange={otp => this.handleInput(otp, "AadhaarLastName" , "1")}
                           numInputs={25}
                        />  
                        <span className="ErrorMsg">{this.state.errors.AadhaarLastName}</span>

                         <OtpInput
                           name="AadhaarFirstName"
                           value={this.state.data.AadhaarFirstName}
                           onChange={otp => this.handleInput(otp, "AadhaarFirstName" , "1")}
                           numInputs={25}
                        />  
                        <span className="ErrorMsg">{this.state.errors.AadhaarFirstName}</span>

                        <OtpInput
                           name="AadhaarMiddleName"
                           value={this.state.data.AadhaarMiddleName}
                           onChange={otp => this.handleInput(otp, "AadhaarMiddleName" , "1")}
                           numInputs={25}
                        />  
                        <span className="ErrorMsg">{this.state.errors.AadhaarMiddleName}</span>

                    </div>

                    {/* Thirteeenth Component */}

                    <div className = "ColouredLabel">  
                       <label>&nbsp;&nbsp;13 &nbsp; Source of Income</label> 
                       <label className = "ColouredLabel Move_End2 Italic_text"> Please select,</label> 
                       <img src= {tick} alt = "tick" className = "image"></img>
                       <label className = "ColouredLabel"> as applicable</label>
                    </div>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck "
                       id = " Salary"
                       name = "Income[8][]"
                       onClick={(e)=>this.handleCheckbox(e,"Income")}/>                    
                    <label className = "Label_with_no_space"> Salary</label> 

                     <input 
                       type="checkbox" 
                       className="Check CapitalCheck "
                       id = "Capital Gains"
                       name = "Income[8][]"
                       onClick={(e)=>this.handleCheckbox(e,"Income")}/>                      
                    <label className = "Label_with_no_space"> Capital Gains</label>  <br/>

                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = "IncomefromBusiness"
                       name = "Income[8][]"
                       onClick={(e)=>this.handleCheckbox(e,"Income")}/>                    
                    <label className = "Label_with_no_space"> Income from Business / Profession</label> 

                     
                         
                      <label className = "FirstLabel"> Business/Profession code</label> 
                      <input 
                         type= "text" 
                         className = "inputBox" 
                         id = "BusinessCodeDiv" 
                         name = "BusinessCode1"
                         maxLength = "2"
                         disabled={!this.state.isEnabled}
                         value={this.state.data.BusinessCode1}
                         onChange={event => this.handleBusinessCode1(event)}/>

                      <input 
                         type= "text" 
                         className = "inputBox" 
                         id = "BusinessCodeDiv1" 
                         name = "BusinessCode2"
                         maxLength = "2"
                         disabled={!this.state.isEnabled}
                         value={this.state.data.BusinessCode2}
                         onChange={event => this.handleBusinessCode2(event)}/>
                      <label className = "Label_with_no_space"> [For Code: Refer instructions] </label> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       
                     

                    <input 
                       type="checkbox" 
                       className="Check Telephone_space"
                       id = "Income from Other sources"
                       name = "Income[8][]"
                       onClick={(e)=>this.handleCheckbox(e,"Income")}/>                         
                    <label className = "Label_with_no_space"> Income from Other sources</label> <br/>
                    
                    <input 
                       type="checkbox" 
                       className="Check IndividualCheck"
                       id = " Income from House property"
                       name = "Income[8][]"
                       onClick={(e)=>this.handleCheckbox(e,"Income")}/>    
                    <label className = "Label_with_no_space"> Income from House property</label>

                    <input 
                       type="checkbox" 
                       className="Check End_space"
                       id = " No income"
                       name = "Income[8][]"
                       onClick={(e)=>this.handleCheckbox(e,"Income")}/> 
                    <label className = "Label_with_no_space"> No income</label>

                    <span className="ErrorMsg">{this.state.errors.BusinessCode}</span>

                    {/* Fourteenth Component */}

                    <div className = "ColouredLabel"> 
                        <label >&nbsp;&nbsp; 14 &nbsp; Representative Assessee (RA)</label>
                    </div>
                     
                    <label className="FirstLabel"> &nbsp;&nbsp; Full name, address of the Representative Assessee, who is assessible under the Income Tax Act in respect of the person, whose particulars have
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;been given in the column 1-13.</label> 
                    
                    <div className = "ColouredLabel"> 
                        <label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Full Name (Full expanded name : initials are not permitted)</label>
                    </div>

                    <label className="FirstLabel"> Please select title,</label>
                   <img src= {tick} alt = "tick" className = "image"/>  
                   <label className="Label_with_no_space"> as applicable</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = " Shri"
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleThree")}/>
                   <label className="Label_with_no_space"> Shri</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = " Smt."
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleThree")}/>
                   <label className="Label_with_no_space"> Smt.</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "Kumari"
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleThree")}/>                
                   <label className="Label_with_no_space"> Kumari</label>

                   <input 
                      type="checkbox" 
                      className="Check"
                      id = "M/s"
                      name = "NameTitleThree[9][]"
                      onClick={(e)=>this.handleCheckbox(e,"NameTitleThree")}/>      
                   <input type="checkbox" className="Check" />
                   <label className="Label_with_no_space"> M/s</label> <br />
                    
                   <table>
                   <tbody>
                      <tr>
                         <td className ="first_td">
                           {this.state.name.map((data, index) =>
                               <label className="elements"> {data} <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">

                           <OtpInput
                              name="RALastName"
                              value={this.state.data.RALastName}
                              onChange={otp => this.handleInput(otp, "RALastName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.RALastName}</span>

                            <OtpInput
                              name="RAFirstName"
                              value={this.state.data.RAFirstName}
                              onChange={otp => this.handleInput(otp, "RAFirstName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.RAFirstName}</span>

                            <OtpInput
                              name="RAMiddleName"
                              value={this.state.data.RAMiddleName}
                              onChange={otp => this.handleInput(otp, "RAMiddleName" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.RAMiddleName}</span>

                         </td>
                      </tr>
                   </tbody>
                   </table>

                   <div className = "ColouredLabel"> 
                       <label >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Address</label>

                   </div>

                   <table>
                   <tbody>
                      <tr>
                         <td className ="first_td">
                            {this.state.addressTwo.map((data, index) =>
                               <label className="elements"> {data} <br/></label>   
                            )}
                         </td>

                         <td className = "secondtd">
                            <OtpInput
                              name="RAFlat"
                              value={this.state.data.RAFlat}
                              onChange={otp => this.handleInput(otp, "RAFlat" , "1")}
                              numInputs={25}
                            />
                            <span className="ErrorMsg">{this.state.errors.RAFlat}</span>

                            <OtpInput
                              name="RAPremises"
                              value={this.state.data.RAPremises}
                              onChange={otp => this.handleInput(otp, "RAPremises" , "1")}
                              numInputs={25}
                            />
                             <span className="ErrorMsg">{this.state.errors.RAPremises}</span>
                            
                            <OtpInput
                              name="RARoad"
                              value={this.state.data.RARoad}
                              onChange={otp => this.handleInput(otp, "RARoad" , "1")}
                              numInputs={25}
                            />
                             <span className="ErrorMsg">{this.state.errors.RARoad}</span>

                            <OtpInput
                              name="RAArea"
                              value={this.state.data.RAArea}
                              onChange={otp => this.handleInput(otp, "RAArea" , "1")}
                              numInputs={25}
                            />
                             <span className="ErrorMsg">{this.state.errors.RAArea}</span>

                            <OtpInput
                              name="RATown"
                              value={this.state.data.RATown}
                              onChange={otp => this.handleInput(otp, "RATown" , "1")}
                              numInputs={25}
                            />
                             <span className="ErrorMsg">{this.state.errors.RATown}</span>


                         </td>
                      </tr>
                    </tbody>
                    </table>

                    <table cellPadding = "0" cellSpacing = "0"  className = "divState">
                    <tbody>
                        <tr>
                           <td >
                             <label className = "StateId"> State / Union Territory </label>
                          </td>
                          <td >
                             <label className = "PincodeId"> Pincode / Zip code </label>
                          </td>
                       </tr>
                       <tr>
                          <td >
                             <input 
                                 className = "StateValue"
                                 name="RAState"
                                 value={this.state.data.RAState}
                                 onChange={event => this.handleRAState(event)}/>
                              
                          </td>
                          <td> 
                             <OtpInput
                                className = "PincodeValue"
                                name="RAPincode"
                                value={this.state.data.RAPincode}
                                onChange={otp => this.handleInput(otp, "RAPincode" , "1")}
                                numInputs={7}
                             />
                            
                           </td>
                       </tr>
                       <span className="ErrorMsg">{this.state.errors.RAState}</span>
                       <span className="ErrorMsg">{this.state.errors.RAPincode}</span>

                    </tbody>
                    </table>
                 
                 {/* Fifteenth Component */}
                   
                    <div className = "ColouredLabel">
                    <label  className = "ColouredLabel">&nbsp;&nbsp;15 &nbsp; Douments submitted as Proof of Identity (POI), Proof of Address (POA) and Proof of Date of Birth (POB)</label>
                    </div>
                    
                    <label className= "FirstLabel"> I/We have enclosed</label> &nbsp; 
                    <input 
                       type= "text" 
                       className = "CountryInput"
                       name="POI"
                       value={this.state.data.POI}
                       onChange={event => this.handlePOI(event)}/> &nbsp; 
                    <label className="Label_with_no_space"> as proof of identity,</label> &nbsp; 
                     

                    <input 
                       type= "text" 
                       className = "CountryInput"
                       name="POA"
                       value={this.state.data.POA}
                       onChange={event => this.handlePOA(event)}/> 
                    <span className="ErrorMsg">{this.state.errors.POA}</span>
                    <span className="ErrorMsg">{this.state.errors.POI}</span><br/>
                    
                    <label className= "FirstLabel"> as proof of address and</label>&nbsp; 
                     

                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="POB"
                        value={this.state.data.POB}
                        onChange={event => this.handlePOB(event)}/>&nbsp; 

                    <label className="Label_with_no_space"> as proof of date of birth.</label>
                    <span className="ErrorMsg">{this.state.errors.POB}</span> <br/>
                     
                    <label className= "FirstLabel"> [Please refer to the instructions (as specified in Rule 114 of I.I.Rules, 1962) for list of mandatory certified documents to be submitted as applicable]</label> <br/>
                    <label className= "FirstLabel"> [Annexure A, Annexure B & Annexure C are to be used wherever applicable]</label> <br/>
                      
                      
                    {/* Sixteenth Component */}

                    <label  className = "ColouredLabel"> &nbsp;&nbsp; 16 </label> 
                    <label className= "Label_with_no_space"> &nbsp; I/We</label> &nbsp;
               
                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="Applicant"
                        value={this.state.data.Applicant}
                        onChange={event => this.handleApplicant(event)}/>
                    <label className= "Declaration2Label">, the applicant, in the capacity of</label> &nbsp;
                    
                    <input 
                        type= "text" 
                        className = "CountryInput"
                        name="Capacity"
                        value={this.state.data.Capacity}
                        onChange={event => this.handleCapacity(event)}/> <br/>

                    <label className= "FirstLabel">do hereby declare that what is stated above is true to the best of my/our information and belief.</label>  
                    <span className="ErrorMsg">{this.state.errors.Applicant}</span>
                    <span className="ErrorMsg">{this.state.errors.Capacity}</span>

                </div>
                <br /><br />

           </div>
           <br />
           
            
      </div>


      </div>
      </div>
      
 
    );
  }
}

export default Form1;
