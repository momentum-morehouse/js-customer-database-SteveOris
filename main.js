import customers from './customers.js'

let person = [{
  thumbNail: 'https://randomuser.me/api/portraits/thumb/men/54.jpg',
  name: 'Curtus Ryan',
  email: 'curtis.ryan@example.com',
  address: '8073 rolling green rd'

}]
console.log(person)

function listCustomers(personArray) {
    let customerList = document.querySelector('#customer-list');
    console.log(customerList)

    for (let customer of customers) {
        let newCustomer = document.createElement("li");
        
        // data below //
        let customerName = document.createTextNode(` Name: ${customer.name.first} ${customer.name.last}`);
        let customerAddy = document.createTextNode(` Address: ${customer.location.street} ${customer.location.city}, ${customer.location.state} , Date Joined: ${customer.registered}`);
        let customerDob = document.createTextNode(` Date of Birth: ${customer.dob}`)
        let customerEmail = document.createTextNode(` Email: ${customer.email}`);

        let name = document.createElement("p")
        let address = document.createElement("p");
        let dob = document.createElement("p")
        let email = document.createElement("p");

        name.classList.add("name", "lh-copy");
        address.classList.add("address", "measure", "lh-copy");
        dob.classList.add("dob");
        email.classList.add("email", "2h-copy");

        name.append(customerName)
        address.append(customerAddy);
        dob.append(customerDob);
        email.append(customerEmail);

        newCustomer.append(name, address, dob, email)

        let customerImage = document.createElement("img");
        customerImage.classList.add("br-50", "h4", "w4", "dib", "ba", "b--black-05", "pa2");
        customerImage.src = `${customer.picture.thumbnail}`;

        // let customerEmail = document.createElement("email");
        //newCustomer.append(address, customerEmail);

        newCustomer.prepend(customerImage);
        newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
        customerList.append(newCustomer);
    };



}

listCustomers(person);


