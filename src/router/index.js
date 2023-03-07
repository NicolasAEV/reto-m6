import { Router } from 'express';
const router = Router()

router.get('/', (req, res) => {
      res.render('inicio')
  })
router.get('/list',(req , res) =>{
  console.log(cartones)
  res.render('list',{
    carton : cartones,
    title:'todos los cartones'
  })

}).post('/list',(req,res)=>{
  generar()
  res.render('list',{
    carton : cartones,
    title:'todos los cartones'
  })
})

//funciones
let cartones = [];
const random = ()  =>{
  return Math.floor(Math.random() * 31)
}
const generateAleatorio = () =>{
  let num = []
     for( let  i = 0 ; i < 15; i++){
       //mientras que el largo del 
       while(num.length  < 15){
       let aleatorio = random()
         if(!num.includes(aleatorio)){       

           num.push(aleatorio)               
         }
       }
     }
   return num
 }

 //funcion para crear 5 cartones
 const generarfive = () => {
   for (let i = 1; i < 6; i++) {
     let carton = {
      id : i,
      numeros : generateAleatorio()};
   cartones.push(carton)
   }
   return cartones;
 }
 const generar = () => {

    let carton = {
     id : cartones.length + 1,
     numeros : generateAleatorio()};
     cartones.push(carton)
  return cartones;

  }

generarfive()
 //funcion generar numero random

export default router;