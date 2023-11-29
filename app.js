

user_name=prompt("Enter User Name")
ph_no=prompt("Enter Your Phone Number")
email=prompt("Enter Your Email")
password=prompt("Enter Your Password")
re_password=prompt("Confirm Your Password")

if(user_name==""||ph_no==""||email==""||password==""||re_password=="")
{
    alert("Please Fill input")
    
}

else if(password==re_password)
{
    alert("Your are successfully registered!")
}
else {
    alert("Password is wrong")
}




















