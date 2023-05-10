document.getElementsByTagName("body")[0].onload=function()
  {
    //console.log(document.getElementById("state").selectedIndex);
    document.getElementById("province1").selectedIndex=-1;
    document.getElementById("province2").selectedIndex=-1;
  };
  
  function checkvalid() 
    {
      let Fname1 = document.getElementById("Fname1");
      let Lname1 = document.getElementById("Lname1");
      let STaddress1 = document.getElementById("STaddress1");
      let city1 = document.getElementById("city1");
      let province1 = document.getElementById("province1");
      let Pcode1 = document.getElementById("Pcode");
      let phone1 = document.getElementById("phone1");
    
      let Fname2 = document.getElementById("Fname2");
      let Lname2 = document.getElementById("Lname2");
      let STaddress2 = document.getElementById("STaddress2");
      let city2 = document.getElementById("city2");
      let province2 = document.getElementById("province2");
      let Pcode2 = document.getElementById("Pcode2");
      let phone2 = document.getElementById("phone2");
    
      
      if (Fname1.checkvalidity() === false) 
      {
        Fname1.setCustomvalidity("Please fill out field!");
        Fname1.reportvalidity();
      } 
      else if (Lname1.checkvalidity() === false) 
      {
        Lname1.setCustomvalidity("Please fill out field!");
        Lname1.reportvalidity();
      } 
      else if (STaddress1.checkvalidity() === false) 
      {
        STaddress1.setCustomvalidity("Please fill out field!");
        STaddress1.reportvalidity();
      } 
      else if (city1.checkvalidity() === false) 
      {
        city1.setCustomvalidity("Please fill out field!");
        city1.reportvalidity();
      } 
      else if (province1.checkvalidity() === false) 
      {
        province1.setCustomvalidity("Please fill out field!");
        province1.reportvalidity();
      } 
      else if (Pcode1.checkvalidity() === false) 
      {
        Pcode1.setCustomvalidity("Please fill out field!");
        Pcode1.reportvalidity();
      } 
      else if (phone1.checkvalidity() === false) 
      {
        phone1.setCustomvalidity("Please fill out field!");
        phone1.reportvalidity();
      } 
      else if (Fname2.checkvalidity() === false) 
      {
        Fname2.setCustomvalidity("Please fill out field!");
        Fname2.reportvalidity();
      }
      else if (Lname2.checkvalidity() === false) 
      {
        Lname2.setCustomvalidity("Please fill out field!");
        Lname2.reportvalidity();
      }
      else if (STaddress2.checkvalidity() === false) 
      {
        STaddress2.setCustomvalidity("Please fill out field!");
        STaddress2.reportvalidity();
      }
      else if (city2.checkvalidity() === false) 
      {
        city2.setCustomvalidity("Please fill out field!");
        city2.reportvalidity();
      }
      else if (province2.checkvalidity() === false) 
      {
        province2.setCustomvalidity("Please fill out field!");
        province2.reportvalidity();
      }
      else if (Pcode2.checkvalidity() === false) 
      {
        Pcode2.setCustomvalidity("Please fill out field!");
        Pcode2.reportvalidity();
      }
      else if (phone2.checkvalidity() === false) 
      {
        phone2.setCustomvalidity("Please fill out field!");
        phone2.reportvalidity();
      }
    }

    function handlecheckbox()
    {
      let checkbox = document.getElementById("sameAsBilling");

      if (checkbox.checked === true) 
      {
        console.log("yes");
       
        document.getElementById("Fname2").value = document.getElementById("Fname1").value;
    
        document.getElementById("Lname2").value = document.getElementById("Lname1").value;
    
        document.getElementById("STaddress2").value = document.getElementById("STaddress1").value;
    
        document.getElementById("city2").value = document.getElementById("city1").value;
    
        document.getElementById("province2").value = document.getElementById("province1").value;
    
        document.getElementById("Pcode2").value = document.getElementById("Pcode1").value;
    
        document.getElementById("phone2").value = document.getElementById("phone1").value; 
      }
    }
