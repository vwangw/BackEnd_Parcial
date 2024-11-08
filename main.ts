import { MongoClient } from 'mongodb';

const _url = 'mongodb+srv://otheruser:otheruser@nebrija-cluster.f0m7c.mongodb.net/?retryWrites=true&w=majority&appName=Nebrija-Cluster';
const client = new MongoClient(_url);

const dbName = 'bibliotecadb';

const handler = async (req : Request): Promise<Response> => {
  const url = new URL(req.url);
  const metodo = req.method;
  const ruta= url.pathname

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const librosCollection = db.collection('libros');
  const autoresCollection = db.collection('autores');

  if(metodo === "GET"){
    if(ruta === "/libros"){
      const titulo = url.searchParams;
      if(titulo){
        
        console.log(librosCollection);
      }else{
        console.log(librosCollection);
      }

    }
  }else if(metodo === "POST"){


  }
  return new Response ("Error Endpoint",{status:404});
}