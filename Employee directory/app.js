let employeeList=[]

let employeeDetails=document.getElementById("employeeDetails")
let addEmployeeBtn=document.getElementById("addEmployeeBtn")
let formElement=document.getElementById("formElement")
let homeContainer=document.getElementById("homeContainer")
let cancelElBtn=document.getElementById("cancelElBtn")
let filterSort=document.getElementById("filterSort")
let searchInputNameEmail=document.getElementById("searchInputNameEmail")

let firstNameEl=document.getElementById("firstNameEl")
let lastNameEl=document.getElementById("lastNameEl")
let departmentEl=document.getElementById("departmentEl")
let emailText=document.getElementById("emailText")
let roleEmp=document.getElementById("roleEmp")


addEmployeeBtn.onclick=function(){
    formElement.style.display="block"
    homeContainer.style.display="none"
}

function createAppendEmployee(employee){
    let employeeListCont=document.createElement("li")
    employeeDetails.appendChild(employeeListCont)
    employeeListCont.classList.add("emp_card")

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

    let editBTn=document.createElement("button")
    btnEditDelete.appendChild(editBTn)
    editBTn.textContent="Edit"
    editBTn.classList.add("edit_btn_el")

    let deleteBTn=document.createElement("button")
    btnEditDelete.appendChild(deleteBTn)
    deleteBTn.textContent="Delete"
    deleteBTn.onclick=function(){
        employeeDetails.removeChild(employeeListCont)
    }
}

formElement.addEventListener("submit", function(){
    
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
    firstNameEl.value=""
    lastNameEl.value=""
    departmentEl.value=""
    emailText.value=""
    roleEmp.value=""
    formElement.style.display="none"
    homeContainer.style.display="block"
    
    event.preventDefault()
})

cancelElBtn.onclick=function(){
    formElement.style.display="none"
    homeContainer.style.display="block"
    firstNameEl.value=""
    lastNameEl.value=""
    departmentEl.value=""
    emailText.value=""
    roleEmp.value=""
}

filterSort.onchange=function(){
    if(filterSort.value==="firstName"){
        console.log(employeeDetails.textContent)
        employeeDetails.textContent=""
        let sortedList=employeeList.sort((a,b)=>
        a.firstName.localeCompare(b.firstName))
        for(let sortedEl of sortedList){
            createAppendEmployee(sortedEl)
        }
    }
    if(filterSort.value==="department"){
        employeeDetails.textContent=""
        let sortedDep=employeeList.sort((a,b)=>
            a.department.localeCompare(b.department)
        )
        for(let dep of sortedDep){
            createAppendEmployee(dep)
        }
    }
    }

searchInputNameEmail.addEventListener("input", function(event){
    let searchItem=event.target.value.toLowerCase()
    let newSearchArray=employeeList.filter(el=>el.firstName.toLowerCase().includes(searchItem)
    )
    employeeDetails.textContent=""
    for(let x of newSearchArray){
        createAppendEmployee(employee) 
    }
})

for (let employee of employeeList){
        createAppendEmployee(employee) 
}