// const helloHandler = (who) => {
//   const hello = () => console.log(`Hello ${who}`)
//   return hello
// }

// helloHandler modified
const helloHandler2 = (who) => () => console.log(`Hello ${who} 👋`)
export const Greeting = () => (
  <button
    className="counterButton"
    style={{ color: 'black' }}
    onClick={helloHandler2('Joe')}
  >
    Hello
  </button>
)
