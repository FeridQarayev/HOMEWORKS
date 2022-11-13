const tBodyElement = document.querySelector("tbody");

axios("https://northwind.vercel.app/api/customers/").then(function (response){
    console.log(response.data)
    for(let i=0;i<response.data.length;i++){
        const trElement = document.createElement("tr");
       const tdIdElement = document.createElement("td");
       const tdCompanyNameElement = document.createElement("td");
       const tdContactNameElement = document.createElement("td");
       const tdContactTitleElement = document.createElement("td");
       const tdAddressElement = document.createElement("td");
       tdIdElement.textContent = response.data[i].id;
       tdCompanyNameElement.textContent = response.data[i].companyName;
       tdContactNameElement.textContent = response.data[i].contactName;
       tdContactTitleElement.textContent = response.data[i].contactTitle;
       tdAddressElement.textContent = response.data[i].address.street+' '+response.data[i].address.country;
       trElement.append(tdIdElement,tdCompanyNameElement,tdContactNameElement,tdContactTitleElement,tdAddressElement);
       tBodyElement.appendChild(trElement);
    }
});