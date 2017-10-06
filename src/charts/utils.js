export function dataset (n, min = 0, max = 100) {
  const data = []

  for (let i = 0; i < n; ++i) {
    data.push(Math.floor(Math.random() * 50))
  }
  return data
}
