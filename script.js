function mincost(arr)
{ 
//write your code here
// return the min cost
  let minCost=0
	for(let i of arr)
		{
			minCost+=i
		}
	console.log(minCost)
	return
}

module.exports=mincost;
