let employeeList=[
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', department: 'HR', role: 'Manager' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', department: 'IT', role: 'Developer' }
]

let employeeDetails=document.getElementById("employeeDetails")
let addEmployeeBtn=document.getElementById("addEmployeeBtn")
let formElement=document.getElementById("formElement")
let homeContainer=document.getElementById("homeContainer")

addEmployeeBtn.onclick=function(){
    formElement.style.display="block"
    homeContainer.style.display="none"
}


function createAppendEmployee(employee){
    let employeeListCont=document.createElement("li")
    employeeDetails.appendChild(employeeListCont)

    let empName=document.createElement("p")
    employeeListCont.appendChild(empName)
    empName.textContent=employee.firstName+" "+employee.lastName

    let empEmail=document.createElement("p")
    employeeListCont.appendChild(empEmail)
    empEmail.textContent="Email: "+employee.email

    let empDepartment=document.createElement("p")
    employeeListCont.appendChild(empDepartment)
    empDepartment.textContent="Department: "+employee.department

    let empRole=document.createElement("p")
    employeeListCont.appendChild(empRole)
    empRole.textContent="Role: "+employee.role

    let btnEditDelete=document.createElement("div")
    employeeListCont.appendChild(btnEditDelete)

    let editBTn=document.createElement("btn")
    btnEditDelete.appendChild(editBTn)
    editBTn.textContent="Edit"

    let deleteBTn=document.createElement("btn")
    btnEditDelete.appendChild(deleteBTn)
    deleteBTn.textContent="Delete"
}

formElement.addEventListener("submit", function(){
    let firstNameEl=document.getElementById("firstNameEl")
    let lastNameEl=document.getElementById("lastNameEl")
    let departmentEl=document.getElementById("departmentEl")
    let emailText=document.getElementById("emailText")
    let roleEmp=document.getElementById("roleEmp")
    
    let IdEmployee=employeeList.length+1

    let newEmployee={
        id:IdEmployee,
        firstName:firstNameEl.value,
        lastName:lastNameEl.value,
        email:emailText.value,
        department:departmentEl.value,
        role:roleEmp.value
    }
    employeeList.push(newEmployee)
    createAppendEmployee(newEmployee)
    formElement.style.display="none"
    homeContainer.style.display="block"
    event.preventDefault()
})

for (let employee of employeeList){
    createAppendEmployee(employee)
}