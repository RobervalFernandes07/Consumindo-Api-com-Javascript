const URL = 'https://dummyjson.com/products';

async function chamarAPi(){
   const resp = await fetch(URL);
   if (resp.status === 200){
        const obj = await resp.json();
        console.log(obj);
   }
}

chamarAPi()