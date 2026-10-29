function mincost(arr)
{ 
//write your code here
// return the min cost
  let cost=[]
	let sum=0
	for(let i of arr)
		{
			sum+=i
			cost.push(sum)
		}
	let minCost=0
	for(let j of cost)
		{
			minCost+=j
		}
	return minCost
}

module.exports=mincost;
