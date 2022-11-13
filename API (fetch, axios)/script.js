const tBodyElement = document.querySelector("tbody");

fetch("https://northwind.vercel.app/api/customers/").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)
    for(let i=0;i<data.length;i++){
        const trElement = document.createElement("tr");
       const tdIdElement = document.createElement("td");
       const tdCompanyNameElement = document.createElement("td");
       const tdContactNameElement = document.createElement("td");
       const tdContactTitleElement = document.createElement("td");
       const tdAddressElement = document.createElement("td");
       tdIdElement.textContent = data[i].id;
       tdCompanyNameElement.textContent = data[i].companyName;
       tdContactNameElement.textContent = data[i].contactName;
       tdContactTitleElement.textContent = data[i].contactTitle;
       tdAddressElement.textContent = data[i].address.street+' '+data[i].address.country;
       trElement.append(tdIdElement,tdCompanyNameElement,tdContactNameElement,tdContactTitleElement,tdAddressElement);
       tBodyElement.appendChild(trElement);
    }
});