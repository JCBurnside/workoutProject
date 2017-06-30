module.exports=(sequlize,DataTypes)=>{
	console.log("LOG IMPORTED")
	return sequlize.define('log',{
		desc:DataTypes.STRING,
		result:DataTypes.STRING,	
		def:DataTypes.STRING,
		owner:DataTypes.INTEGER
	},{})
}