const date = "2023-06-16T14:46:05";
const date2 = "2023-06-17T00:46:05";

// console.log(+date.slice(11).replaceAll(':',''))
process.env.TZ = "Asia/Tehran";

const getTime = (time) => new Date(
    `${time.toString().slice(0, 4)}-${time.toString().slice(4, 6)}-${time
      .toString()
      .slice(6, 8)}T${time.toString().slice(8, 10)}:${time
      .toString()
      .slice(10, 12)}:${time.toString().slice(12, 14)}`,
  )

//   console.log(getTime('20230616144558'))
//   console.log(new Date().toLocaleString('en-US',{
//     timeZone:'Asia/Tehran'
//   }))

console.log(new Date().toLocaleTimeString('en-US',{timeZone:'Asia/Tehran'}))

