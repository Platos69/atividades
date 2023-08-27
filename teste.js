const limit = 50 // Substitua pelo número limite desejado
const primes = []

for (let num = 2; num <= limit; num++) {
  let isPrime = true

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false
      break
    }
  }

  if (isPrime) {
    primes.push(num)
  }
}

console.log(`Números primos até ${limit}: ${primes.join(", ")}`)