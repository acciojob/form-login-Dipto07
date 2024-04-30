function getFormvalue() {
    //Write your code here
	 const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    const fullName = firstName + ' ' + lastName;
    
    alert(fullName);

}
