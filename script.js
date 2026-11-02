function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>a-b)
	let finalCost=0
	for(let i=0;i<arr.length;i++)
		{
			let cost=0
			cost=arr[i]+arr[i+1]
			finalCost+=cost
		}
	return finalCost
}

module.exports=mincost;
