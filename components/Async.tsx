export default function Async(): number {
    // Returns a random number between 1 and 6
    //function randomNumber(): number {
       // return 1// Math.floor(Math.random() * 6 ) +1
   // }
    let counter: number = 1
    setTimeout(() => counter += 1, 1000)
   return counter
}