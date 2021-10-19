console.log('hello parcell')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}

test()
//비동기 함수