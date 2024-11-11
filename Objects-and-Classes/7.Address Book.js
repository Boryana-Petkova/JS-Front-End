function storesInformation(input) {
    
    const addressBook = {};

   for (const entry of input) {
    const [name, phone] = entry.split(':');
     addressBook[name] = phone;
   }

   let entries = Object.entries(addressBook);

   entries.sort((a, b) => a[0].localeCompare(b[0]));

   for (const [name, phone] of entries) {    
    console.log(`${name} -> ${phone}`);   
    // const [p] = [phone];     
    // console.log(p);
    
   }

}
storesInformation(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   );